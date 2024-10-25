import { Component, inject } from '@angular/core';
import { SelectedCourses } from '../services/selectedCourses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  display : SelectedCourses = inject(SelectedCourses);

  activeRoute : ActivatedRoute = inject(ActivatedRoute);

  selectedCourseId : number = 0;

  ngOnInit(){
    this.selectedCourseId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log(this.selectedCourseId);
  }
}