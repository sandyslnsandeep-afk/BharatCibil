<?php
/**
 * Front Page Template (Sections A through J)
 *
 * @package Bharat_Cibil
 */

get_header();

$hero_headline   = get_theme_mod( 'bc_hero_headline', 'Your Credit History Should Reflect the Truth.' );
$hero_subheading = get_theme_mod( 'bc_hero_subheading', 'Expert assistance for CIBIL report rectification, credit score improvement and commercial credit consultancy across India.' );
$hero_image      = get_theme_mod( 'bc_hero_image', get_template_directory_uri() . '/assets/images/hero-consultancy.jpg' );
$founder_image   = get_theme_mod( 'bc_founder_image', '' );
$founder_name    = get_theme_mod( 'bc_founder_name', 'Sandiep Shandilya Sharma' );
$founder_desig   = get_theme_mod( 'bc_founder_designation', 'Founder & CEO, Bharat Cibil' );
$founder_head    = get_theme_mod( 'bc_founder_headline', 'Building Better Credit Awareness and Helping People Move Forward.' );
?>

<!-- SECTION A & B: HERO BANNER + TRUST CAPABILITIES -->
<section class="bc-section bc-section-navy" style="padding-top:3.5rem;">
	<div class="bc-container">
		<div class="bc-grid-2" style="align-items:center;">
			<div>
				<p class="bc-kicker"><?php esc_html_e( 'Independent Indian Credit Consultancy · PAN India', 'bharat-cibil' ); ?></p>
				<h1 style="font-size:clamp(2rem,3.6vw,2.85rem);margin-bottom:1rem;color:#fff;">
					<?php echo esc_html( $hero_headline ); ?>
				</h1>
				<p style="font-size:1.0625rem;color:#E2E8F0;margin-bottom:1.25rem;">
					<?php echo esc_html( $hero_subheading ); ?>
				</p>
				<ul style="padding-left:1.1rem;color:#E2E8F0;font-size:0.9375rem;margin-bottom:1.75rem;">
					<li>Individual and Commercial Credit Consultancy.</li>
					<li>Assistance with Incorrect Credit Report Entries.</li>
					<li>Written-Off and Settled Account Status Review.</li>
					<li>Credit Report Analysis and Dispute Assistance.</li>
					<li>Professional Documentation and Follow-up.</li>
				</ul>
				<div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
					<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to request a free preliminary credit consultation.' ); ?>">
						Get Free Preliminary Consultation
					</a>
					<a class="bc-btn bc-btn-outline-light" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to talk to an expert regarding CIBIL consultancy.' ); ?>">
						Talk to Our Expert
					</a>
				</div>
			</div>

			<div>
				<img src="<?php echo esc_url( $hero_image ); ?>" alt="<?php esc_attr_e( 'Indian financial consultant discussing credit report documents with a client', 'bharat-cibil' ); ?>" style="border-radius:12px;border:1px solid rgba(255,255,255,0.15);width:100%;object-fit:cover;aspect-ratio:16/10;" />
			</div>
		</div>

		<!-- SECTION B: 4 TRUST CAPABILITIES -->
		<div class="bc-grid-4" style="margin-top:3rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.15);">
			<div class="bc-card-navy">
				<span style="color:var(--bc-gold);font-size:0.75rem;font-weight:700;">01</span>
				<h2 style="font-size:1rem;margin:0.4rem 0;color:#fff;">Individual Credit Consultancy</h2>
				<p style="font-size:0.8125rem;color:#CBD5E1;margin:0;">Structured review of personal loans, credit cards, and retail tradelines.</p>
			</div>
			<div class="bc-card-navy">
				<span style="color:var(--bc-gold);font-size:0.75rem;font-weight:700;">02</span>
				<h2 style="font-size:1rem;margin:0.4rem 0;color:#fff;">Commercial Credit Consultancy</h2>
				<p style="font-size:0.8125rem;color:#CBD5E1;margin:0;">Analysis of MSME credit histories and CIBIL MSME Rank (CMR) factors.</p>
			</div>
			<div class="bc-card-navy">
				<span style="color:var(--bc-gold);font-size:0.75rem;font-weight:700;">03</span>
				<h2 style="font-size:1rem;margin:0.4rem 0;color:#fff;">PAN India Service Availability</h2>
				<p style="font-size:0.8125rem;color:#CBD5E1;margin:0;">Documented remote consultation across every Indian state and UT.</p>
			</div>
			<div class="bc-card-navy">
				<span style="color:var(--bc-gold);font-size:0.75rem;font-weight:700;">04</span>
				<h2 style="font-size:1rem;margin:0.4rem 0;color:#fff;">Document-Based Rectification Assistance</h2>
				<p style="font-size:0.8125rem;color:#CBD5E1;margin:0;">Evidence-driven disputes grounded in NOCs, receipts, and bureau procedures.</p>
			</div>
		</div>
	</div>
</section>

<!-- SECTION C: COMMON CREDIT PROBLEMS -->
<section class="bc-section bc-section-light">
	<div class="bc-container">
		<p class="bc-kicker">Areas of Assistance</p>
		<h2 style="font-size:2rem;margin-bottom:0.75rem;">Common Credit Report Problems</h2>
		<p style="max-width:720px;margin-bottom:2.5rem;">
			Rectification depends strictly on documentary evidence, reporting lender verification, and applicable credit bureau procedures.
		</p>

		<div class="bc-grid-3">
			<?php
			$problems = array(
				array( 'Low CIBIL Score', 'Understanding score drops caused by reporting errors, utilisation, or un-updated closures.', '/credit-report-analysis/' ),
				array( 'Loan Rejection Due to Credit History', 'Diagnosing underlying account flags or mismatches behind repeated bank declines.', '/loan-rejection-assistance/' ),
				array( 'Written-Off Account', 'Reviewing Written-Off entries to assess whether closure or erroneous reporting can be substantiated.', '/written-off-settled-account-rectification/' ),
				array( 'Settled Account', 'Guidance on evaluating Settled statuses and lawful lender closure pathways.', '/written-off-settled-account-rectification/' ),
				array( 'Post Write-Off Closed', 'Assessing cases where dues were cleared after write-off yet historical flags remain.', '/written-off-settled-account-rectification/' ),
				array( 'Wrong Loan Entries', 'Disputing unfamiliar accounts or facilities never availed by the borrower.', '/individual-cibil-rectification/' ),
				array( 'Duplicate Loan Accounts', 'Identifying single facilities reported twice due to mergers or system errors.', '/individual-cibil-rectification/' ),
				array( 'Incorrect Overdue Amount', 'Challenging inaccurate overdue balances when instalments were paid on time.', '/individual-cibil-rectification/' ),
				array( 'Incorrect Payment History', 'Addressing wrong Days Past Due (DPD) markers in monthly reporting cycles.', '/credit-report-analysis/' ),
				array( 'NOC Issued, Incorrect Status', 'Following up when an NOC exists yet the bureau report still shows active or overdue.', '/individual-cibil-rectification/' ),
				array( 'Suit Filed / Wilful Default Review', 'Reviewing legal resolution records where default flags remain outdated.', '/written-off-settled-account-rectification/' ),
				array( 'Commercial Credit & CMR Issues', 'Evaluating MSME credit reports and CIBIL MSME Rank (CMR) discrepancies.', '/commercial-cibil-cmr-improvement/' ),
			);
			foreach ( $problems as $item ) :
				?>
				<div class="bc-card">
					<div>
						<h3 style="font-size:1.125rem;margin-bottom:0.5rem;"><?php echo esc_html( $item[0] ); ?></h3>
						<p style="font-size:0.875rem;margin-bottom:1rem;"><?php echo esc_html( $item[1] ); ?></p>
					</div>
					<a href="<?php echo esc_url( home_url( $item[2] ) ); ?>" style="font-size:0.8125rem;font-weight:600;">Learn More &rarr;</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- SECTION D: OUR SERVICES -->
<section class="bc-section bc-section-white">
	<div class="bc-container">
		<p class="bc-kicker">Consultancy Practice</p>
		<h2 style="font-size:2rem;margin-bottom:2rem;">Our Individual &amp; Commercial Services</h2>
		<div class="bc-grid-2">
			<div class="bc-card" style="background:var(--bc-bg);">
				<div>
					<h3 style="font-size:1.35rem;margin-bottom:0.75rem;">Individual Credit Consultancy</h3>
					<ul style="padding-left:1.1rem;font-size:0.9375rem;">
						<li>CIBIL Report Analysis</li>
						<li>Credit Score Improvement Guidance</li>
						<li>Wrong Loan Entry Disputes</li>
						<li>Incorrect Overdue Rectification</li>
						<li>Settled Account Status Review</li>
						<li>Written-Off Account Rectification</li>
						<li>NOC and Closure Status Follow-up</li>
						<li>Multiple Credit Bureau Report Review</li>
					</ul>
				</div>
				<div style="margin-top:1.5rem;">
					<a class="bc-btn bc-btn-navy" href="<?php echo esc_url( home_url( '/individual-cibil-rectification/' ) ); ?>">Explore Individual Services</a>
				</div>
			</div>
			<div class="bc-card" style="background:var(--bc-bg);">
				<div>
					<h3 style="font-size:1.35rem;margin-bottom:0.75rem;">Commercial Credit Consultancy</h3>
					<ul style="padding-left:1.1rem;font-size:0.9375rem;">
						<li>Commercial Credit Report Analysis</li>
						<li>CMR Improvement Guidance</li>
						<li>Business Loan Credit History Review</li>
						<li>Incorrect Business Loan Reporting</li>
						<li>Commercial Account Rectification</li>
						<li>MSME Credit Consultancy</li>
					</ul>
				</div>
				<div style="margin-top:1.5rem;">
					<a class="bc-btn bc-btn-navy" href="<?php echo esc_url( home_url( '/commercial-cibil-cmr-improvement/' ) ); ?>">Explore Commercial Services</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SECTION F: HOW WE WORK -->
<section class="bc-section bc-section-light">
	<div class="bc-container">
		<p class="bc-kicker">Structured Workflow</p>
		<h2 style="font-size:2rem;margin-bottom:2rem;">How We Work</h2>
		<div class="bc-grid-4">
			<div class="bc-card">
				<strong style="font-size:1.5rem;color:var(--bc-emerald);">01</strong>
				<h3 style="font-size:1.125rem;margin:0.5rem 0;">Consultation</h3>
				<p style="font-size:0.875rem;margin:0;">Understand the customer's credit problem.</p>
			</div>
			<div class="bc-card">
				<strong style="font-size:1.5rem;color:var(--bc-emerald);">02</strong>
				<h3 style="font-size:1.125rem;margin:0.5rem 0;">Report Analysis</h3>
				<p style="font-size:0.875rem;margin:0;">Review the credit report and supporting documents to identify potential inaccuracies.</p>
			</div>
			<div class="bc-card">
				<strong style="font-size:1.5rem;color:var(--bc-emerald);">03</strong>
				<h3 style="font-size:1.125rem;margin:0.5rem 0;">Rectification Assistance</h3>
				<p style="font-size:0.875rem;margin:0;">Prepare and guide appropriate disputes and communications to lenders and credit bureaus.</p>
			</div>
			<div class="bc-card">
				<strong style="font-size:1.5rem;color:var(--bc-emerald);">04</strong>
				<h3 style="font-size:1.125rem;margin:0.5rem 0;">Follow-up &amp; Verification</h3>
				<p style="font-size:0.875rem;margin:0;">Track responses and verify whether approved corrections are reflected in the updated credit report.</p>
			</div>
		</div>
	</div>
</section>

<!-- SECTION G: FOUNDER'S MESSAGE -->
<section class="bc-section bc-section-white">
	<div class="bc-container">
		<div class="bc-grid-2" style="align-items:center;">
			<div>
				<?php if ( ! empty( $founder_image ) ) : ?>
					<img src="<?php echo esc_url( $founder_image ); ?>" alt="<?php echo esc_attr( $founder_name ); ?>" style="border-radius:12px;max-width:380px;width:100%;aspect-ratio:3/4;object-fit:cover;" />
				<?php else : ?>
					<div style="max-width:380px;aspect-ratio:3/4;border-radius:12px;background:var(--bc-navy-900);color:#fff;padding:2rem;display:flex;flex-direction:column;justify-content:space-between;">
						<span style="font-size:0.75rem;color:var(--bc-gold);font-weight:700;">FOUNDER PORTRAIT PLACEHOLDER</span>
						<div style="text-align:center;">
							<strong style="display:block;font-size:1.25rem;"><?php echo esc_html( $founder_name ); ?></strong>
							<span style="font-size:0.8125rem;color:#CBD5E1;"><?php echo esc_html( $founder_desig ); ?></span>
						</div>
						<span style="font-size:0.75rem;color:#94A3B8;">Upload portrait via Appearance &rarr; Customize &rarr; Bharat Cibil Settings</span>
					</div>
				<?php endif; ?>
			</div>
			<div>
				<p class="bc-kicker">Founder's Message</p>
				<h2 style="font-size:2rem;margin-bottom:1.25rem;"><?php echo esc_html( $founder_head ); ?></h2>
				<p>At Bharat Cibil, our objective is to help individuals and businesses understand their credit reports, identify reporting discrepancies and pursue appropriate rectification through professional, transparent and documented processes.</p>
				<p>We believe that every customer deserves clear guidance, honest communication and a practical understanding of their credit position.</p>
				<p>Our approach is built on trust, confidentiality and individual attention.</p>
				<p style="margin-top:1.5rem;"><strong><?php echo esc_html( $founder_name ); ?></strong><br /><span style="font-size:0.875rem;"><?php echo esc_html( $founder_desig ); ?></span></p>
			</div>
		</div>
	</div>
</section>

<!-- SECTION H: SAMPLE CUSTOMER EXPERIENCES -->
<section class="bc-section bc-section-light">
	<div class="bc-container">
		<div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:1.5rem;margin-bottom:2rem;">
			<div>
				<p class="bc-kicker">Client Experiences · Sample Layout Preview</p>
				<h2 style="font-size:2rem;margin-bottom:0.75rem;">Customer Experiences</h2>
				<p style="max-width:720px;margin-bottom:0;">
					Entries below display a visible <strong>SAMPLE</strong> label until replaced with authentic, permission-based customer reviews from <em>Dashboard &rarr; Testimonials</em>.
				</p>
			</div>
			<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/bharat-cibil-logo.jpeg' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" style="max-height:48px;width:auto;border:1px solid var(--bc-border);border-radius:8px;padding:6px 12px;background:#fff;" />
		</div>
		<div class="bc-grid-3">
			<?php
			$testimonials = new WP_Query(
				array(
					'post_type'      => 'bc_testimonial',
					'posts_per_page' => 6,
				)
			);
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

<!-- SECTION I: CALL TO ACTION -->
<section class="bc-section" style="background:var(--bc-navy-800);color:#fff;padding:3.5rem 0;">
	<div class="bc-container" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;">
		<div style="max-width:650px;">
			<h2 style="color:#fff;margin-bottom:0.5rem;">Don't Let Credit Report Errors Hold Back Your Financial Plans.</h2>
			<p style="margin:0;color:#E2E8F0;">Get your credit report reviewed and understand the available rectification options.</p>
		</div>
		<div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
			<a class="bc-btn bc-btn-outline-dark" href="#consultation">Request Consultation</a>
			<a class="bc-btn bc-btn-primary" target="_blank" rel="noopener noreferrer" href="<?php echo bharat_cibil_whatsapp_url( 'Hello Bharat Cibil Team, I would like to discuss my credit report rectification options.' ); ?>">WhatsApp Bharat Cibil</a>
		</div>
	</div>
</section>

<!-- SECTION J: ENQUIRY FORM & FAQS -->
<section id="consultation" class="bc-section bc-section-light">
	<div class="bc-container">
		<div class="bc-grid-2" style="align-items:start;">
			<div>
				<?php get_template_part( 'template-parts/enquiry-form' ); ?>
			</div>
			<div>
				<p class="bc-kicker">Answers &amp; Transparency</p>
				<h2 style="font-size:1.75rem;margin-bottom:1.25rem;">Frequently Asked Questions</h2>
				<div class="bc-faq-list">
					<?php
					$faqs = new WP_Query(
						array(
							'post_type'      => 'bc_faq',
							'posts_per_page' => 6,
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
				<div style="margin-top:1.25rem;">
					<a class="bc-btn bc-btn-outline-dark" href="<?php echo esc_url( home_url( '/faq/' ) ); ?>">View All FAQs</a>
				</div>
			</div>
		</div>
	</div>
</section>

<?php
get_footer();
