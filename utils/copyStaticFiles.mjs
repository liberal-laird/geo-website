import { $ } from "bun";

// Copy static files to dist directory
async function copyStaticFiles() {
  try {
    // Ensure dist directory exists
    await $`mkdir -p dist`;

    // Copy all files from src/public to dist
    await $`cp -r src/public/* dist/ || echo "No public files to copy"`;

    console.log("✅ Static files copied successfully");
  } catch (error) {
    console.error("❌ Error copying static files:", error);
    process.exit(1);
  }
}

copyStaticFiles();