import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
import { LoadingBarComponent } from '../common/loading-bar/loading-bar.component';
import { ErrorComponent } from '../common/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
];

@NgModule({
  declarations: [PostComponent, LoadingBarComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PostModule {}
