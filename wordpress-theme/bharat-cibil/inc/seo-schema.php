<?php
/**
 * SEO Meta, OpenGraph, Breadcrumbs, and Schema.org JSON-LD
 * Automatically defers OpenGraph/Schema if Yoast SEO or Rank Math is active.
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_has_seo_plugin() {
	return defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' );
}

function bharat_cibil_output_seo_head() {
	if ( ! bharat_cibil_has_seo_plugin() ) {
		$title = wp_get_document_title();
		$desc  = get_bloginfo( 'description' );
		if ( is_singular() && has_excerpt() ) {
			$desc = wp_strip_all_tags( get_the_excerpt() );
		}
		?>
		<meta name="description" content="<?php echo esc_attr( $desc ); ?>" />
		<meta property="og:type" content="<?php echo is_single() ? 'article' : 'website'; ?>" />
		<meta property="og:site_name" content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" />
		<meta property="og:title" content="<?php echo esc_attr( $title ); ?>" />
		<meta property="og:description" content="<?php echo esc_attr( $desc ); ?>" />
		<meta name="twitter:card" content="summary_large_image" />
		<?php
	}

	// Organization JSON-LD
	$org = array(
		'@context'   => 'https://schema.org',
		'@type'      => 'Organization',
		'name'       => get_bloginfo( 'name' ),
		'email'      => bharat_cibil_get_primary_email(),
		'url'        => home_url( '/' ),
		'founder'    => array(
			'@type'    => 'Person',
			'name'     => get_theme_mod( 'bc_founder_name', 'Sandiep Shandilya Sharma' ),
			'jobTitle' => 'Founder & CEO',
		),
		'areaServed' => array(
			'@type' => 'Country',
			'name'  => 'India',
		),
	);
	echo '<script type="application/ld+json">' . wp_json_encode( $org ) . '</script>' . "\n";

	// Article Schema
	if ( is_singular( 'post' ) ) {
		$article = array(
			'@context'      => 'https://schema.org',
			'@type'         => 'Article',
			'headline'      => get_the_title(),
			'datePublished' => get_the_date( 'c' ),
			'dateModified'  => get_the_modified_date( 'c' ),
			'author'        => array(
				'@type' => 'Organization',
				'name'  => get_bloginfo( 'name' ),
			),
		);
		echo '<script type="application/ld+json">' . wp_json_encode( $article ) . '</script>' . "\n";
	}
}
add_action( 'wp_head', 'bharat_cibil_output_seo_head', 5 );

function bharat_cibil_breadcrumbs() {
	if ( is_front_page() ) {
		return;
	}
	echo '<nav class="bc-breadcrumb" aria-label="Breadcrumb">';
	echo '<a href="' . esc_url( home_url( '/' ) ) . '">Home</a> &rsaquo; ';
	if ( is_single() ) {
		echo '<a href="' . esc_url( home_url( '/knowledge-centre/' ) ) . '">Knowledge Centre</a> &rsaquo; ';
		echo '<span class="current">' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_page() ) {
		echo '<span class="current">' . esc_html( get_the_title() ) . '</span>';
	} elseif ( is_archive() || is_home() ) {
		echo '<span class="current">Knowledge Centre</span>';
	}
	echo '</nav>';
}
