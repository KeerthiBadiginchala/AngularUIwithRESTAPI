import { Component } from '@angular/core';

@Component({
 moduleId: module.id,
 selector: 'my-example',
 template: `
   <h3 [innerText]="example.name"></h3>
   <a [href]="example.link">{{example.linktitle}}</a>
 `
})
export class ExampleComponent {
 example = { id: 1, name: 'Hello World'};
 color = 'blue';
}