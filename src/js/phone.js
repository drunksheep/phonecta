class PhoneCTA {
	constructor(settings) {

		const defaultSettings = {
			overlay: document.querySelector('.cta-overlay'),
			formWrapper: document.querySelector('.cta-form-wrapper-all'),
			hideCtaBtn : '.cta-hide-tooltip',
			showCtaBtn : '.phone-icon',
			ctaWrapper : document.querySelector('.cta-open-wrapper'),
			openButton: '.cta-open',
			closeButton: '.close-cta-overlay',
			formSwitchers: '.form-picker',
			ctaForms: '.cta-form'
		};

		// decides between default settings or passed args on constructor
		this.settings = arguments.length < 1 ? defaultSettings : settings;

		// this.debugSettings();

		// Open button bind
		this.addEvent(this.settings.openButton, 'click', this.openModal.bind(this));

		// Close button bind
		this.addEvent(this.settings.closeButton, 'click', this.closeModal.bind(this));

		// Form Switchers
		this.addEvent(this.settings.formSwitchers, 'click', this.formSwitcher.bind(this));

		// hide / show tooltip
		this.addEvent(this.settings.hideCtaBtn, 'click', this.toggleCTA.bind(this));
		this.addEvent(this.settings.showCtaBtn, 'click', this.toggleCTA.bind(this));
	}


	/**
	 * @method debugSettings
	 * Logs settings currently being used
	*/

	debugSettings() {
		console.log(this.settings);
	}

	/**
	 * @method AddEvent
	 * @param {DomTokenNode | DomTokenList} element // Nodes to bind event
	 * @param {String} event  // Event to bind
	 * @param {String | Function} func // function to use on event
	 *
	 * Helper method to bind events;
	*/

	addEvent(element, event, func) {

		if (element !== window) {
			element = document.querySelectorAll(element);

			element.forEach(el => {
				return el.addEventListener(event, func);
			});
		} else {
			return element.addEventListener(event, func);
		}

	}

	/**
	 * @param {DOMTokenNode} el Element to apply
	 * @param {Function} cb Callback Function
	 * @see https://gist.github.com/alirezas/c4f9f43e9fe1abba9a4824dd6fc60a55
	 * FadeOut polyfill for vanilla JS
	*/

	fadeOut(el, cb) {
		el.style.opacity = 1;

		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = "none";
			} else {
				requestAnimationFrame(fade);
			}
		})();

		if (typeof cb === 'function') {
			cb();
		}
	}

	/**
	 * @param {DOMTokenNode} el Element to apply
	 * @param {String} display What display property should be applied to the element after fading in. Defaults to Block
	 * @param {Function} cb Callback Function
	 * @see https://gist.github.com/alirezas/c4f9f43e9fe1abba9a4824dd6fc60a55
	 * FadeIn polyfill for vanilla JS
	*/

	fadeIn(el, display, cb) {
		el.style.opacity = 0;
		el.style.display = display || "block";

		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();

		if ( typeof cb === 'function' ) {
			cb();
		}
	}

	openModal() {
		this.fadeIn(this.settings.overlay);
	}

	closeModal() {
		this.fadeOut(this.settings.overlay);
	}

	formSwitcher(event) {
		// Prevent clicks on <i> icon missing instance data;
		let target = event.target.nodeName === 'I' ? event.target.parentNode : event.target;
		let instance = target.dataset.instance;
		let forms = document.querySelectorAll(this.settings.ctaForms);
		let targetedForm = document.querySelector(`${this.settings.ctaForms}[data-instance="${instance}"]`);
		let switchers = document.querySelectorAll(this.settings.formSwitchers);


		forms.forEach(switcher => {
			this.fadeOut(switcher);
		});

		document.querySelector(`${this.settings.formSwitchers}.active`).classList.remove('active');
		target.classList.add('active');

		window.setTimeout( () => {
			this.fadeIn(targetedForm);
		}, 400);

	}

	toggleCTA() {
		this.settings.ctaWrapper.classList.toggle('cta-shown');
	}

}


window.onload = () => {
	let CTA = new PhoneCTA;
}