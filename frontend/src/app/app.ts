import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Begin } from "../buttons/begin";
import {RecordAdder} from "../record adder"; 
import { ItemCreation } from '../item creation';
import { Commands } from '../commands';
import { PropertyAdder } from "../property adder";
import { PropertyList } from '../property list';
import { displayPropertyBoxes } from '../element manager';
import { Retrieval } from '../retrieval';
import { Change } from "../change/change";
@Component({
  selector: 'app-root', 
  templateUrl:"./app.html",
   imports: [RouterOutlet, Begin, Commands, RecordAdder, PropertyList, PropertyAdder, Retrieval, ItemCreation, Change]
  
})
export class App {
  protected readonly title = signal('frontend');
    chartCreation:string="newChart";
    changeChartCreationPath(databaseMenu:HTMLSelectElement){
      this.chartCreation="newChart?database="+databaseMenu.value+"&";
       
    }
    displayPropertiesToAdd(){
        displayPropertyBoxes();
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
   
  async displayProperties(menuHolder:HTMLElement, databaseMenu:HTMLSelectElement, chartMenu:HTMLSelectElement){
    if(document.getElementById("propertyList")!==null){
      const propertyMenus:HTMLCollection=menuHolder.children;
      const properties=await fetch(`http://localhost:9000/properties?database=${databaseMenu.value}&chart=${chartMenu.value}`);
      const names=await properties.json();
      for(let propertyMenu of propertyMenus){
        propertyMenu.innerHTML="";
        for(let name of names){
          const propertyOption=document.createElement("option");
          propertyOption.textContent=propertyOption.value=name;
          propertyMenu.appendChild(propertyOption);
        }
      }
   }
  }
  displayCharts(chartsMenu:HTMLSelectElement, databaseMenu:HTMLSelectElement){
       this.changeVisiblityDown(databaseMenu,
         this.displayList("viewCharts/"+databaseMenu.value, chartsMenu));
  }  
}
