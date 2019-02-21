<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Phone CTA</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="stylesheet" href="dist/main.css">
</head>
<body>
	<div class="call-cta-wrapper">
		<div class="cta-tooltip">
			<p class="tooltip-text">
				Gostaria de receber uma ligação gratuita?
			</p>
			<button class="confirm">SIM</button>
			<button class="close-cta" aria-label="Fechar CTA de whatsapp">
				&times;
			</button>
		</div>
		<button class="phone-icon">
			<i class="fa fa-phone"></i>
		</button>
	</div>
	<div class="cta-overlay">
		<button class="close-modal close-cta-forms" aria-label="Fechar Modal">
			&times;
		</button>
		<div class="form-wrapper-all">
			<div class="form-picker">
				<button class="form-pickers" data-instance="00">
					<i class="fa fa-phone"></i>
					ME LIGUE AGORA
				</button>
				<button class="form-pickers" data-instance="01">
					<i class="fa fa-clock alt"></i>
					ME LIGUE DEPOIS
				</button>
				<button class="form-pickers active" data-instance="02">
					<i class="fa fa-comments alt"></i>
					DEIXE UMA MENSAGEM
				</button>
			</div>
			<div class="instance" data-instance="00">
				<div class="leave-message">
					<legend class="leave-title">
						<span class="variant">
							NÓS TE LIGAMOS!
						</span>
						Informe seu telefone que entraremos em
						contato o mais rápido possível.
					</legend>
					<div class="fields cleared">
						<p class="callers">Você já é a <span class="number">5</span> pessoa a solicitar uma ligação.</p>
					</div>
				</div>
			</div>
			<div class="instance" data-instance="01">
				<div class="leave-message schedule-time">
					<legend class="leave-title">
						Gostaria de agendar e receber uma
						chamada em outro horário?
					</legend>
					<div class="fields cleared">

						<p class="callers">Você já é a <span class="number">5</span> pessoa a solicitar uma ligação.</p>
					</div>
				</div>
			</div>
			<div class="instance active" data-instance="02">
				<div class="leave-message">
					<legend class="leave-title">
						Deixe sua mensagem! Entraremos em
						contato o mais rápido possível.
					</legend>
					<div class="fields cleared">
						<p class="callers">Você já é a <span class="number">3</span> pessoa a deixar uma mensagem.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="dist/phone.min.js"></script>
</html>