<?php
/**
 * Template Name: Client Experiences Page
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p class="bc-kicker">Client Experiences</p>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;"><?php the_title(); ?></h1>
	</div>
</section>

<section class="bc-section bc-section-light">
	<div class="bc-container">
		<div class="bc-entry-content" style="margin-bottom:2rem;">
			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile;
			?>
		</div>
		<div class="bc-grid-3">
			<?php
			$testimonials = new WP_Query( array( 'post_type' => 'bc_testimonial', 'posts_per_page' => -1 ) );
			if ( $testimonials->have_posts() ) :
				while ( $testimonials->have_posts() ) :
					$testimonials->the_post();
					$loc       = get_post_meta( get_the_ID(), '_bc_location', true );
					$cat       = get_post_meta( get_the_ID(), '_bc_category', true );
					$is_sample = get_post_meta( get_the_ID(), '_bc_is_sample', true );
					?>
					<article class="bc-card">
						<div>
							<?php if ( '0' !== $is_sample ) : ?>
								<span class="bc-sample-label" style="margin-bottom:0.75rem;">SAMPLE &middot; DEMO PLACEHOLDER</span>
							<?php endif; ?>
							<div style="font-size:0.9375rem;margin-bottom:1.25rem;">&ldquo;<?php echo esc_html( wp_strip_all_tags( get_the_content() ) ); ?>&rdquo;</div>
						</div>
						<div style="border-top:1px solid var(--bc-border);padding-top:0.75rem;font-size:0.8125rem;">
							<strong style="color:var(--bc-navy-900);"><?php the_title(); ?></strong>
							<?php if ( $loc ) : ?>
								<br /><span style="color:#64748B;"><?php echo esc_html( $loc ); ?><?php echo $cat ? ' &middot; ' . esc_html( $cat ) : ''; ?></span>
							<?php endif; ?>
						</div>
					</article>
					<?php
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</div>
	</div>
</section>
<?php
get_footer();
