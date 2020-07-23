import { TemplateOrStringDirective } from './template-or-string.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-error class="default"></app-error>
    <app-error class="custom" error="Custom"></app-error>
    <app-error class="tpl" [error]="tpl"></app-error>

    <ng-template #tpl>Template error</ng-template>

    <app-error class="dynamic" [error]="dynamic"></app-error>

    <button (click)="renderTpl(tpl)">Change to tpl</button>
  `
})
class TestComponent {
  dynamic = 'Text first';

  renderTpl(tpl: any): void {
    this.dynamic = tpl;
  }
}

describe('ErrorComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEl: DebugElement;
  let buttonEl: HTMLButtonElement;

  const getElText = (selector: string) =>
    debugEl.query(By.css(selector)).nativeElement.textContent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TemplateOrStringDirective, ErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    debugEl = fixture.debugElement;
    buttonEl = debugEl.query(By.css('button')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default text', () => {
    expect(getElText('.default')).toBe('There was an error');
  });

  it('should render custom text', () => {
    expect(getElText('.custom')).toBe('Custom');
  });

  it('should render custom template', () => {
    expect(getElText('.tpl')).toBe('Template error');
  });

  it('should be dynamic', () => {
    expect(getElText('.dynamic')).toBe('Text first');
    buttonEl.click();
    fixture.detectChanges();

    expect(getElText('.dynamic')).toBe('Template error');
  });
});
