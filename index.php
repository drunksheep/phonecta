<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Phone CTA</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="stylesheet" href="dist/main.css">
	<meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>
	<!-- O CTA -->
	<div class="cta-open-wrapper cta-shown">
		<div class="cta-tooltip">
			<p class="cta-main-title">Olá!</p>
			<p class="cta-main-text">
				Gostaria de receber uma ligação?
			</p>
			<button class="cta-open" aria-label="Abrir CTA de Telefone">
				SIM
			</button>
			<button class="cta-hide-tooltip" aria-label="Esconder janela do CTA de Telefone">
				&times;
			</button>
		</div>
		<button class="phone-icon" data-notifications="2">
			<i class="fa fa-phone"></i>
		</button>
	</div>
	<!-- Fim do CTA -->

	<!-- Overlay/Corpo dos formulários  -->

	<div class="cta-overlay">
		<button class="close-cta-overlay" aria-label="Fechar CTA de Ligação">&times;</button>
		<div class="cta-form-wrapper-all">
			<div class="form-pickers">
				<button class="form-picker" data-instance="me-ligue-agora"><i class="fa fa-phone"></i>ME LIGUE AGORA</button>
				<button class="form-picker active" data-instance="me-ligue-depois"><i class="fa fa-clock"></i>ME LIGUE DEPOIS</button>
				<button class="form-picker" data-instance="deixe-sua-mensagem"><i class="far fa-comments"></i>DEIXE UMA MENSAGEM</button>
			</div>
			<form class="cta-form nos-te-ligamos-form full" data-instance="me-ligue-agora">
				<div role="group" class="field-box flexed row spaced centered nos-te-ligamos-fieldset">
					<legend class="form-title">
						<span>NÓS TE LIGAMOS</span> <br>
						Informe seu telefone que entraremos em contato o mais rápido possível.
					</legend>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-user-circle"></i>
						<input type="text" class="cta-field has-icon" name="Nome" placeholder="Informe seu Nome*" required>
					</label>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-phone"></i>
						<input type="text" class="cta-field has-icon" name="Telefone" placeholder="Informe seu Telefone*" required>
					</label>
					<button class="submit-cta call-now">ME LIGUE AGORA</button>
				</div>
			</form>
			<form class="cta-form me-ligue-depois-form active" data-instance="me-ligue-depois">
				<div role="group" class="field-box flexed row spaced centered me-ligue-depois-fieldset">
					<legend class="form-title">
						Gostaria de agendar e receber uma chamada em outro horário?
					</legend>
					<label class="field-wrapper half">
						<input type="text" class="cta-field" name="Data" placeholder="Data da Ligação">
					</label>
					<label class="field-wrapper half">
						<input type="time" class="cta-field" name="Horário" placeholder="Horário da Ligação">
					</label>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-user-circle"></i>
						<input type="text" class="cta-field has-icon" name="Nome" placeholder="Informe seu Nome*" required>
					</label>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-phone"></i>
						<input type="text" class="cta-field has-icon" name="Telefone" placeholder="Informe seu Telefone*" required>
					</label>
					<button class="submit-cta call-later">ME LIGUE DEPOIS</button>
				</div>
			</form>
			<form class="cta-form deixe-sua-mensagem-form" data-instance="deixe-sua-mensagem">
				<div role="group" class="field-box flexed row spaced centered deixe-sua-mensagem-fieldset">
					<legend class="form-title">
						Deixe sua mensagem! Entraremos em
						contato o mais rápido possível.
					</legend>
					<label class="field-wrapper full">
						<textarea class="cta-field bigger" name="mensagem" placeholder="deixe sua mensagem" required></textarea>
					</label>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-user-circle"></i>
						<input type="text" class="cta-field has-icon" name="Nome" placeholder="Informe seu Nome*" required>
					</label>
					<label class="field-wrapper full has-icon">
						<i class="fa fa-phone"></i>
						<input type="text" class="cta-field has-icon" name="Telefone" placeholder="Informe seu Telefone*" required>
					</label>
					<button class="submit-cta leave-message">DEIXE SUA MENSAGEM</button>
				</div>
			</form>
		</div>
	</div>

	<!-- Fim do Overlay/Corpo dos formulários -->

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="dist/app.js"></script>
</html>