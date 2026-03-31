import { Component } from "@angular/core";
@Component({
    selector:"commands",
    template:"<select #commands (change)='showRightControls(commands)'><option value='get'>Get</option><option value='new property'>New Property</option><option value='add'>Add</option><option>Remove</option><option>Change</option></select>"
})
export class Commands{
   
  showRightControls(menu:HTMLSelectElement){
    let controls:HTMLElement=menu;
    function setControls(id:string){
        const desired:HTMLElement=document.getElementById(id) as HTMLElement;
      //  if(desired!==null)
         controls=desired;
    }
     
    switch(menu.value){
        case "get":
            break;
        case "add":
             
            
           setControls("record");
           break;
        case "new property":
            alert("hello");
            setControls("newProperty");
            break;
           
           
    }
    alert(controls.textContent);
    if(true)
        controls.style.display="block";
  }
}