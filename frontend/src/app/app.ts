import { Component, signal } from '@angular/core';  
import { DatabaseCreation } from "../database creation";

@Component({
  selector: 'app-root', 
  template: "<form><database-creation></database-creation></form>",
  
  imports: [DatabaseCreation]
})
export class App {
  //protected readonly title = signal('frontend');
}
