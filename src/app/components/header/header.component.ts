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

    //var image = images[0];
    function handleClick(this: HTMLElement) {

      //onClick="mouseClicked()"
      var number = 1;
      var mouseClicked = function() {
        console.log('mouseClick = ' + number);
        number++;
      }

      var img = document.getElementsByTagName('img');
      img[0].src = '../../../assets/images/statyba1.jpg';
      img[0].style.visibility = 'hidden';
      img[1].src = '../../../assets/images/statyba2.jpg';
      img[1].style.visibility = 'visible';

      ulQuery?.removeEventListener("click", handleClick);

      //img[0].style.display = "none"; //visibility = "hidden";
      // img[1].style.visibility = "visible";

      //var image = images[0];
      //const imgQuery = document.querySelector("img");
      //const imgLink = imgQuery?.getAttribute('src');

      // if (img[0].src === '../../../assets/images/statyba1.jpg') {
      //     img[0].style.display = "none"; //visibility = "hidden";
      //     img[1].style.visibility = "visible";
      //     // image = img[0];
      //     // img[0] = img[1];
      //     // img[1] = image;
      // } else {
      //       img[1].src = '../../../assets/images/statyba2.jpg';
      //       img[1].style.display = "none"; //visibility = "hidden";
      //       img[0].style.visibility = "visible";
      //     }
          console.log("JAU lyg ir...");
        }
        ulQuery?.addEventListener("click", handleClick);
    }
  }
