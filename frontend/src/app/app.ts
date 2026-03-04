import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Creation } from "../creation";
import { Begin } from "../buttons/begin";

@Component({
  selector: 'app-root', 
  templateUrl:"./app.html",
   imports: [RouterOutlet, Creation, Begin]
  
})
export class App {
  protected readonly title = signal('frontend');
  changeVisibleComponents(control:HTMLSelectElement){
   
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
           if(control.parentElement!==null){
               const next:HTMLElement=control.parentElement.nextElementSibling as HTMLElement;
               next.style.display="block";
           }
       }
  }
    
}
