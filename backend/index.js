 import express from "express";  
 import cors from "cors";
import * as  files from "node:fs"; 
 class Property{
    constructor(name, type, value){
        this.name=name;
        this.type=type;
        this.value=value;
    }
    toString(){
        return `[name:${this.name}, type:${this.type}, value:${this.value}]`;
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
           properties.push(process.env[property]);
        
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
    setEnvFile("properties.env");
    next();
});
database.post("/add", function(request, response){
    const propertyPath=`${request.query.database}-${request.query.chart}-properties`;
    let withoutClosing="";
    //Last closing bracket will be readded later
    for(let position=0; position<process.env[propertyPath].toString().length-1; position++)
        withoutClosing+=process.env[propertyPath][position];
   
    let properties="";
    for(let propertyNum=1; 
        request.query["name"+propertyNum]!==null&&request.query["name"+propertyNum]!==undefined; 
        propertyNum++){
        const property=new Property(request.query["name"+propertyNum], request.query["type"+propertyNum], request.query["value"+propertyNum]);

        properties+="["+property.toString()+"]";
    }
   process.env[propertyPath]=withoutClosing+properties+"]";
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
   createUniqueEntry("properties.env", `${request.query.database}-${request.query.chart}-property`, request.query.name);
   response.send("done");
});
database.listen(9000, function(){
    console.log("Running")
});


