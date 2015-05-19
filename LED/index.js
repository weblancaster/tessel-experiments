var tessel = require('tessel');

// LED's
var LED_a = tessel.led[0].output(1);
var LED_b = tessel.led[1].output(0);

setInterval(function() {
	LED_a.toggle();
	LED_b.toggle();
}, 500)