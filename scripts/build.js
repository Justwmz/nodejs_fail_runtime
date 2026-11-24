const fs = require("node:fs");
const path = require("node:path");

const source = path.join(__dirname, "..", "src", "calculator.js");
const outputDirectory = path.join(__dirname, "..", "dist");
fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(source, path.join(outputDirectory, "calculator.js"));
console.log("Built dist/calculator.js");
