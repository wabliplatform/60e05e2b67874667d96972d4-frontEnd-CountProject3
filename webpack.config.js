const path = require('path');

module.exports = {
  entry: {
	'Dashboard' : './javascript/Dashboard.js',
	'Count' : './javascript/Count.js',
	'Page3' : './javascript/Page3.js',
	'Page4' : './javascript/Page4.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};