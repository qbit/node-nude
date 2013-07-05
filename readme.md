# node-nude

Node.js port of [nude.js](https://github.com/pa7/nude.js) by [Patrick Wied](https://github.com/pa7).

## Installation

`npm install nude`

## Usage overview

	var nude = require('nude');
	
	nude.scanFile(__dirname + '/images/photo.jpg', function(res) {
	  console.log('Contains nudity: ' + res);
	});

	nude.scanURL('http://awesome.com/images/photo.jpg', function(res) {
	  console.log('Contains nudity: ' + res);
	});
