import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Creation } from "../creation";

@Component({
  selector: 'app-root', 
  templateUrl:"./app.html",
   imports: [RouterOutlet, Creation]
  
})
export class App {
  protected readonly title = signal('frontend');
  async displayList(path:string, id:string){
         const list:HTMLSelectElement=document.getElementById(id) as HTMLSelectElement;
        const info=await fetch("http://localhost:9000/"+path);
        const items=await info.json();
        
      console.log(items.length);
        for(let item of items){
          const itemOption=document.createElement("option");
          itemOption.textContent=itemOption.value=item;
          list.appendChild(itemOption);
          
        }
    }
    hello(){
      alert("hello");
    }
}
