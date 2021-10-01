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

    var images = document.getElementsByTagName('img');
    images[1].style.display = "none"; //visibility = "hidden";
    images[0].style.visibility = "visible";
    var image = images[0];
    function handleClick(this: HTMLElement) {

      var image = images[0];
      //const imgQuery = document.querySelector("img");
      //const imgLink = imgQuery?.getAttribute('src');

      //if (images[0].src === '../../../assets/images/statyba1.jpg') {
          images[1].style.display = "none"; //visibility = "hidden";
          images[0].style.visibility = "visible";
          image = images[0];
          images[0] = images[1];
          images[1] = image;
      //} else {
          //   images[0].src = '../../../assets/images/statyba2.jpg';
          //   images[1].style.visibility = "hidden";
          //   images[0].style.visibility = "visible";
          // }
          console.log("JAU lyg ir...");
        }
    }
  }
