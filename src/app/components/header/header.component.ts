import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {

    const aQuery = document.querySelector("ul");
        aQuery?.addEventListener("click", handleClick);

    function handleClick(this: HTMLElement) {
        console.log("Clicked!");
        this.removeEventListener("click", handleClick);
    }
  }
}
