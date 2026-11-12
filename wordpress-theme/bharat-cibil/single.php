<?php
/**
 * Single Knowledge Centre Article Template
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container" style="max-width:860px;">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p style="font-size:0.75rem;color:var(--bc-gold);margin-bottom:0.5rem;">
			<?php echo esc_html( get_the_date() ); ?> &middot; Bharat Cibil Knowledge Centre
		</p>
		<h1 style="font-size:clamp(1.75rem,3vw,2.5rem);color:#fff;"><?php the_title(); ?></h1>
	</div>
</section>

<article class="bc-section bc-section-white">
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

		<div style="margin-top:2.5rem;padding:1.5rem;background:var(--bc-bg);border:1px solid var(--bc-border);border-radius:10px;">
			<h2 style="font-size:1.125rem;margin-bottom:0.5rem;">Need Assistance Reviewing Your Credit Report?</h2>
			<p style="font-size:0.9375rem;margin-bottom:1rem;">Request a preliminary consultation with Bharat Cibil through documented and lawful processes.</p>
			<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I read your Knowledge Centre article and would like a preliminary consultation.' ); ?>">
				WhatsApp Bharat Cibil
			</a>
		</div>
	</div>
</article>
<?php
get_footer();
