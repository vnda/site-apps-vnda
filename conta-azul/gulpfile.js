/*
 * Variables
 */

// gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var babelify = require('babelify');
var concat = require('gulp-concat');
var modRewrite  = require('connect-modrewrite');
var browserSync = require('browser-sync').create();

// Sass Source
var scssFiles = './src/styles/scss/app.scss';

// CSS destination
var cssDest = './src/styles/scss/';
var cssMinDest = './static/css/';

// Options for development
var sassDevOptions = {
    outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
    outputStyle: 'compressed'
}

// Reload to changed html's
var reload = browserSync.reload;


/************************************************/

/* SASS */

// Compilar para desenvolvimento
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('run dev', function() {

    return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
  // console.warn("Gulp => Compile sass dev");
});

// Compilar para produção
// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('run build', function() { 

    return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
  .pipe(rename('app.min.css'))
    .pipe(gulp.dest(cssMinDest));
  // console.warn("Gulp => Compile sass prod"); 
});

// observador
// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {

    //gulp.watch(scssFiles, ['run dev', 'run build']);
    gulp.watch(scssFiles, ['run build']);
  // gulp.watch('static/css/app.min.css').on("change", reload);
  // console.warn("Gulp => Watch sass");    
});


// Use with default task - Run with command 'gulp'
// gulp.task('preprocess', ['run dev', 'run build', 'watch']);
gulp.task('preprocess', ['run build', 'watch']);


/************************************************/

/* ES6 */

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src(['src/scripts/*js','src/scripts/*/*js', 'src/scripts/*/*/*js' ])
  .pipe(babel())
    .pipe(browserify({ transform: ['babelify'] }))  
    .pipe(uglify()) 
  .pipe(concat('app.min.js')) 
    .pipe(gulp.dest('static/js')); 
  // console.warn("Gulp => Compile ES6"); 
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('compile', function () {  

    gulp.watch("src/scripts/*.js", ['js', 'js-watch']);   
    gulp.watch("src/scripts/*/*.js", ['js', 'js-watch']);
    gulp.watch("src/scripts/*/*/*.js", ['js', 'js-watch']);

  // gulp.watch("static/js/app.min.js").on("change", reload);
  // console.warn("Gulp => Watch ES6");
});


/************************************************/

// Browser sync and update */

gulp.task('serve', function () {
  
  // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./",
      middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });

  // update html, css and js changes when reload page
  // gulp.watch("*.html").on("change", reload);
  // gulp.watch("views/*.html").on("change", reload);
  // gulp.watch("views/*/*.html").on("change", reload);
  // console.warn("Gulp => Watch HTML");

});

/************************************************/