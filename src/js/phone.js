function openPhoneCta() {
	// duhh
	$('.confirm').on('click', function () {
		$('.cta-overlay').fadeIn(400, function () {
			$('.form-wrapper-all').fadeIn();
		});

		var now = new Date(),
		days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
		day = days[now.getDay()];
		hour = now.getHours(),
		picker = $('.form-pickers[data-instance=00]');


		if (day === 'Domingo' || day === 'Sábado' || hour > 18 || hour < 8) {
			picker[0].disabled = true;
			picker[0].title = "Disponível apenas em horário comercial";
		}
	});
}

function closeModalCta() {
	$('.close-modal').on('click', function () {
		$('.form-wrapper-all').fadeOut(400, function () {
			$('.cta-overlay').fadeOut();
		});
	});
}

function closeCTA() {
	$('.cta-tooltip').addClass('clicked');
}

function reopenCTA() {
	$('.cta-tooltip').removeClass('clicked');
}

function formPickers() {
	$('.form-pickers').removeClass('active');
	$(this).addClass('active');
	var instance = $(this).data('instance');

	$('.instance:not([data-instance=' + instance + '])').fadeOut(400, function () {
		setTimeout(function () {
			$('.instance[data-instance=' + instance + ']').fadeIn()
		}, 400)
	});
}

function randomizeRequests(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	return random;
}

function printNumbers() {
	var numbers = document.querySelectorAll('.number');
	for (var i = 0; i < numbers.length; i++) {
		numbers[i].innerHTML = randomizeRequests(1, 12);
	}
}

openPhoneCta();
closeModalCta();
printNumbers();
$('.form-pickers').on('click', formPickers);
$('.close-cta').on('click', closeCTA); 
$('.phone-icon').on('click', reopenCTA);