import { Component } from "@angular/core";
@Component({
    selector:"begin",
    template:`<button (click)="displayList('viewDatabases', 'databaseMenu')">Begin</button>`
})
export class Begin{
    async displayList(path:string, id:string){
         const list:HTMLSelectElement=document.getElementById(id) as HTMLSelectElement;
         //Avoids having multiple copies
         list.innerHTML="<option></option>";
        const info=await fetch("http://localhost:9000/"+path);
        const items=await info.json();
        
       
        for(let item of items){
          const itemOption=document.createElement("option");
          itemOption.textContent=itemOption.value=item;
          list.appendChild(itemOption);
          
        }
    }
}