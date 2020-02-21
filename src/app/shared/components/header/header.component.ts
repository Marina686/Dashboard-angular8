import { Component, OnInit, EventEmitter, Output } from '@angular/core'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() tsToggleSideBar: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
  }
  toggleSideBar(){
    this.tsToggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
   }, 300);
  }

}

