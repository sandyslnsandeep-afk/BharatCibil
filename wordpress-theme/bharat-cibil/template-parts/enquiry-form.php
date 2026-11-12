<?php
/**
 * Customer Enquiry Form (Redirects to WhatsApp with Prefilled Details)
 *
 * @package Bharat_Cibil
 */

$states = array(
	'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
	'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
	'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
	'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
	'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
	'Delhi (NCT)', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
);

$problems = array(
	'Low CIBIL Score', 'Loan Rejection', 'Written-Off Account', 'Settled Account',
	'Incorrect Loan Entry', 'Wrong Overdue Amount', 'NOC / Account Closure Issue',
	'Commercial CIBIL / CMR', 'Other',
);
?>
<div class="bc-form-card">
	<h2 style="font-size:1.5rem;margin-bottom:0.5rem;">
		<?php esc_html_e( 'Request Your Free Preliminary Credit Consultation', 'bharat-cibil' ); ?>
	</h2>
	<p style="font-size:0.875rem;margin-bottom:1.5rem;">
		<?php esc_html_e( 'Enter your details below. On submission, your enquiry opens directly in WhatsApp with no public exposure.', 'bharat-cibil' ); ?>
	</p>

	<form id="bc-consultation-form" novalidate>
		<div style="display:none;" aria-hidden="true">
			<label for="bc-wp-honeypot">Leave empty</label>
			<input type="text" id="bc-wp-honeypot" tabindex="-1" autocomplete="off" />
		</div>

		<div class="bc-form-grid">
			<div class="bc-field">
				<label for="bc-wp-name">Full Name *</label>
				<input class="bc-input" type="text" id="bc-wp-name" required placeholder="e.g. Rajesh Kumar Sharma" />
				<span id="err-name" class="bc-error-msg"></span>
			</div>

			<div class="bc-field">
				<label for="bc-wp-mobile">Mobile Number (10-digit India) *</label>
				<input class="bc-input" type="tel" id="bc-wp-mobile" required placeholder="e.g. 9876543210" maxlength="14" />
				<span id="err-mobile" class="bc-error-msg"></span>
			</div>

			<div class="bc-field">
				<label for="bc-wp-whatsapp">WhatsApp Number</label>
				<input class="bc-input" type="tel" id="bc-wp-whatsapp" placeholder="Defaults to mobile number" maxlength="14" />
				<label style="font-weight:400;font-size:0.75rem;margin-top:0.35rem;display:flex;align-items:center;gap:0.4rem;">
					<input type="checkbox" id="bc-wp-same" checked /> Same as mobile number
				</label>
				<span id="err-whatsapp" class="bc-error-msg"></span>
			</div>

			<div class="bc-field">
				<label for="bc-wp-state">State / Union Territory *</label>
				<select class="bc-select" id="bc-wp-state" required>
					<option value="">Select State / UT</option>
					<?php foreach ( $states as $st ) : ?>
						<option value="<?php echo esc_attr( $st ); ?>"><?php echo esc_html( $st ); ?></option>
					<?php endforeach; ?>
				</select>
				<span id="err-state" class="bc-error-msg"></span>
			</div>

			<div class="bc-field">
				<label for="bc-wp-city">City / Town *</label>
				<input class="bc-input" type="text" id="bc-wp-city" required placeholder="e.g. Delhi, Chandigarh, Jaipur" />
				<span id="err-city" class="bc-error-msg"></span>
			</div>

			<div class="bc-field">
				<label for="bc-wp-category">Customer Category *</label>
				<select class="bc-select" id="bc-wp-category">
					<option value="Individual">Individual</option>
					<option value="Business / MSME">Business / MSME</option>
				</select>
			</div>

			<div class="bc-field bc-col-span-2">
				<label for="bc-wp-problem">Type of Assistance Required *</label>
				<select class="bc-select" id="bc-wp-problem" required>
					<option value="">Select Type of Assistance</option>
					<?php foreach ( $problems as $pr ) : ?>
						<option value="<?php echo esc_attr( $pr ); ?>"><?php echo esc_html( $pr ); ?></option>
					<?php endforeach; ?>
				</select>
				<span id="err-problem" class="bc-error-msg"></span>
			</div>

			<div class="bc-field bc-col-span-2">
				<label for="bc-wp-description">Brief Description of the Problem</label>
				<textarea class="bc-textarea" id="bc-wp-description" rows="3" placeholder="Briefly describe your credit report concern. Never enter OTPs, passwords, or PINs."></textarea>
			</div>
		</div>

		<p style="font-size:0.75rem;background:#F4F7FA;padding:0.75rem;border-radius:6px;margin-top:1rem;border:1px solid #E2E8F0;">
			<strong>Security Notice:</strong> Never share OTPs, internet banking passwords, or confidential credentials in this form.
		</p>

		<div style="margin-top:1rem;">
			<label style="font-size:0.8125rem;display:flex;align-items:flex-start;gap:0.5rem;">
				<input type="checkbox" id="bc-wp-consent" style="margin-top:0.2rem;" />
				<span>I consent to Bharat Cibil contacting me via WhatsApp or phone regarding my preliminary consultation enquiry. *</span>
			</label>
			<span id="err-consent" class="bc-error-msg"></span>
		</div>

		<div style="margin-top:1.25rem;">
			<button type="submit" class="bc-btn bc-btn-primary">
				<?php esc_html_e( 'Continue to WhatsApp Consultation', 'bharat-cibil' ); ?>
			</button>
		</div>

		<div id="bc-form-confirmation" style="display:none;margin-top:1.25rem;padding:1rem;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:8px;">
			<p style="margin:0 0 0.75rem;font-size:0.875rem;color:#065F46;">
				<strong>Your consultation message is ready!</strong> If WhatsApp did not open automatically, click below:
			</p>
			<a id="bc-whatsapp-confirm-link" class="bc-btn bc-btn-primary" href="#" target="_blank" rel="noopener noreferrer">
				Open WhatsApp &amp; Send Request
			</a>
		</div>
	</form>
</div>
