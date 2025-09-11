// import path  from 'path'




// // // recreate _ dirname for es module 
// // its a official js format for packaging and reusing code 


// // export import 




// // export function log(message) {
// //   const timeStamp = new Date().toISOString();
// //   console.log(` ${message}:${timeStamp}:`);
// // }

// // log("this is a test message ")


// let a = 20;
// let b = 2;




// function add(x, y) {
//     let c = 30;
//   return x + c +b;
// }


// console.log(add(a, b));

import path from "path"
import { fileURLToPath } from "url"

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);


const filePath = path.join(_dirname, "files" , "data.txt")


console.log(_dirname);
console.log(_filename);
