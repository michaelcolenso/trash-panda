var gulp = require( "gulp" );
var runSequence = require( "run-sequence" );
var changed = require( "gulp-changed" );
var plumber = require( "gulp-plumber" );
var to5 = require( "gulp-babel" );
var sass = require( "gulp-sass" );
var neat = require( "node-neat" );
var sourcemaps = require( "gulp-sourcemaps" );
var paths = require( "../paths" );
var compilerOptions = require( "../babel-options" );
var assign = Object.assign || require( "object.assign" );
var svgstore = require( "gulp-svgstore" );
var svgmin = require( "gulp-svgmin" );
var inject = require( "gulp-inject" );
var notify = require( "gulp-notify" );

// Transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task( "build-system", function() {
  return gulp.src( paths.source )
  .pipe( plumber( { errorHandler: notify.onError( "Error: <%= error.message %>" ) } ) )
  .pipe( changed( paths.output, { extension: ".js" } ) )
  .pipe( sourcemaps.init( { loadMaps: true } ) )
  .pipe( to5( assign( {}, compilerOptions, { modules:"system" } ) ) )
  .pipe( sourcemaps.write( { includeContent: true } ) )
  .pipe( gulp.dest( paths.output ) );
} );

// Copies changed html files to the output directory
gulp.task( "build-html", function() {
  return gulp.src( paths.html )
  .pipe( changed( paths.output, { extension: ".html" } ) )
  .pipe( gulp.dest( paths.output ) );
} );

gulp.task( "svgstore", function() {
  var svgs = gulp
  .src( paths.svg )
  .pipe( svgstore( { inlineSvg: true } ) );

  function fileContents ( filePath, file ) {
    return file.contents.toString();
  }

  return gulp
  .src( "src/app.html" )
  .pipe( inject( svgs, { transform: fileContents } ) )
  .pipe( gulp.dest( paths.output ) );
} );

// Copies changed css files to the output directory
gulp.task( "build-css", function() {
  return gulp.src( paths.style )
  .pipe( plumber() )
  .pipe( changed( paths.output, { extension: ".css" } ) )
  .pipe( sourcemaps.init( { loadMaps: true } ) )
  .pipe( sass( {
    indentedSyntax: true,
    includePaths: require( "node-neat" ).includePaths
  } ) )
  .pipe( gulp.dest( paths.output ) );
} );

// This task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task( "build", function( callback ) {
  return runSequence(
    "clean",
    [ "build-system", "build-html", "svgstore", "build-css" ],
    callback
  );
} );
