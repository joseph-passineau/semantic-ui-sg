const fs = require("fs-extra");
const copyfiles = require("copyfiles");

fs.removeSync("publish");
console.log("** Cleared publish folder **");

function copy(src, dest, options) {
    return {
        src,
        dest,
        options
    };
}

const toCopy = [
    copy("semantic/dist/components/**/*.css", "publish", { exclude: ["**/*.min.*"], up: 3 }),
    copy("semantic/dist/themes/sharegate/assets/icons/**/*.svg", "publish/themes/", { up: 3 }),
    copy("package.json", "publish"),
    copy("LICENSE", "publish"),
    copy("README.md", "publish")
]

toCopy.forEach(({ src, dest, options = {} }) => {
    copyfiles([src, dest], options, err => {
        if (err) {
            console.log(err);
        }
    });
    console.log(`** Copied ${src} to ${dest} **`);
});