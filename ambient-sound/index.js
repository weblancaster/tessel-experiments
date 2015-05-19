var tessel = require('tessel');

// Ambient setup
var ambientLib = require('ambient-attx4');
var ambient = ambientLib.use(tessel.port['A']);

// LED setup
var LED = tessel.led[0].output(0);

// Ambient on ready setup
ambient.on('ready', function() {

	ambient.setSoundTrigger(0.018);

	ambient.on('sound-trigger', function(soundData) {
		LED.write(1);
		setTimeout(function () {
	  		LED.write(0);
		}, 200);
	});

});