// Import the 'path' module (ESM style)
import path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname are not available in ESM, so we recreate them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Example absolute file path
const filePath = "/users/docs/notes.txt";

// 1️⃣ Get directory name
console.log("📂 Directory:", path.dirname(filePath)); // → /users/docs

// 2️⃣ Get base file name
console.log("📄 File name:", path.basename(filePath)); // → notes.txt

// 3️⃣ Get file extension
console.log("📎 Extension:", path.extname(filePath)); // → .txt

// 4️⃣ Join multiple path segments into one path
const joinedPath = path.join(__dirname, "files", "data.txt");
console.log("🛠️ Joined Path:", joinedPath);

// 5️⃣ Resolve an absolute path
const resolvedPath = path.resolve("files", "data.txt");
console.log("🔍 Resolved Path:", resolvedPath);
