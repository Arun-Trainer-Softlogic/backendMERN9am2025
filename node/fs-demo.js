import fs from 'fs'

// fs.writeFileSync("notes.txt", "this is the node example for fs")



// fs.appendFileSync("notes.txt", "\nAdding a new Line....")


// const data = fs.readFileSync("notes.txt" , "utf-8")
// console.log("file Content Is : \n", data );

 fs.renameSync("notes.txt", "mynotes.txt");




// fs.unlinkSync("mynotes.txt");




console.log("All files ran");
