import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  /**
   * On search form submit
   */
  @Output() onSearch = new EventEmitter<number>();

  form: FormGroup = new FormGroup({});
  public validNumber: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      postId: ['', Validators.required],
    });
  }

  /**
   * Validate form and emit event
   */
  onSubmit() {
    if (this.form.valid) {
      this.onSearch.emit(this.form.value.postId);
    }
  }
}
