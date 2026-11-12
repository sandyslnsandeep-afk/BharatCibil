<?php
/**
 * 404 Not Found Template
 *
 * @package Bharat_Cibil
 */
get_header();
?>
<section class="bc-section bc-section-white" style="text-align:center;padding:6rem 1.25rem;">
	<div class="bc-container" style="max-width:600px;">
		<p class="bc-kicker">Page Not Found</p>
		<h1 style="font-size:2.25rem;margin-bottom:1rem;">We Could Not Find That Page</h1>
		<p style="margin-bottom:2rem;">Please return to the Bharat Cibil homepage or request a preliminary consultation directly on WhatsApp.</p>
		<div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;">
			<a class="bc-btn bc-btn-navy" href="<?php echo esc_url( home_url( '/' ) ); ?>">Return Home</a>
			<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I need assistance with my credit report.' ); ?>">WhatsApp Expert</a>
		</div>
	</div>
</section>
<?php
get_footer();
