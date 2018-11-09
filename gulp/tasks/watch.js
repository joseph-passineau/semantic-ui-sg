/*******************************
 Setup
*******************************/

const gulp = require("gulp");
const browserSync = require("browser-sync");

const semanticWatch = require("../../semantic/tasks/watch");

/*******************************
 Helpers
*******************************/

const reportChange = event => {
    console.log(`File ${event.path} was ${event.type} running tasks...`);
};

/*******************************
 Exports
*******************************/

gulp.task("watch", ["serve"], () => {
    gulp.watch("index.html", ["refresh"]).on("change", reportChange);

    semanticWatch(() => browserSync.reload());
});