<?php
	session_start(); // Starting Session
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv='content-type' content='text/html; charset=utf-8'>
	<meta http-equiv='refresh' content='600'>
	<title>Bug Example</title>
	<link rel='stylesheet' type='text/css' href='exampleGraph.css'>
</head>
<body>
	<div>Bug Example!</div>

	<canvas id='canvas_temperature'></canvas>
	<canvas id='canvas_humidity'></canvas>

	<script type='text/javascript' src='js/jquery.min.js'></script>
	<script type='text/javascript' src='js/Chart.min.js'></script>
	<script type='text/javascript' src='js/exampleData.js'></script>
	<script type='text/javascript'>
		Chart.defaults.global.defaultFontFamily = 'Lato';
		Chart.defaults.global.defaultFontSize = 12;
		Chart.defaults.global.defaultFontColor = 'blue';
		$(document).ready(ShowData(1, '#canvas_temperature'));
		$(document).ready(ShowData(2, '#canvas_humidity'));
	</script>

</body>
</html>
