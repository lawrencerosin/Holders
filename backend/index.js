 import express from "express";  
 import cors from "cors";
import * as  files from "node:fs"; 
 
const database=express(); 
let reader; 
function createUniqueEntry(file, path, name/*Must be unique*/){
    process.loadEnvFile(file);
    let itemNumber;
    for(itemNumber=1; Object.hasOwn(process.env, path+itemNumber); itemNumber++){
         if(process.env[path+itemNumber.toString()]==name)
            return false;
    }
    files.appendFile(file, (path+itemNumber)+"="+name+"\n", function(error){});
    return true;

}
database.use(cors());
database.get("/getInt", async function(request, response){
  
     const property=request.query.property;
     const condition=request.query.condition;
     let value=0;
     reader=files.readFileSync("./wasm/retrieval.wasm")
    WebAssembly.instantiate(results).then(function(code){
        const {placeInt, getInt}=code.instance.exports;
        placeInt(5, true);
        value=getInt(1);
    }) 
//console.log(results);
   response.send(value);
});
database.post("/createDatabase/:name", function(request, response){
     
    if(createUniqueEntry("databases.env", "database",request.params.name))
         response.send("success");
    else
        response.send("fail");
  
});
database.post("/createChart", function(request, response){
     const {database, chart}= request.query;
    if(createUniqueEntry("sets.env", database+"-chart",`[${chart}, []]`))
         response.send("success");
    else
        response.send("fail");
})
database.listen(9000, function(){
    console.log("Running")
});


