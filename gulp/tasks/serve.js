/*******************************
 Setup
*******************************/

const gulp = require("gulp");
const browserSync = require("browser-sync");

/*******************************
 Browser Sync
*******************************/

const sync = callback => {
    return browserSync({
        online: false,
        port: 9000,
        server: {
            baseDir: ["."]
        }
    }, callback);
};

/*******************************
 Exports
*******************************/

gulp.task("serve", callback =>
    sync(callback));

gulp.task("refresh", () => {
    browserSync.reload();
})
