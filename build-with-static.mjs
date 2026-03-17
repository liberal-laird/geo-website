import { $ } from "bun";

// Build the application and copy static files
async function buildApp() {
  try {
    console.log("📦 Building application...");

    // Build the app
    await $`bun run build:app`;

    console.log("📄 Copying static files...");

    // Copy static files
    await $`bun run build:static`;

    console.log("✅ Build completed successfully!");
    console.log("📁 Files in dist/:");
    await $`ls -la dist/`;
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

buildApp();