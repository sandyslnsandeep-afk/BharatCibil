<?php
/**
 * Automated Dynamic XML Sitemap & robots.txt Generator
 * Dynamically includes Home, all published Pages, and all published Knowledge Centre Posts.
 * Automatically defers if Yoast SEO or Rank Math SEO is active.
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_sitemap_rewrite() {
	if ( bharat_cibil_has_seo_plugin() ) {
		return;
	}
	add_rewrite_rule( '^sitemap\.xml$', 'index.php?bc_sitemap=1', 'top' );
}
add_action( 'init', 'bharat_cibil_sitemap_rewrite' );

function bharat_cibil_sitemap_query_vars( $vars ) {
	$vars[] = 'bc_sitemap';
	return $vars;
}
add_filter( 'query_vars', 'bharat_cibil_sitemap_query_vars' );

function bharat_cibil_render_sitemap() {
	if ( ! get_query_var( 'bc_sitemap' ) || bharat_cibil_has_seo_plugin() ) {
		return;
	}

	header( 'Content-Type: application/xml; charset=UTF-8' );
	header( 'X-Robots-Tag: noindex, follow', true );

	echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
	echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

	// 1. Homepage
	echo "  <url>\n";
	echo '    <loc>' . esc_url( home_url( '/' ) ) . "</loc>\n";
	echo '    <lastmod>' . esc_html( gmdate( 'Y-m-d' ) ) . "</lastmod>\n";
	echo "    <changefreq>weekly</changefreq>\n";
	echo "    <priority>1.0</priority>\n";
	echo "  </url>\n";

	// 2. All Published Pages
	$pages = get_pages(
		array(
			'post_status' => 'publish',
			'sort_column' => 'menu_order,post_title',
		)
	);
	$front_id = (int) get_option( 'page_on_front' );

	foreach ( $pages as $page ) {
		if ( (int) $page->ID === $front_id ) {
			continue;
		}
		$lastmod = get_the_modified_date( 'Y-m-d', $page->ID );
		$slug    = $page->post_name;
		$prio    = in_array( $slug, array( 'services', 'individual-cibil-rectification', 'commercial-cibil-cmr-improvement', 'written-off-settled-account-rectification', 'loan-rejection-assistance', 'credit-report-analysis' ), true ) ? '0.9' : '0.8';
		echo "  <url>\n";
		echo '    <loc>' . esc_url( get_permalink( $page->ID ) ) . "</loc>\n";
		echo '    <lastmod>' . esc_html( $lastmod ) . "</lastmod>\n";
		echo "    <changefreq>monthly</changefreq>\n";
		echo '    <priority>' . esc_html( $prio ) . "</priority>\n";
		echo "  </url>\n";
	}

	// 3. All Published Knowledge Centre Articles (Posts)
	$posts = get_posts(
		array(
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			'orderby'        => 'modified',
			'order'          => 'DESC',
		)
	);

	foreach ( $posts as $post_item ) {
		$lastmod = get_the_modified_date( 'Y-m-d', $post_item->ID );
		echo "  <url>\n";
		echo '    <loc>' . esc_url( get_permalink( $post_item->ID ) ) . "</loc>\n";
		echo '    <lastmod>' . esc_html( $lastmod ) . "</lastmod>\n";
		echo "    <changefreq>monthly</changefreq>\n";
		echo "    <priority>0.7</priority>\n";
		echo "  </url>\n";
	}

	echo '</urlset>';
	exit;
}
add_action( 'template_redirect', 'bharat_cibil_render_sitemap' );

function bharat_cibil_robots_txt( $output, $public ) {
	if ( $public && ! bharat_cibil_has_seo_plugin() ) {
		$output .= "\nSitemap: " . esc_url( home_url( '/sitemap.xml' ) ) . "\n";
	}
	return $output;
}
add_filter( 'robots_txt', 'bharat_cibil_robots_txt', 10, 2 );

function bharat_cibil_flush_rewrites() {
	bharat_cibil_sitemap_rewrite();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'bharat_cibil_flush_rewrites' );
