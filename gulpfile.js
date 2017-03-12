// We require these packages
var gulp = require('gulp');
var sass = require('gulp-sass');

// task is a method that exists in gulp (the package imported into variable above);
// give a name to the task, and add a function to be executed
gulp.task('sass', function () {
    // This is the body of the function
    // We want this to return everything
    // create a folder for assets for this task
    // use gulp.src to tell gulp where to find the required files

    // gulp uses pipes / we have imported the gulp-sass library so we pipe the scss
    //  file into the sass library / outputStyle is a method that exists in sass / then we deal with errors /
    //  the we pipe out the destination
    return gulp.src('src/scss/app.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('app/css'));
            // Then we go into our app.scss file and add a rule e.g. body background color red
            // Then we go to the terminal and add THIS task
            // i.e.
            /*
            workflow git:(master) gulp sass
            [07:53:27] Using gulpfile ~/work/udemy/workflow/gulpfile.js
            [07:53:27] Starting 'sass'...
            [07:53:27] Finished 'sass' after 38 ms
            workflow git:(master)
            BUT
            Rather than having to run each task manually, we can type 'gulp' to run the default task (below), and add
                other task to be run as well
             */


});

// Then we need another gulp task - default - this runs when we just type 'gulp'
// We can add other tasks to be run as well, like 'sass'
gulp.task('default', ['sass']);
/*
workflow git:(master) ✗ gulp
[08:00:11] Using gulpfile ~/work/udemy/workflow/gulpfile.js
[08:00:11] Starting 'sass'...
[08:00:11] Finished 'sass' after 45 ms
[08:00:11] Starting 'default'...
[08:00:11] Finished 'default' after 50 μs
workflow git:(master)
*/
