<?php
/**
 * Standard Editable Gutenberg Page Template
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;margin-bottom:0.5rem;"><?php the_title(); ?></h1>
	</div>
</section>

<section class="bc-section bc-section-white">
	<div class="bc-container" style="max-width:860px;">
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<div class="bc-entry-content">
				<?php the_content(); ?>
			</div>
			<?php
		endwhile;
		?>
		<div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--bc-border);">
			<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to discuss my credit report.' ); ?>">
				WhatsApp Bharat Cibil (<?php echo esc_html( bharat_cibil_get_whatsapp_display() ); ?>)
			</a>
		</div>
	</div>
</section>
<?php
get_footer();
