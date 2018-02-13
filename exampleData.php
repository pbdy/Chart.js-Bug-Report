<?php
	//setting header to json
	header("Content-Type: application/json");
	
	if(isset($_GET['Type']) && !empty($_GET['Type'])) {
		$theType = $_GET["Type"];
		if (is_numeric($theType)) {
			if ($theType<1 or $theType>2) {
				$theType = 1;
			}
			} else {
			$theType = 1;
		}
		} else {
		$theType = 1;
	}

	if ($theType == 1) {
		$data = Array (
			Array ('LogTime' => '2018-02-12 15:20:00', 'Main' => '25.4', 'Bedroom' => '25.0', 'Outside' => '26.0'),
			Array ('LogTime' => '2018-02-12 15:40:00', 'Main' => '25.4', 'Bedroom' => '25.1', 'Outside' => '26.1'),
			Array ('LogTime' => '2018-02-12 16:00:00', 'Main' => '25.4', 'Bedroom' => '25.2', 'Outside' => '25.9'),
			Array ('LogTime' => '2018-02-12 16:20:00', 'Main' => '25.4', 'Bedroom' => '25.3', 'Outside' => '25.8'),
			Array ('LogTime' => '2018-02-12 16:40:00', 'Main' => '25.4', 'Bedroom' => '25.3', 'Outside' => '25.6'),
			Array ('LogTime' => '2018-02-12 17:00:00', 'Main' => '25.5', 'Bedroom' => '25.3', 'Outside' => '25.6'),
			Array ('LogTime' => '2018-02-12 17:20:00', 'Main' => '25.4', 'Bedroom' => '25.2', 'Outside' => '25.5'),
			Array ('LogTime' => '2018-02-12 17:40:00', 'Main' => '25.5', 'Bedroom' => '25.2', 'Outside' => '25.3'),
			Array ('LogTime' => '2018-02-12 18:00:00', 'Main' => '25.6', 'Bedroom' => '25.2', 'Outside' => '25.2')
		);
	} else {
		$data = Array (
			Array ('LogTime' => '2018-02-12 16:00:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '67.0'),
			Array ('LogTime' => '2018-02-12 16:20:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 16:40:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 17:00:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 17:20:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 17:40:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 18:00:00', 'Main' => '74.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 18:20:00', 'Main' => '73.0', 'Bedroom' => '69.0', 'Outside' => '68.0'),
			Array ('LogTime' => '2018-02-12 18:40:00', 'Main' => '73.0', 'Bedroom' => '69.0', 'Outside' => '68.0')
		);
	}	
	$JData = json_encode($data); //, JSON_PRETTY_PRINT
	print $JData;
?>
