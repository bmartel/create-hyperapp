#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { spawnSync } = require("child_process");
const { bold, red, cyan, green } = require("colorette");

const name = process.argv[2] || "";

const exitWithError = error => {
  process.stderr.write(`${bold(red(error))}\n\n`);
  process.exit(1);
};

const templatePath = path.join(__dirname, "../template");
const projectPath = path.join(process.cwd(), name);
if (!name) {
  exitWithError("Please provide a name for your new Hyperapp project!");
}
if (fs.existsSync(projectPath)) {
  exitWithError(
    `Project ${name} already exists, please pick a different name!`
  );
}

const dependencies = [
  "hyperapp",
  "@hyperapp/html",
  "hyperapp-page-router",
  "@martel/hyperload",
  "@martel/hyperapp-fx"
];

const devDependencies = [
  "@martel/hyperapp-scripts",
  "workbox-build",
  "tailwindcss",
  "chokidar-cli",
  "npm-run-all"
];

console.log(`Creating a Hyperapp in ${green(projectPath)}.`);
console.log();
console.log("Installing packages. This might take a couple of minutes.");
console.log(
  `Installing ${[...dependencies, ...devDependencies]
    .map(dep => `${cyan(dep)}`)
    .join(", ")} ...`
);

fs.copySync(templatePath, projectPath);
const packageJsonPath = path.join(projectPath, "package.json");
const packageJson = require(packageJsonPath);
packageJson.name = name;
fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

const installPackages = (packages, ...args) => {
  const results = spawnSync("npm", ["install", ...packages, ...args], {
    cwd: projectPath,
    stdio: "inherit",
    shell: true
  });
  if (results.error) {
    exitWithError(
      `Error while installing ${cyan(packages.join(", "))}: ${results.error}`
    );
  }
};

installPackages(dependencies, "--save");
installPackages(devDependencies, "--save-dev");

console.log();
console.log(`Success! Created ${name} in ${process.cwd()}`);
console.log("Inside that directory, you can run several commands:");
console.log();
console.log(cyan(`  npm start`));
console.log("    Starts the development server.");
console.log();
console.log(cyan(`  npm run build`));
console.log("    Bundles the app into static files for production.");
console.log();
console.log(cyan(`  npm test`));
console.log("    Starts the test runner.");
console.log();
console.log("We suggest that you begin by typing:");
console.log();
console.log(cyan("  cd"), name);
console.log(`  ${cyan("npm start")}`);
console.log();
console.log("Happy hacking!");
