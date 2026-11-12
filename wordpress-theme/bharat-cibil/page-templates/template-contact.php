<?php
/**
 * Template Name: Contact & Consultation Page
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p class="bc-kicker">Confidential Preliminary Consultation</p>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;"><?php the_title(); ?></h1>
	</div>
</section>

<section class="bc-section bc-section-light">
	<div class="bc-container">
		<div class="bc-grid-2" style="align-items:start;">
			<div class="bc-card">
				<div style="margin-bottom:1.25rem;">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/bharat-cibil-logo.jpeg' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" style="max-height:52px;width:auto;border:1px solid var(--bc-border);border-radius:8px;padding:6px 12px;background:#fff;" />
				</div>
				<h2 style="font-size:1.35rem;margin-bottom:0.75rem;">Direct WhatsApp Consultation Desk</h2>
				<div class="bc-entry-content" style="margin-bottom:1.5rem;">
					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
					endwhile;
					?>
				</div>
				<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to request a preliminary consultation.' ); ?>">
					WhatsApp <?php echo esc_html( bharat_cibil_get_whatsapp_display() ); ?>
				</a>
				<p style="font-size:0.875rem;margin-top:1.25rem;color:#334155;line-height:1.7;">
					<strong>Email:</strong> <a href="mailto:<?php echo esc_attr( bharat_cibil_get_primary_email() ); ?>"><?php echo esc_html( bharat_cibil_get_primary_email() ); ?></a><br />
					<strong>Alternate Email:</strong> <a href="mailto:<?php echo esc_attr( bharat_cibil_get_secondary_email() ); ?>"><?php echo esc_html( bharat_cibil_get_secondary_email() ); ?></a><br />
					<strong>Service Coverage:</strong> PAN India<br />
					<strong>Security Note:</strong> Never share OTPs, banking passwords, or PINs.
				</p>
			</div>

			<div>
				<?php get_template_part( 'template-parts/enquiry-form' ); ?>
			</div>
		</div>
	</div>
</section>
<?php
get_footer();
