var fs = require("fs-extra");

fs.removeSync("publish");
console.log("** Cleared publish folder **");

function copy(src, dest) {
    return {
        src,
        dest
    };
}

const toCopy = [
    copy("semantic/dist/components", "publish"),
    copy("semantic/dist/semantic.js", "publish/semantic.js"),
    copy("semantic/dist/semantic.css", "publish/semantic.css"),
    copy("semantic/dist/semantic.min.js", "publish/semantic.min.js"),
    copy("semantic/dist/semantic.min.css", "publish/semantic.min.css"),
    copy("package.json", "publish/package.json"),
    copy("LICENSE", "publish/LICENSE"),
    copy("README.md", "publish/README.md")
]

toCopy.forEach(({ src, dest }) => {
    fs.copySync(src, dest);
    console.log(`** Copied ${src} to ${dest} **`);
});