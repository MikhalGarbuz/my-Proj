var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));;
var cssnano = require("gulp-cssnano");
var autoprefixer = require('gulp-autoprefixer');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

gulp.task("html", function () {
    return gulp.src("app/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task("css", function () {
    return gulp.src("app/css/*.css")
        .pipe(concat('styles.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("sass", function () {
    return gulp.src("app/sass/*.sass")
        .pipe(concat('styles.sass')) // combine multiple files into one
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano()) // to run compressed css file
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
    return gulp.src("app/js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
  return gulp.src("app/img/*.jpg")
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.stream());
})

gulp.task("watch", function () {
    browserSync.init({
        server: {
            baseDir: ["./app", "./dist"]
        }
    });
    gulp.watch("app/*.html", gulp.series("html"));
    gulp.watch("app/js/*.js", gulp.series("scripts"));
    gulp.watch("app/sass/*.sass", gulp.series("sass"));
    gulp.watch("app/img/*.{jpg,jpeg,png,gif}", gulp.series("images"))
    gulp.watch("dist").on('change', browserSync.reload);
});

gulp.task("default", gulp.series("html", "sass", "css",'images', "scripts", "watch"));





// const { series, task, src, dest, watch } = require('gulp');  // Here, you're importing the series and task functions from the 'gulp' package. These functions are used to define and run Gulp tasks.
// const fileinclude = require('gulp-file-include');
// const browserSync = require('browser-sync').create();
// // const gulp = require('gulp');

// // // Define a Gulp 4 task called 'logMessage'
// // task('logMessage', async function(cb) {
// //   console.log('This is a Gulp 4 task that logs a message.');
// //   cb();
// // });

// // Default task
// // task('default', series('logMessage'));

// const fileInludeSettings = {
//   prefix: '@@',
//   basepath: '@file'
// };

// task('includeFiles', function () {
//   return src('./app/*.html')
//     .pipe(fileinclude(fileInludeSettings))
//     .pipe(dest('./dist/'))
// })

// task('css', function(){
//   return src('./app/css/*.css')
//   .pipe(dest('./dist/css/*.css')) 
// })

// task('img', function(){
//   return src('./app/img/*.jpeg')
//   .pipe(dest('./dist/img/*.jpeg')) 
// })

// task('html', function(){
//   return src('./app/index.html/*.html')
//   .pipe(dest('./dist/index.html/*.html')) 
// })

// task('js', function(){
//   return src('./app/js/*.js')
//   .pipe(dest('./dist/js/*.js')) 
// })

// task('sass', function(){
//   return src('./app/sass/*.sass')
//   .pipe(dest('./dist/sass/*.sass'))
// })

// // Task to serve the project and watch for changes
// task('serve', function () {
//   browserSync.init({
//     server: {
//       baseDir: './dist/' // Serve files from the 'dist' directory
//     }
//   });

//   // Watch HTML files for changes and reload the browser
//   watch('./app/*.html', series('includeFiles')).on('change', browserSync.reload);
//   watch('./app/blocks/*.html', series('includeFiles')).on('change', browserSync.reload);
//   // watch('./app/css/*.css', series('includeFiles')).on('change', browserSync.reload);

//   // Add more watch tasks for other file types (e.g., CSS, JS) if needed
// });

// // Default task: Run 'logMessage', 'includeFiles', and 'serve' in series
// task('default', series('includeFiles', 'serve'));

