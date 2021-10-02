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
    const buttonQuery = document.querySelector("button");
    function handleClick(this: HTMLElement) {


      //document.getElementsByClassName("home");
      window.location.href = '../home/';

      //"../home/home.component.html";
      console.log("Pasispaudė!!");
    }
    buttonQuery?.addEventListener("click", handleClick);
  }
}
