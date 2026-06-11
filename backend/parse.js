import Property from "./property.js";
export function parseProperty(text){
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
export function parseRecord(info){
    const record={};
    for(let position=0; position<info.length-1; position++){
        while(position<info.length&&info[position]!='[')
            position++;
        let property="";
        position++;
        while(position<info.length&&info[position]!=','){
            property+=info[position++];
           
        }
         
        let value="";
        position++;
        while(position<info.length&&info[position]!=']'){
        
            value+=info[position++];
        }
        record[property]=value;
    }
    return record;
}
export function parseInteger(value){
    let number=0;
    let start;
    if(value[0]=='-')
       start=1;
    else
        start=0;
    for(let position=start; position<value.length&&value[position]!='.'; position++){
        const digit=value.charCodeAt(position)%24;
        number=number*10+digit;
    }
    if(start==1)
    return -number;
    else
        return number;
}