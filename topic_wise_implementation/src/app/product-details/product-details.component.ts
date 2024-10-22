import { Component, inject } from '@angular/core';
import { SelectedCourses } from '../services/selectedCourses.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  display : SelectedCourses = inject(SelectedCourses);

}
