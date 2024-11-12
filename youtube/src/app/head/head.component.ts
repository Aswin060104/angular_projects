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

    const div = document.getElementById('sidebar');
    const head = document.getElementById('head');
    const mainContent = document.getElementById('main-content-container');
    const img = document.getElementById('content');

    if(!this.sidebar && head && mainContent && img){
      div?.classList.remove('in');
      div?.classList.add('out');
      head.style.opacity = '1';
      mainContent.style.opacity = '1';
      mainContent.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      img.style.opacity = '1';
    }
    else if(head && mainContent && img){
      div?.classList.remove('out');
      div?.classList.add('in');
      mainContent.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      img.style.opacity = '0.3';
    }
  }
}
