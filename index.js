/* globals module, console */
var _ = require("lodash");

module.exports = {
	reporter: function(errors, data/* , options */) {
		"use strict";
		var files = _.pluck(data, 'file');
		var erroredFiles = _.pluck(errors, 'file');
		var passedFiles = _.difference(files, erroredFiles);

		console.log(passedFiles.length + " file(s) have no errors.\n\n" + passedFiles.join("\n"));
	}
};
