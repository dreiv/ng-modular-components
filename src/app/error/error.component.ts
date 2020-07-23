import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() error: string | TemplateRef<any> = 'There was an error';
  @ContentChild(TemplateRef) tplRef!: TemplateRef<any>;
}
