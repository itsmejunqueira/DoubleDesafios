import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent implements OnInit {
 
  constructor(public _elementRef: ElementRef) {}
 

  ngOnInit(): void {}

 
}
