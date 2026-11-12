<?php
/**
 * Custom Post Types for Testimonials and FAQs (No Paid Plugins Required)
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_register_cpts() {
	// Testimonials CPT
	register_post_type(
		'bc_testimonial',
		array(
			'labels'       => array(
				'name'          => __( 'Testimonials', 'bharat-cibil' ),
				'singular_name' => __( 'Testimonial', 'bharat-cibil' ),
				'add_new_item'  => __( 'Add New Client Testimonial', 'bharat-cibil' ),
				'edit_item'     => __( 'Edit Testimonial', 'bharat-cibil' ),
			),
			'public'       => false,
			'show_ui'      => true,
			'show_in_rest' => true,
			'menu_icon'    => 'dashicons-format-quote',
			'supports'     => array( 'title', 'editor' ),
		)
	);

	// FAQs CPT
	register_post_type(
		'bc_faq',
		array(
			'labels'       => array(
				'name'          => __( 'FAQs', 'bharat-cibil' ),
				'singular_name' => __( 'FAQ', 'bharat-cibil' ),
				'add_new_item'  => __( 'Add New FAQ', 'bharat-cibil' ),
				'edit_item'     => __( 'Edit FAQ', 'bharat-cibil' ),
			),
			'public'       => false,
			'show_ui'      => true,
			'show_in_rest' => true,
			'menu_icon'    => 'dashicons-editor-help',
			'supports'     => array( 'title', 'editor', 'page-attributes' ),
		)
	);
}
add_action( 'init', 'bharat_cibil_register_cpts' );

// Meta Box for Testimonials (Location, Category, Sample Placeholder Flag)
function bharat_cibil_testimonial_metabox() {
	add_meta_box(
		'bc_testimonial_details',
		__( 'Client Testimonial Details', 'bharat-cibil' ),
		'bharat_cibil_testimonial_metabox_cb',
		'bc_testimonial',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'bharat_cibil_testimonial_metabox' );

function bharat_cibil_testimonial_metabox_cb( $post ) {
	wp_nonce_field( 'bc_save_testimonial_meta', 'bc_testimonial_nonce' );
	$location  = get_post_meta( $post->ID, '_bc_location', true );
	$category  = get_post_meta( $post->ID, '_bc_category', true );
	$is_sample = get_post_meta( $post->ID, '_bc_is_sample', true );
	?>
	<p>
		<label for="bc_location"><strong><?php esc_html_e( 'Client City / State:', 'bharat-cibil' ); ?></strong></label><br />
		<input type="text" id="bc_location" name="bc_location" value="<?php echo esc_attr( $location ); ?>" class="regular-text" placeholder="e.g. Delhi" />
	</p>
	<p>
		<label for="bc_category"><strong><?php esc_html_e( 'Service Category:', 'bharat-cibil' ); ?></strong></label><br />
		<input type="text" id="bc_category" name="bc_category" value="<?php echo esc_attr( $category ); ?>" class="regular-text" placeholder="e.g. Individual CIBIL Rectification" />
	</p>
	<p>
		<label>
			<input type="checkbox" name="bc_is_sample" value="1" <?php checked( $is_sample, '1' ); ?> />
			<strong><?php esc_html_e( 'Display visible SAMPLE / DEMO PLACEHOLDER label (uncheck only for authentic, permission-based client reviews)', 'bharat-cibil' ); ?></strong>
		</label>
	</p>
	<?php
}

function bharat_cibil_save_testimonial_meta( $post_id ) {
	if ( ! isset( $_POST['bc_testimonial_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['bc_testimonial_nonce'] ) ), 'bc_save_testimonial_meta' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( isset( $_POST['bc_location'] ) ) {
		update_post_meta( $post_id, '_bc_location', sanitize_text_field( wp_unslash( $_POST['bc_location'] ) ) );
	}
	if ( isset( $_POST['bc_category'] ) ) {
		update_post_meta( $post_id, '_bc_category', sanitize_text_field( wp_unslash( $_POST['bc_category'] ) ) );
	}
	$is_sample = isset( $_POST['bc_is_sample'] ) ? '1' : '0';
	update_post_meta( $post_id, '_bc_is_sample', $is_sample );
}
add_action( 'save_post_bc_testimonial', 'bharat_cibil_save_testimonial_meta' );
