import { ApplicationRef, Component, createComponent } from "@angular/core";
import { PropertySelection } from "./property selection";
import { Condition } from "./condition/condition";
import { createConditionCommand } from "./condition actions";
@Component({
    selector:"retrieval",
    template: "<div id='retrieval' #retrieval><button (click)='addProperty()'>Add Property</button><button (click)='displayData(retrieval)'>View Data</button><span id='properties'><property-selection></property-selection></span><condition></condition></div>",
    imports: [PropertySelection, Condition]
})
export class Retrieval{
    
    constructor(private appRef:ApplicationRef){

    }
    createRetrievalCommand():string{
        let retrievalCommand:string="";
        const retrieval:HTMLDivElement=document.getElementById("retrieval") as HTMLDivElement;
        if(retrieval!==null){
            const textboxes:HTMLCollectionOf<HTMLInputElement>=retrieval.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
            for(let position=0; position<textboxes.length; position++){
                retrievalCommand+=`property${position+1}=${textboxes[position].value}`;
                if(position<textboxes.length-1)
                    retrievalCommand+="&";
            }
        }
        return retrievalCommand;
    }
   
    getTitles():string[]{
        const titles:string[]=[];
        const retrieval:HTMLDivElement=document.getElementById("retrieval") as HTMLDivElement;
        const inputs:HTMLCollectionOf<HTMLInputElement>=retrieval.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
        for(let input of inputs){
            titles.push(input.value);
           
        }
      
        return titles;
    }
    displayTitles(chart:HTMLTableElement, titles:string[]){
       
        const titleRow:HTMLTableRowElement=document.createElement("tr");
        for(let title of titles){
            const titleCell:HTMLTableCellElement=document.createElement("th");
            titleCell.textContent=title;
            titleRow.appendChild(titleCell);
        }
        chart.appendChild(titleRow);
    }

    async displayData(retrieval:HTMLDivElement){
        const databaseMenu:HTMLSelectElement=document.getElementById("databaseMenu") as HTMLSelectElement;
         const database:string=databaseMenu.value;
         const chartMenu:HTMLSelectElement=document.getElementById("chartMenu") as HTMLSelectElement;
         const chart:string=chartMenu.value;
         const retrievalCommand:string=this.createRetrievalCommand();
         const conditions:HTMLSpanElement=document.getElementById("conditionCommand") as HTMLSpanElement;
        alert(createConditionCommand());
        const data=await fetch(`http://localhost:9000/retrieve/${database}/${chart}?${retrievalCommand}`)
        const values=await data.json();
       const dataOutput:HTMLTableElement=document.getElementById("data") as HTMLTableElement;
        dataOutput.innerHTML="";
         
        this.displayTitles(dataOutput, this.getTitles());
       
        for(let record of values){
            const row:HTMLTableRowElement=document.createElement("tr") as HTMLTableRowElement;
            for(let property in record){
                const valueCell:HTMLTableCellElement=document.createElement("td");
               
                valueCell.textContent=record[property];
                row.appendChild(valueCell);
            }
              dataOutput.appendChild(row);
        } 
      
    }
     addProperty(){
        const properties:HTMLElement=<HTMLElement>document.getElementById("properties") ;
        createComponent(PropertySelection, {hostElement:properties, environmentInjector:this.appRef.injector});
     }

}