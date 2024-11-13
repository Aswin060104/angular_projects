import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  sidebar : boolean = false;
  showSidebar(){
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
    

    const div = document.getElementById('sidebar');
    // const head = document.getElementById('head');
    // const mainContent = document.getElementById('main-content-container');
    // const img = document.getElementById('content');

    if(!this.sidebar){
    //   document.body.classList.remove('coverall');
      div?.classList.remove('in');
      div?.classList.add('out');
    //   head.style.opacity = '1';
    //   mainContent.style.opacity = '1';
    //   mainContent.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    //   img.style.opacity = '1';
    }
    else {
    //   document.body.classList.add('coverall');
      div?.classList.remove('out');
      div?.classList.add('in');
    //   mainContent.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    //   img.style.opacity = '0.3';
    }
}

  activeCard : number = 0;
  makeActive(val : number){
    this.activeCard = val;
  }

  courseDetails = [
    {name : "Introduction to Angular"},
    {name : "Basics of Components"},
    {name : "Structural Directives - ngFor, ngIf and ngSwitch"},
    {name : "Structural Directives - ngClass and ngStyle"},
    {name : "Services and providers"},
    {name : "Angular Forms"},
    {name : "Template Driven Forms"},
    {name : "Reactive Forms"},
    {name : "Routing and parameters"},
    {name : "Observables and its method"}
  ]
}
