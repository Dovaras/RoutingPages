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
    const buttonQuery = document.querySelectorAll("button");
    // const classAbout = document.getElementsByClassName('.about');
    // var x = document.getElementsByTagName("button")[1];

    function handleClick0(this: HTMLElement) {

      console.log(buttonQuery[1].textContent);
      if (buttonQuery[1].textContent === 'About') {
        window.location.href = '../about';
      }
      else {
        window.location.href = '../home/home.component.html';
        window.location.reload();
      }
    }
    buttonQuery[1].addEventListener("click", handleClick0);


    function handleClick1(this: HTMLElement) {
      console.log(buttonQuery[0].textContent);
      if (buttonQuery[0].textContent === 'Home') {
        window.location.href = '../home/home.component.html';
      }
      else {
        window.location.href = '../about/about.component.html';
      }
    } buttonQuery[0].addEventListener("click", handleClick1);
  }
}
