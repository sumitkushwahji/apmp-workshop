import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Add RouterModule import
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  imports: [],
  providers: [HttpClientModule],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, // Add RouterModule here
    HttpClientModule, // Add HttpClientModule here
  ],
  //   declarations: [
  //     AppComponent,
  //     // RealGraphComponent
  //   ],
})
export class AppModule {}
