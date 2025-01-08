import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: "<h1 class='title'>Single file component</h1>",
  styles: '.title{color:red}',
})
export class TitleComponent {}
