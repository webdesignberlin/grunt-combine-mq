/*
 * grunt-combine-mq
 * https://github.com/buildingblocks/grunt-combine-mq
 *
 * Copyright (c) 2014 Building Blocks
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('combine_mq', 'Grunt wrapper for node-combine-mq', function() {
    var combineMq = require('combine-mq');
    var options = this.options({});
    this.files.forEach( function (file, next) {
      var src = file.src[0];
      var dest = file.dest;
      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return next();
      }
      var processed = combineMq.parseCssString(grunt.file.read(src), options);
      grunt.file.write(file.dest, processed);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};