import { Component, Input } from "@angular/core";
import { Creation } from "./creation"; 

@Component({
    selector: "database-creation",
    imports:[Creation],
    template:`<nav><creation type="Database" namer="databaseName"></creation><button type="button" (click)="run()">Run</button></nav>`
})
export class DatabaseCreation{
    @Input() name:string="";
    async run(){
        const databases:HTMLSelectElement=document.getElementsByTagName("select")[0];
        const nameBox:HTMLInputElement=document.getElementById("databaseName") as HTMLInputElement;
        const name:string=nameBox.value;
        
        switch(databases.value){
            

            case "new":
                 
                await fetch("http://localhost:9000/createDatabase/"+name, {method:"POST"});
                break;
            
        }

    }
}