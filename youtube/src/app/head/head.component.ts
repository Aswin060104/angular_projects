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

    if(!this.sidebar && head && mainContent){
      div?.classList.remove('in');
      div?.classList.add('out');
      head.style.opacity = '1';
      mainContent.style.opacity = '1';
    }
    else if(head && mainContent){
      div?.classList.remove('out');
      div?.classList.add('in');
      head.style.opacity ='0.1';
      mainContent.style.opacity = '0.1';
    }
  }
}
