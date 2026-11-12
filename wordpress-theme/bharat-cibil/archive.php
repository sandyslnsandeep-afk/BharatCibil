<?php
/**
 * Knowledge Centre / Blog Archive Template
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-navy" style="padding:3rem 0;">
	<div class="bc-container">
		<?php bharat_cibil_breadcrumbs(); ?>
		<p class="bc-kicker">Educational Guides &middot; Indian Credit Reporting</p>
		<h1 style="font-size:clamp(1.85rem,3.2vw,2.5rem);color:#fff;">Bharat Cibil Knowledge Centre</h1>
	</div>
</section>

<section class="bc-section bc-section-light">
	<div class="bc-container">
		<div class="bc-grid-3">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) :
					the_post();
					?>
					<article class="bc-card">
						<div>
							<p style="font-size:0.75rem;color:#64748B;margin-bottom:0.5rem;">
								<?php echo esc_html( get_the_date() ); ?>
							</p>
							<h2 style="font-size:1.125rem;margin-bottom:0.5rem;">
								<a href="<?php the_permalink(); ?>" style="color:var(--bc-navy-900);"><?php the_title(); ?></a>
							</h2>
							<div style="font-size:0.875rem;margin-bottom:1rem;">
								<?php the_excerpt(); ?>
							</div>
						</div>
						<a href="<?php the_permalink(); ?>" style="font-size:0.8125rem;font-weight:600;">Read Full Guide &rarr;</a>
					</article>
					<?php
				endwhile;
			endif;
			?>
		</div>
		<div style="margin-top:2rem;">
			<?php the_posts_pagination(); ?>
		</div>
	</div>
</section>
<?php
get_footer();
