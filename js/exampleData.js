function ShowData(QueryType, canvasName){

	console.log('## ShowData - Start ##');
	console.log('QueryType  : ' + QueryType    );
	console.log('canvasName : ' + canvasName);

	wwwaddress = document.domain;
	console.log('wwwaddress   : ' + wwwaddress);

	cfgGraph = {};
	cfgGraph.AxisIds = [];
	cfgGraph.YAxis = [];
	switch (QueryType) {
	case 1:
		ChartName = 'Temperature';
		PageDescription = 'Temperature';
		cfgGraph.AxisIds[0] = 'Temperature';
		cfgGraph.YAxis.push[{}];
		cfgGraph.YAxis[0] = {id: cfgGraph.AxisIds[0], type: 'linear', position: 'left'};
		break;
	case 2:
		ChartName = 'Humidity';
		PageDescription = 'Humidity';
		cfgGraph.AxisIds[0] = 'Humidity';
		cfgGraph.YAxis.push[{}];
		cfgGraph.YAxis[0] = {id: cfgGraph.AxisIds[0], type: 'linear', position: 'left'};
		break;
	case 3:
		ChartName = 'TemperatureHumidity';
		PageDescription = 'Temperature and Humidity';
		cfgGraph.AxisIds[0] = 'Temperature';
		cfgGraph.AxisIds[1] = 'Humidity';
		cfgGraph.YAxis.push[{}];
		cfgGraph.YAxis[0] = {id: cfgGraph.AxisIds[0], type: 'linear', position: 'left'};
		cfgGraph.YAxis.push[{}];
		cfgGraph.YAxis[1] = {id: cfgGraph.AxisIds[1], type: 'linear', position: 'right'};
		break;
	default:
	}

// http://example.local/exampleData.php?Type=1
// http://example.local/exampleData.php?Type=2
	theURL = 'http://' + wwwaddress + '/exampleData.php'
	sendData = '?Type=' + QueryType;
	console.log('theURL   -> ' + theURL + sendData);

	$.ajax({
		url: theURL,
		data: sendData,
		dataType: 'json', //data format
		type: 'GET',
		success: function (data, textStatus) {
			console.log('textStatus -> ' + textStatus);
			ValLength = 0;
			Titles = [];
			Values = [];
			for(line in Object.keys(data[1])) {
				Titles.push(Object.keys(data[1])[line]);
				console.log('ColHeader -> ' + Object.keys(data[1])[line]);
				Values[line] = [];
				ValLength++;
			}
			console.log('ValLength -> ' + ValLength);

			// Transfer the values in 'data' to corresponding columns in 'Values'.
			for(point in data) {
				for(line in Titles) {
					Values[line].push(data[point][Titles[line]]);
				}
			}

			lineChartData = {}; //declare an object
			lineChartData.labels   = []; //add 'labels' element to object (X axis)
			lineChartData.datasets = []; //add 'datasets' array element to object

			lineChartData.labels = Values[0];
			for (line = 1; line < ValLength; line++) {
				dataset = {};	// Create a new empty object for the dataset
				dataset.label = Titles[line];	//Add the Titles for this line
				dataset.data = Values[line];	//Add the Values for this line
				dataset.fill = false;
				dataset.lineTension = 0.1;

				// Set the AxisId and specific line colours
				if (QueryType < 3) {
					dataset.yAxisID = cfgGraph.AxisIds[0];
					switch (line) {
					case 1:  BaseColour = ' 59, 189, 152'; break;
					case 2:  BaseColour = ' 29, 202, 255'; break;
					case 3:  BaseColour = '211,  72,  54'; break;
					default: BaseColour = '123, 123, 123'; }
				} else {
					if (line == 1) {
						dataset.yAxisID = cfgGraph.AxisIds[0];
					} else {
						dataset.yAxisID = cfgGraph.AxisIds[1];
					}
					switch (line) {
					case 1:  BaseColour = '211,  72,  54'; break;
					case 2:  BaseColour = ' 59, 189, 152'; break;
					default: BaseColour = '123, 123, 123'; }
				}

				// Set the colours
				dataset.backgroundColor = 'rgba(' + BaseColour + ', 0.75)';
				dataset.borderColor = 'rgba(' + BaseColour + ', 1)';
				dataset.pointHoverBackgroundColor = 'rgba(' + BaseColour + ', 1)';
				dataset.pointHoverBorderColor = 'rgba(' + BaseColour + ', 1)';
				//Add this dataset to the datasets array
				lineChartData.datasets.push(dataset);
			}

			ctx = $(canvasName);

			LineGraph = new Chart(ctx, {
				type: 'line',
				name: ChartName,
				data: lineChartData,
				options: {
					title: {
						display: true,
						fontSize: 40,
						fontStyle: 'bold',
						text: PageDescription},
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							boxWidth: 80,
							fontColor: 'rgb(60, 180, 100)'
						}
					},
					scales: {
						yAxes: cfgGraph.YAxis
						,
						xAxes: {
							type: "time",
							time: {
								format: 'MM/DD/YYYY HH:mm',
								// round: 'day'
								tooltipFormat: 'll HH:mm'
							},
							scaleLabel: {
								display: true,
								labelString: 'Log Time'
							}
						}

					}
				}
			});
			
console.log(Chart);
			// Cleanup variables
			delete(lineChartData);
			delete(LineGraph);
			delete(ctx);
			delete(data);
		},
		error : function(jqXHR, textStatus, errorThrown ) {
			console.log('ERROR!!! - ' + errorThrown);
		}

	});
	console.log('## ShowData - End ##');
}
