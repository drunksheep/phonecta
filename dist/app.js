class PhoneCTA{constructor(t){const e={overlay:document.querySelector(".cta-overlay"),formWrapper:document.querySelector(".cta-form-wrapper-all"),hideCtaBtn:".cta-hide-tooltip",showCtaBtn:".phone-icon",ctaWrapper:document.querySelector(".cta-open-wrapper"),openButton:".cta-open",closeButton:".close-cta-overlay",formSwitchers:".form-picker",ctaForms:".cta-form"};this.settings=arguments.length<1?e:t,this.addEvent(this.settings.openButton,"click",this.openModal.bind(this)),this.addEvent(this.settings.closeButton,"click",this.closeModal.bind(this)),this.addEvent(this.settings.formSwitchers,"click",this.formSwitcher.bind(this)),this.addEvent(this.settings.hideCtaBtn,"click",this.toggleCTA.bind(this)),this.addEvent(this.settings.showCtaBtn,"click",this.toggleCTA.bind(this))}debugSettings(){console.log(this.settings)}addEvent(t,e,s){if(t===window)return t.addEventListener(e,s);(t=document.querySelectorAll(t)).forEach(t=>t.addEventListener(e,s))}fadeOut(t,e){t.style.opacity=1,function e(){(t.style.opacity-=.1)<0?t.style.display="none":requestAnimationFrame(e)}(),"function"==typeof e&&e()}fadeIn(t,e,s){t.style.opacity=0,t.style.display=e||"block",function e(){var s=parseFloat(t.style.opacity);(s+=.1)>1||(t.style.opacity=s,requestAnimationFrame(e))}(),"function"==typeof s&&s()}openModal(){this.fadeIn(this.settings.overlay)}closeModal(){this.fadeOut(this.settings.overlay)}formSwitcher(t){let e="I"===t.target.nodeName?t.target.parentNode:t.target,s=e.dataset.instance,i=document.querySelectorAll(this.settings.ctaForms),o=document.querySelector(`${this.settings.ctaForms}[data-instance="${s}"]`);document.querySelectorAll(this.settings.formSwitchers);i.forEach(t=>{this.fadeOut(t)}),document.querySelector(`${this.settings.formSwitchers}.active`).classList.remove("active"),e.classList.add("active"),window.setTimeout(()=>{this.fadeIn(o)},400)}toggleCTA(){this.settings.ctaWrapper.classList.toggle("cta-shown")}}window.onload=()=>{new PhoneCTA};
//# sourceMappingURL=app.js.map
