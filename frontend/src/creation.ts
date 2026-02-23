import {  Component,    ElementRef,  Input, ViewChild } from "@angular/core";
@Component({
    selector:"creation",
    template:`{{type}}<select #used (change)="changeVisibleOptions()"><option value="use">Use</option><option value="new">New</option><option value="destroy">Destroy</option></select><input type="text"  id={{namer}} style="display:none" placeholder="Name of {{type}}"/><select><ng-content></ng-content></select>`
}) 
 
export class Creation{
    @Input() type:string="";
    @Input() namer:string=""; 
    @ViewChild("used") commands:ElementRef;
    
    constructor(commands:ElementRef){
      this.commands=commands;
    }
    changeVisibleOptions(){
         
         const creation:HTMLInputElement=this.commands.nativeElement.nextElementSibling as HTMLInputElement;
           const choices:HTMLSelectElement=creation.nextElementSibling as HTMLSelectElement;
           
         if(creation!==null&&choices!==null){
          
          

           if(this.commands.nativeElement.value=="new"){
             creation.style.display="block";
             choices.style.display="none";
           }
           else{
            creation.style.display="none";
             choices.style.display="block";
           }
        }
    }
}