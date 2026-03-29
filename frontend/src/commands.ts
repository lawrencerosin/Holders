import { Component } from "@angular/core";
@Component({
    selector:"commands",
    template:"<select #commands (click)='showRightControls(commands)'><option>Get</option><option value='add'>Add</option><option>Remove</option><option>Change</option></select>"
})
export class Commands{
   
  showRightControls(menu:HTMLSelectElement){
    let controls:HTMLElement=menu;
    function setControls(desired:HTMLElement){
        if(desired!==null)
         controls=desired;
    }
     
    switch(menu.value){
        case "get":
            break;
        case "add":
             
            const adder:HTMLElement=document.getElementById("properties") as HTMLElement;
           setControls(adder);
           break;
        
           
           
    }
    if(controls!==null&&controls!==undefined)
        controls.style.display="block";
  }
}