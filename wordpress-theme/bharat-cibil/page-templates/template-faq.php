<?php
/**
 * Template Name: FAQ Page
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p class="bc-kicker">Clarity &amp; Honest Answers</p>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;"><?php the_title(); ?></h1>
	</div>
</section>

<section class="bc-section bc-section-light">
	<div class="bc-container" style="max-width:900px;">
		<div class="bc-faq-list">
			<?php
			$faqs = new WP_Query(
				array(
					'post_type'      => 'bc_faq',
					'posts_per_page' => -1,
					'orderby'        => 'menu_order',
					'order'          => 'ASC',
				)
			);
			$first = true;
			if ( $faqs->have_posts() ) :
				while ( $faqs->have_posts() ) :
					$faqs->the_post();
					?>
					<div class="bc-faq-item <?php echo $first ? 'is-open' : ''; ?>">
						<button type="button" class="bc-faq-trigger" aria-expanded="<?php echo $first ? 'true' : 'false'; ?>">
							<span><?php the_title(); ?></span>
							<span>&#9662;</span>
						</button>
						<div class="bc-faq-panel">
							<?php echo wp_kses_post( get_the_content() ); ?>
						</div>
					</div>
					<?php
					$first = false;
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</div>
	</div>
</section>
<?php
get_footer();
