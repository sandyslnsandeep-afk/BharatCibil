(function () {
  'use strict';

  // Mobile Menu Toggle
  var mobileToggle = document.querySelector('.bc-mobile-toggle');
  var mobileDrawer = document.getElementById('bc-mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', function () {
      var expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      mobileDrawer.classList.toggle('is-open');
    });
  }

  // FAQ Accordion
  var faqItems = document.querySelectorAll('.bc-faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.bc-faq-trigger');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        var otherBtn = other.querySelector('.bc-faq-trigger');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Enquiry Form Indian Mobile Validation & WhatsApp Redirect
  var form = document.getElementById('bc-consultation-form');
  if (form) {
    var mountedAt = Date.now();
    var sameCheckbox = document.getElementById('bc-wp-same');
    var mobileInput = document.getElementById('bc-wp-mobile');
    var whatsappInput = document.getElementById('bc-wp-whatsapp');

    if (sameCheckbox && mobileInput && whatsappInput) {
      var syncWhatsapp = function () {
        if (sameCheckbox.checked) {
          whatsappInput.value = mobileInput.value;
          whatsappInput.disabled = true;
        } else {
          whatsappInput.disabled = false;
        }
      };
      sameCheckbox.addEventListener('change', syncWhatsapp);
      mobileInput.addEventListener('input', function () {
        if (sameCheckbox.checked) whatsappInput.value = mobileInput.value;
      });
      syncWhatsapp();
    }

    function normalizeMobile(val) {
      var digits = (val || '').replace(/\D/g, '');
      if (digits.length === 12 && digits.indexOf('91') === 0) return digits.slice(2);
      if (digits.length === 11 && digits.indexOf('0') === 0) return digits.slice(1);
      return digits;
    }

    function isValidIndianMobile(val) {
      return /^[6-9]\d{9}$/.test(normalizeMobile(val));
    }

    function setError(id, msg) {
      var el = document.getElementById(id);
      if (el) el.textContent = msg || '';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var honeypot = document.getElementById('bc-wp-honeypot');
      if (honeypot && honeypot.value.trim() !== '') return;
      if (Date.now() - mountedAt < 1000) return;

      var fullName = (document.getElementById('bc-wp-name').value || '').trim();
      var mobileRaw = document.getElementById('bc-wp-mobile').value || '';
      var whatsappRaw = sameCheckbox && sameCheckbox.checked ? mobileRaw : (document.getElementById('bc-wp-whatsapp').value || mobileRaw);
      var state = document.getElementById('bc-wp-state').value || '';
      var city = (document.getElementById('bc-wp-city').value || '').trim();
      var category = document.getElementById('bc-wp-category').value || 'Individual';
      var problem = document.getElementById('bc-wp-problem').value || '';
      var description = (document.getElementById('bc-wp-description').value || '').trim();
      var consent = document.getElementById('bc-wp-consent').checked;

      var hasError = false;
      setError('err-name', '');
      setError('err-mobile', '');
      setError('err-whatsapp', '');
      setError('err-state', '');
      setError('err-city', '');
      setError('err-problem', '');
      setError('err-consent', '');

      if (fullName.length < 2) {
        setError('err-name', 'Please enter your full name.');
        hasError = true;
      }
      if (!isValidIndianMobile(mobileRaw)) {
        setError('err-mobile', 'Enter a valid 10-digit Indian mobile number starting with 6-9.');
        hasError = true;
      }
      if (!sameCheckbox.checked && whatsappRaw.trim() !== '' && !isValidIndianMobile(whatsappRaw)) {
        setError('err-whatsapp', 'Enter a valid 10-digit WhatsApp number.');
        hasError = true;
      }
      if (!state) {
        setError('err-state', 'Please select your State / UT.');
        hasError = true;
      }
      if (city.length < 2) {
        setError('err-city', 'Please enter your city.');
        hasError = true;
      }
      if (!problem) {
        setError('err-problem', 'Please select the type of assistance required.');
        hasError = true;
      }
      if (!consent) {
        setError('err-consent', 'Please confirm consent to be contacted.');
        hasError = true;
      }

      if (hasError) return;

      var waNumber = (window.bharatCibilConfig && window.bharatCibilConfig.whatsappNumber) || '917018223850';
      var msg = [
        'Hello Bharat Cibil Team,',
        '',
        'I would like to request a preliminary credit consultation.',
        '',
        'Name: ' + fullName,
        'Mobile: +91 ' + normalizeMobile(mobileRaw),
        'WhatsApp: +91 ' + normalizeMobile(whatsappRaw),
        'City: ' + city,
        'State: ' + state,
        'Category: ' + category,
        'Problem: ' + problem,
        'Description: ' + (description || 'Not specified'),
        '',
        'Please contact me regarding the next steps.',
        '',
        'Thank you.'
      ].join('\n');

      var waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg);
      var statusBox = document.getElementById('bc-form-confirmation');
      var linkEl = document.getElementById('bc-whatsapp-confirm-link');
      if (statusBox && linkEl) {
        linkEl.href = waUrl;
        statusBox.style.display = 'block';
      }
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
})();
