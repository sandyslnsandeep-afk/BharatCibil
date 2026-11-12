<?php
/**
 * Footer Template
 *
 * @package Bharat_Cibil
 */
?>
</main>

<footer class="bc-footer">
	<div class="bc-container">
		<div class="bc-grid-4">
			<div>
				<div style="margin-bottom: 1rem;">
					<?php if ( has_custom_logo() ) : ?>
						<?php
						$logo_id = get_theme_mod( 'custom_logo' );
						$logo    = wp_get_attachment_image_src( $logo_id, 'full' );
						if ( $logo ) :
							?>
							<img src="<?php echo esc_url( $logo[0] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" style="max-height:48px;width:auto;background:#fff;padding:6px 12px;border-radius:6px;" />
						<?php endif; ?>
					<?php else : ?>
						<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/bharat-cibil-logo.jpeg' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" style="max-height:48px;width:auto;background:#fff;padding:6px 12px;border-radius:6px;" />
					<?php endif; ?>
				</div>
				<p style="font-size:0.875rem;line-height:1.6;">
					A Better Credit Profile. A Stronger Financial Future. Independent credit consultancy across India.
				</p>
				<div style="margin-top:1rem;">
					<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to request a preliminary credit consultation.' ); ?>">
						WhatsApp <?php echo esc_html( bharat_cibil_get_whatsapp_display() ); ?>
					</a>
				</div>
			</div>

			<div>
				<h3><?php esc_html_e( 'Consultancy Services', 'bharat-cibil' ); ?></h3>
				<?php
				if ( has_nav_menu( 'footer_services' ) ) {
					wp_nav_menu( array( 'theme_location' => 'footer_services', 'container' => false ) );
				} else {
					?>
					<ul>
						<li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">All Services Overview</a></li>
						<li><a href="<?php echo esc_url( home_url( '/individual-cibil-rectification/' ) ); ?>">Individual CIBIL Rectification</a></li>
						<li><a href="<?php echo esc_url( home_url( '/commercial-cibil-cmr-improvement/' ) ); ?>">Commercial CIBIL / CMR</a></li>
						<li><a href="<?php echo esc_url( home_url( '/written-off-settled-account-rectification/' ) ); ?>">Written-Off &amp; Settled Accounts</a></li>
						<li><a href="<?php echo esc_url( home_url( '/loan-rejection-assistance/' ) ); ?>">Loan Rejection Assistance</a></li>
						<li><a href="<?php echo esc_url( home_url( '/credit-report-analysis/' ) ); ?>">Credit Report Analysis</a></li>
					</ul>
				<?php } ?>
			</div>

			<div>
				<h3><?php esc_html_e( 'Company & Resources', 'bharat-cibil' ); ?></h3>
				<?php
				if ( has_nav_menu( 'footer_company' ) ) {
					wp_nav_menu( array( 'theme_location' => 'footer_company', 'container' => false ) );
				} else {
					?>
					<ul>
						<li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Bharat Cibil</a></li>
						<li><a href="<?php echo esc_url( home_url( '/our-process/' ) ); ?>">Our Process</a></li>
						<li><a href="<?php echo esc_url( home_url( '/client-experiences/' ) ); ?>">Client Experiences</a></li>
						<li><a href="<?php echo esc_url( home_url( '/knowledge-centre/' ) ); ?>">Knowledge Centre</a></li>
						<li><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>">Frequently Asked Questions</a></li>
						<li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact Us</a></li>
					</ul>
				<?php } ?>
			</div>

			<div>
				<h3><?php esc_html_e( 'Legal & Governance', 'bharat-cibil' ); ?></h3>
				<?php
				if ( has_nav_menu( 'footer_legal' ) ) {
					wp_nav_menu( array( 'theme_location' => 'footer_legal', 'container' => false ) );
				} else {
					?>
					<ul>
						<li><a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>">Privacy Policy</a></li>
						<li><a href="<?php echo esc_url( home_url( '/terms-and-conditions/' ) ); ?>">Terms and Conditions</a></li>
						<li><a href="<?php echo esc_url( home_url( '/disclaimer/' ) ); ?>">Disclaimer</a></li>
						<li><a href="<?php echo esc_url( home_url( '/sitemap.xml' ) ); ?>">XML Sitemap</a></li>
					</ul>
				<?php } ?>
				<p style="font-size:0.75rem;margin-top:1rem;color:#CBD5E1;line-height:1.7;">
					Service Coverage: PAN India<br />
					WhatsApp: <?php echo esc_html( bharat_cibil_get_whatsapp_display() ); ?><br />
					Email: <a href="mailto:<?php echo esc_attr( bharat_cibil_get_primary_email() ); ?>" style="color:#fff;text-decoration:underline;"><?php echo esc_html( bharat_cibil_get_primary_email() ); ?></a><br />
					Alt. Email: <a href="mailto:<?php echo esc_attr( bharat_cibil_get_secondary_email() ); ?>" style="color:#CBD5E1;text-decoration:underline;"><?php echo esc_html( bharat_cibil_get_secondary_email() ); ?></a>
				</p>
			</div>
		</div>

		<div class="bc-footer-bottom">
			<p>
				<strong>Independent Consultancy Notice:</strong>
				<?php echo esc_html( get_theme_mod( 'bc_footer_disclaimer', 'Bharat Cibil is an independent credit consultancy founded by Sandiep Shandilya Sharma. It is not a bank, NBFC, lender, or RBI-authorised institution, and is not affiliated with TransUnion CIBIL or any credit bureau. Corrections depend on lender verification and bureau confirmation. Never share OTPs, passwords, or banking PINs.' ) ); ?>
			</p>
			<p style="margin-top:0.75rem;">
				&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<?php get_template_part( 'template-parts/whatsapp-float' ); ?>
<?php wp_footer(); ?>
</body>
</html>
