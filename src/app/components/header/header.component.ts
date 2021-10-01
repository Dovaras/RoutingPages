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
    const ulQuery = document.querySelector("ul");
    ulQuery?.addEventListener("click", handleClick);


    function handleClick(this: HTMLElement) {

      //const imgQuery = document.querySelector("img");
      //const imgLink = imgQuery?.getAttribute('src');

      var images = document.getElementsByTagName('img');
      if (images[0].src === '../../../assets/images/statyba1.jpg') {
          images[0].style.display = "none";
          images[1].style.visibility = "visible";

      } else {
            images[1].src = '../../../assets/images/statyba2.jpg';
            images[0].style.display = "none";
            images[1].style.visibility = 'visible';
          }
          console.log(images.length);
        }
    }
  }
