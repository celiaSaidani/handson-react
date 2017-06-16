const _ = require('lodash');
const letters = ['a', 'c', 'd', 'j'];

_.forEach(letters, function (value) {
	const para = document.createElement('P');
	const elem = document.createTextNode(value);
	para.appendChild(elem);
	document.body.appendChild(para);
});

