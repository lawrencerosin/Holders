import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Creation } from "../creation";
import { Begin } from "../buttons/begin";
import {NewRecord } from "../new record"; 
import { Commands } from '../commands';
import { NewProperty} from "../new property";

@Component({
  selector: 'app-root', 
  templateUrl:"./app.html",
   imports: [RouterOutlet, Creation, Begin, Commands, NewProperty, NewRecord]
  
})
export class App {
  protected readonly title = signal('frontend');
    chartCreation:string="newChart";
    changeChartCreationPath(databaseMenu:HTMLSelectElement){
      this.chartCreation="newChart?database="+databaseMenu.value+"&";
       
    }
    async displayList(path:string, list:HTMLSelectElement){
          
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
  changeVisiblityDown(control:HTMLSelectElement, callback:Promise<void>|null=null){
   
      const creation:HTMLElement=control.nextElementSibling as HTMLElement;
       if(control.value.length==0){
        creation.style.display="block";
        if(control.parentElement!==null&&control.parentElement.nextElementSibling!==null){
          for(let current:HTMLElement|null=control.parentElement.nextElementSibling as HTMLElement; current!==null; current=current.nextElementSibling as HTMLElement){
           current.style.display="none";
        }
        }
       }
       else{
           creation.style.display="none";
           if(callback!==null)
             callback;
           if(control.parentElement!==null){
               const next:HTMLElement=control.parentElement.nextElementSibling as HTMLElement;
               next.style.display="block";
           }
       }
  }
  displayCharts(chartsMenu:HTMLSelectElement, databaseMenu:HTMLSelectElement){
       this.changeVisiblityDown(databaseMenu,
         this.displayList("viewCharts/"+databaseMenu.value, chartsMenu));
  }  
}
