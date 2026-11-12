<?php
/**
 * Bharat Cibil Theme Functions
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BHARAT_CIBIL_VERSION', '1.0.0' );

function bharat_cibil_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'responsive-embeds' );

	// Official Logo Support (Preserves original proportions without cropping)
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 120,
			'width'       => 360,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary'         => __( 'Primary Navigation', 'bharat-cibil' ),
			'footer_services' => __( 'Footer Services Menu', 'bharat-cibil' ),
			'footer_company'  => __( 'Footer Company Menu', 'bharat-cibil' ),
			'footer_legal'    => __( 'Footer Legal Menu', 'bharat-cibil' ),
		)
	);
}
add_action( 'after_setup_theme', 'bharat_cibil_setup' );

function bharat_cibil_scripts() {
	wp_enqueue_style(
		'bharat-cibil-fonts',
		'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'bharat-cibil-style',
		get_stylesheet_uri(),
		array( 'bharat-cibil-fonts' ),
		BHARAT_CIBIL_VERSION
	);

	wp_enqueue_script(
		'bharat-cibil-script',
		get_template_directory_uri() . '/assets/js/theme.js',
		array(),
		BHARAT_CIBIL_VERSION,
		true
	);

	wp_localize_script(
		'bharat-cibil-script',
		'bharatCibilConfig',
		array(
			'whatsappNumber' => bharat_cibil_get_whatsapp_number(),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'bharat_cibil_scripts' );

function bharat_cibil_get_whatsapp_number() {
	$num = get_theme_mod( 'bc_whatsapp_number', '917018223850' );
	return preg_replace( '/\D+/', '', $num );
}

function bharat_cibil_get_whatsapp_display() {
	return get_theme_mod( 'bc_whatsapp_display', '+91 7018223850' );
}

function bharat_cibil_get_primary_email() {
	return get_theme_mod( 'bc_primary_email', 'contact@bharatcibil.com' );
}

function bharat_cibil_get_secondary_email() {
	return get_theme_mod( 'bc_secondary_email', 'bharatcibil6@gmail.com' );
}

function bharat_cibil_whatsapp_url( $message = '' ) {
	$number = bharat_cibil_get_whatsapp_number();
	$url    = 'https://wa.me/' . $number;
	if ( ! empty( $message ) ) {
		$url .= '?text=' . rawurlencode( $message );
	}
	return esc_url( $url );
}

require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/cpt-testimonials-faqs.php';
require get_template_directory() . '/inc/seo-schema.php';
require get_template_directory() . '/inc/sitemap.php';
require get_template_directory() . '/inc/block-patterns.php';
require get_template_directory() . '/inc/starter-content.php';
