 import express from "express";  
 import cors from "cors";
import * as  files from "node:fs"; 
import { parse } from "node:path";
 class Property{
    constructor(name, type){
        this.name=name;
        this.type=type;
        
    }
    toString(){
        return `Name:${this.name}, Type:${this.type}`;
    }
}
function isPropertyOf(value, database, chart){
    let dash=0;
    let path="";
    let position;
    for( position=0; position<value.length&&dash<2; position++){
        path+=value[position];
        if(value[position]=='-')
            dash++;
    }
    
    if(path!=database+"-"+chart+"-")
        return false;
    else{
      let type="";
       for(; position<value.length&&(value.charCodeAt(position)<'0'.charCodeAt(0)||value.charCodeAt(position)>'9'.charCodeAt(0)); position++){
           type+=value[position];
       }
      
       if(type=="property")
          return true;
       else 
        return false;

    }
}
function getPath(text){
    let path="";
    let dash=0;
    for(let position=0; position<text.length&&dash<2; position++){
       path+=text[position];
       if(text[position]=='-')
        dash++;
    }
    return path;
}
function getProperty(text){
    let property="";
    for(let position=text.length-1; position>=0&&text[position]!='-'; position--){
        property+=text[position];
    }
    return property;
}
function parseProperty(text){
    const propertyNames=["name", "type"];
    const property={};
    property[propertyNames[0]]="";
    let pPosition=0;
    for(let position=0; position<text.length; position++){
        if(text[position]==','){
            pPosition++;
             property[propertyNames[pPosition]]="";
        }
        else
            property[propertyNames[pPosition]]+=text[position];
    }
    
    return new Property(property["name"], property["type"]);
}
const database=express(); 
let reader;  
function setEnvFile(name){
    process.loadEnvFile(name);
}
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
function createEntry(file, path, info){
    process.loadEnvFile(file);
    let itemNumber;
    for(itemNumber=1; Object.hasOwn(process.env, path+itemNumber); itemNumber++);
    files.appendFile(file, (path+itemNumber)+"="+info+"\n", function(error){});
    

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
   response.send(value);
});
database.use(function(request, response, next){
    setEnvFile("properties.env");
    next();

});
database.get("/properties", function(request, response){
       setEnvFile("properties.env");
    const database=request.query.database;
    const chart=request.query.chart;
    const properties=[]; 
    for(let property in process.env){
       if(isPropertyOf(property, database, chart))
           properties.push(parseProperty(process.env[property]));
        
    }
    response.send(properties);
});
database.post("/newDatabase", function(request, response){
        
    if(createUniqueEntry("databases.env", "database",request.query.name))
         response.send("success");
    else
        response.send("fail");
  
});


 database.use(function(request, response, next){
    setEnvFile("property values.env");
     
    next();
});
database.post("/add/:database/:chart", function(request, response){
     setEnvFile("property values.env");
     
   const properties=[];
   const path=`${request.params.database}-${request.params.chart}-record`;
   let recordNum;
   for(recordNum=1; path+recordNum in process.env; recordNum++);
   for(let property in request.query){
       properties.push(`[${property}, ${request.query[property]}]`);
   }
  createEntry("property values.env", path, properties);
   response.send(properties);
});
database.use(function(request, response, next){
    setEnvFile("databases.env");
    next();
});
database.get("/viewDatabases", function(request, response){
   
    const databases=[];
    for(let dbNumber=1; process.env["database"+dbNumber]!==undefined; dbNumber++){ 
        databases.push(process.env["database"+dbNumber]);
    }
    response.send(databases);
})
database.post("/newChart", function(request, response){
   
    if(createUniqueEntry("charts.env", request.query.database+"-chart",request.query.name)){
       files.appendFile("properties.env", `${request.query.database}-${request.query.name}-properties=[]`, function(error){console.log("Unable to create the chart.")});
         response.send("success");
    }
    else
        response.send("fail");
})
database.get("/viewCharts/:database", function(request, response){
    process.loadEnvFile("charts.env");
    const charts=[];
    for(let itemNumber=1; process.env[request.params.database+"-chart"+itemNumber]!==undefined; itemNumber++){
        charts.push(process.env[request.params.database+"-chart"+itemNumber]);
    }
    response.send(charts);
})
database.post("/newProperty", function(request, response){
   createUniqueEntry("properties.env", `${request.query.database}-${request.query.chart}-property`, request.query.name+","+request.query.type);
   response.send("done");
});
database.listen(9000, function(){
    console.log("Running")
});


