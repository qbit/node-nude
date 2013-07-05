var nude = require('../nude'),
  images = [
    { id: 1, expected: false },
    { id: 2, expected: false },
    { id: 3, expected: false },
    { id: 4, expected: true }
  ],
  urls = [
    { id: 'https://raw.github.com/chadsmith/node-nude/master/tests/images/1.jpg', expected: false },
    { id: 'https://raw.github.com/chadsmith/node-nude/master/tests/images/2.jpg', expected: false },
    { id: 'https://raw.github.com/chadsmith/node-nude/master/tests/images/3.jpg', expected: false },
    { id: 'https://raw.github.com/chadsmith/node-nude/master/tests/images/4.jpg', expected: true }
  ];

images.forEach(function(image) {
  nude.scanFile(__dirname + '/images/' + image.id + '.jpg', function(res) {
    console.log('Image ' + image.id + ': ' + res);
    console.log('Expected: ' + image.expected);
  });
});

urls.forEach(function(image) {
	nude.scanURL(image.id, function(res ) {
	    console.log('Image ' + image.id + ': ' + res);
	    console.log('Expected: ' + image.expected);
	});
});
