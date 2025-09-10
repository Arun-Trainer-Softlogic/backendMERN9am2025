// Import ESM modules
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname (not available in ESM by default)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// // 1️⃣ Create or overwrite 'notes.txt'
// fs.writeFileSync(path.join(__dirname, "notes.txt"), "This is my first file.");

// // 2️⃣ Append new content
// fs.appendFileSync(path.join(__dirname, "notes.txt"), "\nAdding more content...");

// 3️⃣ Read and print content
const data = fs.readFileSync(path.join(__dirname, "notes.txt"), "utf-8");
console.log("📄 File Content:\n", data);

// // 4️⃣ Rename 'notes.txt' → 'myNotes.txt'
// fs.renameSync(
//   path.join(__dirname, "notes.txt"),
//   path.join(__dirname, "myNotes.txt")
// );

// // 5️⃣ Delete 'myNotes.txt'
// fs.unlinkSync(path.join(__dirname, "myNotes.txt"));

console.log("✅ All file operations completed successfully.");
