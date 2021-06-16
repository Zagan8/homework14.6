const fs = require('fs');

function addFile (fileName,array){
    fs.writeFileSync(fileName,array,"utf8",(err)=>{console.log(err)});    
}
function readfile(fileName){
    try{
    const fileContent =fs.readFileSync(fileName,'utf8');
    console.log(fileContent);
    }
    catch(err){
        console.log(err)
    }
}
module.exports ={
    addFile,
    readfile
}