// One-off script to generate favicon/app icon sizes from the source app icon.
// Run with: node scripts/generate-icons.js
const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "..", "assets-src", "app-icon.png");
const appDir = path.join(__dirname, "..", "app");
const publicDir = path.join(__dirname, "..", "public");

async function main() {
  await sharp(src).resize(32, 32).toFile(path.join(appDir, "icon.png"));
  await sharp(src).resize(180, 180).toFile(path.join(appDir, "apple-icon.png"));
  await sharp(src).resize(192, 192).toFile(path.join(publicDir, "icon-192.png"));
  await sharp(src).resize(512, 512).toFile(path.join(publicDir, "icon-512.png"));
  console.log("Generated icon.png, apple-icon.png, icon-192.png, icon-512.png");
}

main();
