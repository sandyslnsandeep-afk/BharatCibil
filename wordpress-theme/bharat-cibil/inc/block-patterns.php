<?php
/**
 * Reusable Gutenberg Block Patterns for Bharat Cibil
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_register_block_patterns() {
	if ( ! function_exists( 'register_block_pattern_category' ) ) {
		return;
	}

	register_block_pattern_category(
		'bharat-cibil',
		array( 'label' => __( 'Bharat Cibil Consultancy', 'bharat-cibil' ) )
	);

	register_block_pattern(
		'bharat-cibil/cta-consultation',
		array(
			'title'       => __( 'Bharat Cibil Consultation CTA Banner', 'bharat-cibil' ),
			'categories'  => array( 'bharat-cibil' ),
			'description' => __( 'Navy consultation call-to-action block with WhatsApp button.', 'bharat-cibil' ),
			'content'     => '<!-- wp:group {"style":{"color":{"background":"#142D4E","text":"#ffffff"},"spacing":{"padding":{"top":"2.5rem","bottom":"2.5rem","left":"2rem","right":"2rem"}},"border":{"radius":"12px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-text-color has-background" style="border-radius:12px;color:#ffffff;background-color:#142D4E;padding-top:2.5rem;padding-right:2rem;padding-bottom:2.5rem;padding-left:2rem"><!-- wp:heading {"level":2,"style":{"color":{"text":"#ffffff"}}} -->
<h2 class="wp-block-heading has-text-color" style="color:#ffffff">Don&#39;t Let Credit Report Errors Hold Back Your Financial Plans.</h2>
<!-- /wp:heading -->
<!-- wp:paragraph {"style":{"color":{"text":"#E2E8F0"}}} -->
<p class="has-text-color" style="color:#E2E8F0">Get your credit report reviewed and understand the available rectification options through documented and lawful processes.</p>
<!-- /wp:paragraph -->
<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#087F5B","text":"#ffffff"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="https://wa.me/917018223850" target="_blank" rel="noreferrer noopener" style="color:#ffffff;background-color:#087F5B">WhatsApp Bharat Cibil</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
		)
	);

	register_block_pattern(
		'bharat-cibil/four-step-process',
		array(
			'title'      => __( 'Bharat Cibil 4-Step Process Grid', 'bharat-cibil' ),
			'categories' => array( 'bharat-cibil' ),
			'content'    => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">01 — Consultation</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Understand the customer&#39;s credit problem and immediate lending requirements.</p><!-- /wp:paragraph --></div>
<!-- /wp:column -->
<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">02 — Report Analysis</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Review the credit report and supporting documents to identify potential inaccuracies.</p><!-- /wp:paragraph --></div>
<!-- /wp:column -->
<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">03 — Rectification Assistance</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Prepare and guide appropriate disputes and communications to lenders and credit bureaus.</p><!-- /wp:paragraph --></div>
<!-- /wp:column -->
<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">04 — Follow-up &amp; Verification</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Track responses and verify whether approved corrections are reflected in the updated report.</p><!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
		)
	);
}
add_action( 'init', 'bharat_cibil_register_block_patterns' );
