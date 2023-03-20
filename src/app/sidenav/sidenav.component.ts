import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { NavbarData } from './nav-data';


interface SideNavToggle{
screenWidth: number;
collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth = 0;
  navData =  NavbarData;

@HostListener('window:resize', ['$event'])
onResize(event: any){
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <= 768){
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
 this.collapsed = !this.collapsed;
this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(){
 this.collapsed = false;
 this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }



}
