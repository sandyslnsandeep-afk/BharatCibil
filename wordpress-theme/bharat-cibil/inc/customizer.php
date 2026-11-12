<?php
/**
 * WordPress Theme Customizer Settings for Bharat Cibil
 * Allows editing WhatsApp number, Hero headline/photo, Founder photo & message, and Disclaimer from WP Dashboard.
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_customize_register( $wp_customize ) {
	$wp_customize->add_panel(
		'bharat_cibil_panel',
		array(
			'title'       => __( 'Bharat Cibil Settings', 'bharat-cibil' ),
			'description' => __( 'Edit WhatsApp details, Hero section, Founder profile, and Legal notice.', 'bharat-cibil' ),
			'priority'    => 30,
		)
	);

	// 1. WhatsApp & Contact
	$wp_customize->add_section(
		'bc_whatsapp_section',
		array(
			'title' => __( 'WhatsApp & Contact Details', 'bharat-cibil' ),
			'panel' => 'bharat_cibil_panel',
		)
	);

	$wp_customize->add_setting( 'bc_whatsapp_number', array( 'default' => '917018223850', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_whatsapp_number',
		array(
			'label'       => __( 'WhatsApp Number (Country Code + Digits, no +)', 'bharat-cibil' ),
			'section'     => 'bc_whatsapp_section',
			'type'        => 'text',
		)
	);

	$wp_customize->add_setting( 'bc_whatsapp_display', array( 'default' => '+91 7018223850', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_whatsapp_display',
		array(
			'label'   => __( 'WhatsApp Display Format', 'bharat-cibil' ),
			'section' => 'bc_whatsapp_section',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting( 'bc_primary_email', array( 'default' => 'contact@bharatcibil.com', 'sanitize_callback' => 'sanitize_email' ) );
	$wp_customize->add_control(
		'bc_primary_email',
		array(
			'label'   => __( 'Primary Contact Email', 'bharat-cibil' ),
			'section' => 'bc_whatsapp_section',
			'type'    => 'email',
		)
	);

	$wp_customize->add_setting( 'bc_secondary_email', array( 'default' => 'bharatcibil6@gmail.com', 'sanitize_callback' => 'sanitize_email' ) );
	$wp_customize->add_control(
		'bc_secondary_email',
		array(
			'label'   => __( 'Alternate Contact Email', 'bharat-cibil' ),
			'section' => 'bc_whatsapp_section',
			'type'    => 'email',
		)
	);

	// 2. Hero Section
	$wp_customize->add_section(
		'bc_hero_section',
		array(
			'title' => __( 'Homepage Hero Banner', 'bharat-cibil' ),
			'panel' => 'bharat_cibil_panel',
		)
	);

	$wp_customize->add_setting( 'bc_hero_headline', array( 'default' => 'Your Credit History Should Reflect the Truth.', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_hero_headline',
		array(
			'label'   => __( 'Hero Headline', 'bharat-cibil' ),
			'section' => 'bc_hero_section',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting( 'bc_hero_subheading', array( 'default' => 'Expert assistance for CIBIL report rectification, credit score improvement and commercial credit consultancy across India.', 'sanitize_callback' => 'sanitize_textarea_field' ) );
	$wp_customize->add_control(
		'bc_hero_subheading',
		array(
			'label'   => __( 'Hero Subheading', 'bharat-cibil' ),
			'section' => 'bc_hero_section',
			'type'    => 'textarea',
		)
	);

	$wp_customize->add_setting( 'bc_hero_image', array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'bc_hero_image',
			array(
				'label'   => __( 'Hero Consultancy Photograph', 'bharat-cibil' ),
				'section' => 'bc_hero_section',
			)
		)
	);

	// 3. Founder Profile
	$wp_customize->add_section(
		'bc_founder_section',
		array(
			'title' => __( 'Founder Profile & Message', 'bharat-cibil' ),
			'panel' => 'bharat_cibil_panel',
		)
	);

	$wp_customize->add_setting( 'bc_founder_name', array( 'default' => 'Sandiep Shandilya Sharma', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_founder_name',
		array(
			'label'   => __( 'Founder Name', 'bharat-cibil' ),
			'section' => 'bc_founder_section',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting( 'bc_founder_designation', array( 'default' => 'Founder & CEO, Bharat Cibil', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_founder_designation',
		array(
			'label'   => __( 'Designation', 'bharat-cibil' ),
			'section' => 'bc_founder_section',
			'type'    => 'text',
		)
	);

	$wp_customize->add_setting( 'bc_founder_image', array( 'default' => '', 'sanitize_callback' => 'esc_url_raw' ) );
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'bc_founder_image',
			array(
				'label'       => __( 'Founder Photograph (Upload Actual Photo Here)', 'bharat-cibil' ),
				'description' => __( 'Replaces the founder portrait placeholder across the website.', 'bharat-cibil' ),
				'section'     => 'bc_founder_section',
			)
		)
	);

	$wp_customize->add_setting( 'bc_founder_headline', array( 'default' => 'Building Better Credit Awareness and Helping People Move Forward.', 'sanitize_callback' => 'sanitize_text_field' ) );
	$wp_customize->add_control(
		'bc_founder_headline',
		array(
			'label'   => __( 'Founder Message Headline', 'bharat-cibil' ),
			'section' => 'bc_founder_section',
			'type'    => 'text',
		)
	);

	// 4. Footer Disclaimer
	$wp_customize->add_section(
		'bc_legal_section',
		array(
			'title' => __( 'Footer Regulatory Notice', 'bharat-cibil' ),
			'panel' => 'bharat_cibil_panel',
		)
	);

	$wp_customize->add_setting(
		'bc_footer_disclaimer',
		array(
			'default'           => 'Bharat Cibil is an independent credit consultancy founded by Sandiep Shandilya Sharma. It is not a bank, NBFC, lender, or RBI-authorised institution, and is not affiliated with TransUnion CIBIL or any credit bureau. Corrections depend on lender verification and bureau confirmation. Never share OTPs, passwords, or banking PINs.',
			'sanitize_callback' => 'sanitize_textarea_field',
		)
	);
	$wp_customize->add_control(
		'bc_footer_disclaimer',
		array(
			'label'   => __( 'Footer Independence Disclaimer', 'bharat-cibil' ),
			'section' => 'bc_legal_section',
			'type'    => 'textarea',
		)
	);
}
add_action( 'customize_register', 'bharat_cibil_customize_register' );
