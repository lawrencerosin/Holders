import { Component, Input} from "@angular/core";
@Component({
    selector:"commands",
    template:"<select #commands (change)='showRightControls(commands)'><option value='get'>Get</option><option value='new property'>New Property</option><option value='add'>Add</option><option>Remove</option><option>Change</option></select>"
})
export class Commands{
    @Input() database:string="";
    @Input() chart:string="";
     async displayPropertyBoxes(){
    const added:HTMLFormElement=document.getElementsByName("added")[0] as HTMLFormElement;
    const propertyAPI=await fetch(`http://localhost:9000/properties?database=${this.database}&chart=${this.chart}`);
    const properties=await propertyAPI.json(); 
    for(let property of properties){
        const propertyBox=document.createElement("input");
        propertyBox.setAttribute("placeholder", property);
        added.appendChild(propertyBox);
    }
   }
  showRightControls(menu:HTMLSelectElement){
    let controls:HTMLElement=menu;
    function setControls(id:string){
        const desired:HTMLElement=document.getElementById(id) as HTMLElement;
        if(desired!==null)
         controls=desired;
    }
     
    switch(menu.value){
        case "get":
            break;
        case "add":
            this.displayPropertyBoxes();
           document.getElementsByName("added")[0].style.display="block";

           break;
        case "new property":
            
            setControls("newProperty");
            break;
           
           
    } 
    if(controls!==null)
        controls.style.display="block";
  }
}