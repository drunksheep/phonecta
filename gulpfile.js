// npm uninstall `ls -1 node_modules | tr '/\n' ' '`

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    packer = require('css-mqpacker'),
    prefixes = require('autoprefixer'),
    cssnano = require('cssnano'),
    pump = require('pump');

gulp.task('stylus', function () {
    return gulp.src('src/stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('src'));
});

gulp.task('css', function () {
    var processors = [
        prefixes({
            browsers: ['last 3 versions']
        }),
        packer(),
        cssnano({zindex: false,reduceIdents: false}),
    ];
    return gulp.src('src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', function (done) {
    gulp.src(['src/js/phone.js'])
        .pipe(concat('phone.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('uglify-debug', function (cb) {
    pump([
        gulp.src('src/js/phone.js'),
        concat('phone.min.js'),
        uglify(),
        gulp.dest('dist')
    ], cb);
});

gulp.task('watch', function (done) {
    gulp.watch('src/stylus/main.styl', gulp.series('stylus', 'css'));
    gulp.watch('src/js/**/phone.js', gulp.series('compress'));
    done();
});

gulp.task('default', gulp.series('stylus', 'css', 'compress', 'watch'));