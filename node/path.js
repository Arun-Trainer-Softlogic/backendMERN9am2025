import path from "path";
import fs from "fs";
import { fileURLToPath } from "url"
import { isUtf8 } from "buffer";

const _fileName = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_fileName)

const filePath = path.join(_dirname, "files", "data.txt")


if (!fs.existsSync(path.join(_dirname,"files"))){
    fs.mkdirSync(path.join(_dirname, "files"));
    console.log("files Folder created ");
    
}else {
    console.log("files already exists");
    
}

// fs.writeFileSync(filePath, "hello from the path  + fs demo! ");

const data = fs.readFileSync(filePath , "utf-8");
console.log("file Content: \n", data);

