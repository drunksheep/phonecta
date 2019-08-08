<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Phone CTA</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="stylesheet" href="dist/main.css">
</head>
<body>
	<!-- O CTA --> 
	<div class="cta-open-wrapper">
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
		<div class="form-wrapper-all">
			
		</div>
	</div>

	<!-- Fim do Overlay/Corpo dos formulários --> 
	
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="dist/app.js"></script>
</html>