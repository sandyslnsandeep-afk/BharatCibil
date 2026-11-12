<?php
/**
 * Template Name: Service Page with Consultation Form
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p class="bc-kicker">Bharat Cibil Consultancy</p>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;"><?php the_title(); ?></h1>
	</div>
</section>

<section class="bc-section bc-section-white">
	<div class="bc-container">
		<div class="bc-grid-2" style="align-items:start;">
			<div>
				<div class="bc-entry-content">
					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
					endwhile;
					?>
				</div>
				<div style="margin-top:2rem;padding:1.25rem;background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;font-size:0.875rem;">
					<strong>Regulatory Transparency:</strong> Credit information corrections depend strictly on supporting documentary evidence, reporting lender verification, and applicable credit bureau procedures.
				</div>
				<div style="margin-top:1.5rem;">
					<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like assistance regarding ' . get_the_title() ); ?>">
						Discuss This Service on WhatsApp
					</a>
				</div>
			</div>

			<div>
				<?php get_template_part( 'template-parts/enquiry-form' ); ?>
			</div>
		</div>
	</div>
</section>
<?php
get_footer();
