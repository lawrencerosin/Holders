import { Component, signal } from '@angular/core';
import { Type } from '../type';

@Component({
  selector: 'app-root',
  imports:[Type], 
  template: '<type></type>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
