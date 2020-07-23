import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() error: any = 'There was an error';

  get isTemplate(): boolean {
    return this.error instanceof TemplateRef;
  }
}
