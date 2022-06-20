import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
})
export class UiComponent implements OnInit {
  constructor() {}
  //BuyProperly logo
  image: string = '../../assets/BuyProperly.png';

  // defining slides for slider
  slides: Array<any> = [
    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/dummy_property_holder/Property_Tile_-_Coming_soon_(5).png',
      button1: 'COMING SOON',
      button2: 'SIGN UP NOW',
      description:
        'We are about to launch our new property in . Interested in learning more?',
    },

    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/prop_19_marmora/1_fhpat.jpeg',
      button1: 'VALUE-Add Property',
      offer: '$200,000',
      term: '3 years',
      annual: '36.3%',
      button2: 'INVEST NOW',
      description: null,
    },

    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/prop_18_phoenix/4.jpg',
      button1: 'Redevolpment',
      offer: '$200,000',
      term: '3 years',
      annual: '36.3%',
      button2: 'INVEST NOW',
      description: null,
    },

    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/prop_14_hamilton/1_yimqic.png',
      button1: 'VALUE-Add Property',
      offer: '$200,000',
      term: '3 years',
      annual: '36.3%',
      button2: 'INVEST NOW',
      description: null,
    },

    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/prop_11_london/X5242987_6_azjtjo.jpg',
      button1: 'COMING SOON',
      offer: '$200,000',
      term: '3 years',
      annual: '36.3%',
      button2: 'INVEST NOW',
      description: null,
    },

    {
      image:
        'https://buyproperly-common-ca.s3.ca-central-1.amazonaws.com/properties/prop_4_oakville/Oakville_Tile_picture_nv3lpf.png',
      button1: 'COMING SOON',
      offer: '$200,000',
      term: '3 years',
      annual: '36.3%',
      button2: 'INVEST NOW',
      description: null,
    },
  ];

  slideIndex: number = 1;

  // showing selected slides and hiding rest of them
  showDivs(n: number) {
    var i;
    var cards = document.querySelectorAll<HTMLElement>('.card');
    if (n > cards.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = cards.length;
    }
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none';
    }
    cards[this.slideIndex - 1].style.display = 'block';
    cards[this.slideIndex].style.display = 'block';
    cards[this.slideIndex + 1].style.display = 'block';
  }

  //selecting next slides
  plusDivs(n: number) {
    this.showDivs((this.slideIndex += n));
  }

  // showing element when it is visible in the Viewport
  reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  ngAfterViewInit(): void {
    this.showDivs(this.slideIndex);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.reveal);
  }

  //when expanded icon is hovered
  expandedHovered(idExpanded: string, idSpan: string) {
    let expanded = document.getElementById(idExpanded);
    let span = document.getElementById(idSpan);
    span?.style.setProperty('transform', 'rotate(180deg)');
    expanded?.style.setProperty('display', 'block');
  }

  //when expanded menu is not hovered
  expandedNotHovered(id: string, idSpan: string) {
    let expanded = document.getElementById(id);
    let span = document.getElementById(idSpan);
    span?.style.setProperty('transform', 'rotate(0deg)');
    expanded?.style.setProperty('display', 'none');
  }
}
