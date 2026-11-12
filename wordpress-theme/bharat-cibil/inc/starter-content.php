<?php
/**
 * Idempotent Starter Content Seeder on Theme Activation
 * Creates the 16 pages, Sample Testimonials, 12 FAQs, and 10 Knowledge Centre posts so Hostinger deployment works immediately.
 *
 * @package Bharat_Cibil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function bharat_cibil_seed_starter_content() {
	if ( get_option( 'bharat_cibil_seeded_v1' ) ) {
		return;
	}

	// 1. Pages to create
	$pages = array(
		array(
			'slug'     => 'home',
			'title'    => 'Home',
			'template' => '',
			'content'  => '<!-- wp:paragraph --><p>Welcome to Bharat Cibil. Edit introductory homepage content here or via Appearance → Customize → Bharat Cibil Settings.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'about',
			'title'    => 'About Bharat Cibil',
			'template' => '',
			'content'  => '<!-- wp:heading --><h2>Independent Credit Consultancy Across India</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Bharat Cibil is an independent credit consultancy founded by Sandiep Shandilya Sharma. We assist individuals, professionals, and MSMEs across India with credit report analysis, discrepancy identification, and documented dispute follow-up.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Bharat Cibil is not a bank, NBFC, lender, or credit bureau. All rectifications depend on supporting evidence, reporting lender verification, and applicable credit bureau procedures.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'services',
			'title'    => 'Our Services',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Individual & Commercial Credit Consultancy</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Explore our individual CIBIL rectification, Commercial CMR improvement, Written-Off & Settled account review, Loan Rejection assistance, and multi-bureau Credit Report Analysis services.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'individual-cibil-rectification',
			'title'    => 'Individual CIBIL Rectification',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Individual Credit Report Rectification</h2><!-- /wp:heading --><!-- wp:paragraph --><p>We assist individuals across India in auditing personal loans, credit cards, wrong loan entries, duplicate accounts, incorrect overdue amounts, and NOC closure mismatches through documented disputes.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'commercial-cibil-cmr-improvement',
			'title'    => 'Commercial CIBIL / CMR Improvement',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Commercial Credit & MSME CMR Advisory</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Structured analysis of Commercial Credit Reports (CCR) and CIBIL MSME Rank (CMR 1–10) factors for proprietorships, partnerships, LLPs, and corporate borrowers.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'written-off-settled-account-rectification',
			'title'    => 'Written-Off and Settled Account Rectification',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Written-Off & Settled Status Review</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Evidence-based evaluation of Written-Off, Settled, and Post Write-Off Closed statuses, distinguishing misreported closures from genuine settlements and guiding lawful lender follow-up.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'loan-rejection-assistance',
			'title'    => 'Loan Rejection Assistance',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Post-Rejection Credit Report Diagnostics</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Detailed credit report review following home, business, or personal loan rejections to diagnose reporting discrepancies before submitting fresh applications.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'credit-report-analysis',
			'title'    => 'Credit Report Analysis',
			'template' => 'page-templates/template-service.php',
			'content'  => '<!-- wp:heading --><h2>Multi-Bureau Credit Report Review</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Line-by-line review across India\'s four RBI-licensed credit bureaus: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'our-process',
			'title'    => 'Our Process',
			'template' => '',
			'content'  => '<!-- wp:heading --><h2>Four-Step Credit Consultancy Workflow</h2><!-- /wp:heading --><!-- wp:list {"ordered":true} --><ol><li><strong>01 — Consultation:</strong> Understand the customer\'s credit problem.</li><li><strong>02 — Report Analysis:</strong> Review the credit report and supporting documents.</li><li><strong>03 — Rectification Assistance:</strong> Prepare and guide documented disputes to lenders and bureaus.</li><li><strong>04 — Follow-up and Verification:</strong> Track responses and verify approved updates.</li></ol><!-- /wp:list -->',
		),
		array(
			'slug'     => 'client-experiences',
			'title'    => 'Client Experiences',
			'template' => 'page-templates/template-experiences.php',
			'content'  => '<!-- wp:paragraph --><p>Manage or replace sample client experiences via Dashboard → Testimonials.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'knowledge-centre',
			'title'    => 'Knowledge Centre',
			'template' => '',
			'content'  => '',
		),
		array(
			'slug'     => 'faq',
			'title'    => 'Frequently Asked Questions',
			'template' => 'page-templates/template-faq.php',
			'content'  => '<!-- wp:paragraph --><p>Manage FAQs anytime from Dashboard → FAQs.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'contact',
			'title'    => 'Contact Us',
			'template' => 'page-templates/template-contact.php',
			'content'  => '<!-- wp:paragraph --><p>Complete the preliminary consultation form or message Bharat Cibil directly on WhatsApp (+91 7018223850).</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'privacy-policy',
			'title'    => 'Privacy Policy',
			'template' => '',
			'content'  => '<!-- wp:paragraph --><p>Bharat Cibil respects client confidentiality in line with Indian data-protection principles. Never share OTPs, passwords, or internet banking credentials. Have your legal counsel review this policy prior to commercial publication.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'terms-and-conditions',
			'title'    => 'Terms and Conditions',
			'template' => '',
			'content'  => '<!-- wp:paragraph --><p>Bharat Cibil provides independent credit consultancy. Corrections depend strictly on lender verification and bureau procedures. No guaranteed score improvements or loan approvals are offered.</p><!-- /wp:paragraph -->',
		),
		array(
			'slug'     => 'disclaimer',
			'title'    => 'Disclaimer',
			'template' => '',
			'content'  => '<!-- wp:paragraph --><p>Bharat Cibil is an independent credit consultancy. It is not affiliated with TransUnion CIBIL or any credit bureau, bank, NBFC, or RBI. Genuine, accurately reported defaults cannot simply be erased. Customers must never share OTPs, passwords, or banking PINs.</p><!-- /wp:paragraph -->',
		),
	);

	$home_id = 0;
	$blog_id = 0;

	foreach ( $pages as $p ) {
		$existing = get_page_by_path( $p['slug'] );
		if ( ! $existing ) {
			$pid = wp_insert_post(
				array(
					'post_title'   => $p['title'],
					'post_name'    => $p['slug'],
					'post_content' => $p['content'],
					'post_status'  => 'publish',
					'post_type'    => 'page',
				)
			);
			if ( $pid && ! is_wp_error( $pid ) && ! empty( $p['template'] ) ) {
				update_post_meta( $pid, '_wp_page_template', $p['template'] );
			}
			if ( 'home' === $p['slug'] ) {
				$home_id = $pid;
			}
			if ( 'knowledge-centre' === $p['slug'] ) {
				$blog_id = $pid;
			}
		}
	}

	if ( $home_id ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_id );
	}
	if ( $blog_id ) {
		update_option( 'page_for_posts', $blog_id );
	}

	// 2. Seed 6 Sample Testimonials
	$sample_testimonials = array(
		array( 'Amit Verma', 'Delhi', 'Individual CIBIL Rectification', 'I was facing difficulties understanding incorrect information in my credit report. The consultancy process helped me understand the discrepancies and the steps required for raising a dispute.' ),
		array( 'Neha Sharma', 'Chandigarh', 'NOC & Closure Follow-up', 'Even after receiving my closure confirmation, my report continued reflecting an open balance. Structured guidance helped me organise the right paperwork for formal lender follow-up.' ),
		array( 'Rajesh Thakur', 'Himachal Pradesh', 'Credit Report Analysis', 'Before applying for a housing facility, I wanted clarity on old tradeline entries. The line-by-line explanation gave me an honest picture without unrealistic commitments.' ),
		array( 'Manpreet Singh', 'Punjab', 'Commercial Credit Consultancy', 'Navigating commercial credit report terminology for our MSME unit was confusing. The consultation broke down the reporting timeline and necessary verification documents clearly.' ),
		array( 'Vikram Kumar', 'Haryana', 'Wrong Loan Entry Review', 'I noticed an unfamiliar account on my credit profile. Having transparent instructions on identity verification and official bureau dispute channels made the process manageable.' ),
		array( 'Pooja Gupta', 'Uttar Pradesh', 'Settled Account Guidance', 'I appreciated the straightforward explanation of how settled statuses work under Indian lending norms and what practical options existed with my original lender.' ),
	);

	foreach ( $sample_testimonials as $t ) {
		$tid = wp_insert_post(
			array(
				'post_title'   => $t[0],
				'post_content' => $t[3],
				'post_status'  => 'publish',
				'post_type'    => 'bc_testimonial',
			)
		);
		if ( $tid && ! is_wp_error( $tid ) ) {
			update_post_meta( $tid, '_bc_location', $t[1] );
			update_post_meta( $tid, '_bc_category', $t[2] );
			update_post_meta( $tid, '_bc_is_sample', '1' );
		}
	}

	// 3. Seed 12 SEO FAQs
	$faqs = array(
		array( 'What is CIBIL score rectification?', 'CIBIL score rectification is the lawful process of auditing your credit report, identifying factual inaccuracies or un-updated lender records, and submitting documented disputes to the reporting lender and credit bureau for verification and correction.' ),
		array( 'Can an incorrect written-off status be corrected?', 'If a Written-Off status was reported in error despite full repayment, or if the account was subsequently resolved and not updated, it can be disputed with supporting payment receipts and closure letters subject to lender verification.' ),
		array( 'What happens if a bank has issued an NOC but CIBIL still shows settled?', 'If an NOC followed a compromise settlement, the status legitimately shows Settled. If full contractual dues were repaid and Settled still appears—or an active balance remains—documented lender escalation can request correction.' ),
		array( 'Can an incorrect loan entry be disputed?', 'Yes. Under CICRA guidelines, borrowers can dispute unfamiliar loan entries, duplicate accounts, or clerical errors. The bureau seeks confirmation from the reporting lender before updating the record.' ),
		array( 'Can a closed account still affect a CIBIL score?', 'Yes. Clean closed accounts support credit history depth, while closed accounts showing past late payments, Settled remarks, or Post Write-Off tags remain visible in credit evaluations.' ),
		array( 'What is the difference between settled and closed?', 'Closed means 100% of contractual dues were repaid. Settled means the lender accepted a reduced One-Time Settlement (OTS) amount and waived the balance.' ),
		array( 'Does Bharat Cibil handle commercial credit reports?', 'Yes. Bharat Cibil provides Commercial Credit Report (CCR) analysis and CIBIL MSME Rank (CMR) guidance for MSMEs and business entities across India.' ),
		array( 'Can credit report problems be addressed across all four credit bureaus?', 'Yes. Assistance covers reports across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.' ),
		array( 'How long does credit report rectification take?', 'Timelines vary depending on lender response speed and verification complexity. Bureaus generally seek lender confirmation within around 30 days per dispute cycle.' ),
		array( 'Can genuine defaults be removed from a credit report?', 'No. Genuine, accurately reported defaults or settlements cannot simply be erased. Bharat Cibil assists strictly through documented, lawful processes.' ),
		array( 'Will rectifying a credit report guarantee loan approval?', 'No. Loan approvals remain solely at the discretion of respective banks and NBFCs based on underwriting policies and eligibility criteria.' ),
		array( 'What documents may be required?', 'Typically your latest credit report, NOCs, Loan Closure Letters, Settlement letters, or Statements of Account. Never share OTPs, passwords, or banking PINs.' ),
	);

	foreach ( $faqs as $index => $f ) {
		wp_insert_post(
			array(
				'post_title'   => $f[0],
				'post_content' => $f[1],
				'post_status'  => 'publish',
				'post_type'    => 'bc_faq',
				'menu_order'   => $index + 1,
			)
		);
	}

	// 4. Seed 10 Knowledge Centre Articles
	$articles = array(
		'What Does Written-Off Mean in a CIBIL Report?',
		'Difference Between Settled and Closed Loan Accounts',
		'How to Dispute an Incorrect Loan Entry in CIBIL',
		'What to Do When a Bank Issues NOC but CIBIL Is Not Updated',
		'How Credit Score Affects Home Loan Approval',
		'How to Improve Your Credit Profile After Loan Settlement',
		'Understanding Commercial CIBIL and CMR',
		'How to Check Your Credit Report for Errors',
		'What to Do When a Closed Loan Shows Outstanding Dues',
		'Understanding Credit Reports Across India\'s Four Credit Bureaus',
	);

	foreach ( $articles as $title ) {
		wp_insert_post(
			array(
				'post_title'   => $title,
				'post_content' => '<!-- wp:paragraph --><p>Educational guide prepared for the Bharat Cibil Knowledge Centre. Edit or expand this article anytime in the WordPress Block Editor.</p><!-- /wp:paragraph -->',
				'post_status'  => 'publish',
				'post_type'    => 'post',
			)
		);
	}

	update_option( 'bharat_cibil_seeded_v1', '1' );
}
add_action( 'after_switch_theme', 'bharat_cibil_seed_starter_content' );
