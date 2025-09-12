import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

const _fileName = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_fileName)


if (!fs.existsSync(path.join(_dirname,"files"))){
    fs.mkdirSync(path.join(_dirname, "files"));
    console.log("files Folder created ");
    
}else {
    console.log("files already exists");
    
}