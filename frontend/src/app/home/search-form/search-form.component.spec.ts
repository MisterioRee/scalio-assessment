import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [ReactiveFormsModule, MatCardModule],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
  });

  it('[input-check] should check user input is valid', () => {
    fixture.detectChanges();
    let input = component.form.controls['postId'];
    expect(input.valid).toBeDefined();
    expect(input.pristine).toBeTruthy();
    input.setValue('123');
    expect(input.errors).toBeNull();
  });

  it('[form-submit] should check valid form is submitted', () => {
    fixture.detectChanges();
    //check form is invalid
    expect(component.form.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('button[type=submit]'));
    //check button is disabled
    expect(btn.nativeElement.disabled).toBeTruthy();

    component.form.controls['postId'].setValue('123');
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('[form-submit] should display error on invalid input', () => {
    fixture.detectChanges();
    component.form.controls['postId'].setValue('abc');
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('mat-error'));
    expect(debugElement.nativeElement).toBeDefined();
  });

  it('should display form title', () => {
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h2'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement.textContent).toEqual('Search Post By ID');
  });
});
