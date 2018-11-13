var fs = require("fs-extra");

fs.removeSync("publish");
console.log("** Cleared publish folder **");

fs.copySync("semantic/dist/components", "publish");
console.log("** Copied Semantic UI dist files **");

fs.copySync("package.json", "publish/package.json");
console.log("** Copied package.json **");

fs.copySync("LICENSE", "publish/LICENSE");
console.log("** Copied LICENCE **");

fs.copySync("README.md", "publish/README.md");
console.log("** Copied README.md **");
