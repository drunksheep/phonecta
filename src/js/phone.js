class PhoneCTA {
	constructor(settings) {

		let defaultSettings = {
			overlay: '.cta-overlay', 
			formWrapper: '.cta-form-wrapper-all', 
			openButton: '.cta-open',
			closeButton: '.cta-overlay-close',
		};

		this.settings = arguments.length < 1 ? defaultSettings : settings;

		this.debugSettings();
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
	 * @param {String} element 
	 * @param {String} event 
	 * @param {String} func 
	 * 
	 * Helper methods to bind events;
	 */
	
	addEvent(element, event, func) {
		
	}

	openModal() {

	}

	closeModal() {
		
	}

}


window.onload = () => {
	let CTA = new PhoneCTA;
	// PhoneCTA.debugSettings();
}