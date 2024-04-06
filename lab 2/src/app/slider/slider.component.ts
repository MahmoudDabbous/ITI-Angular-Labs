import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  sliderData = [
    {
      number: '1/3',
      img: 'assets/images/employee-1.png',
      name: 'London, England',
    },
    {
      number: '2/3',
      img: 'assets/images/employee-2.png',
      name: 'Sunset in Romania',
    },
    {
      number: '3/3',
      img: 'assets/images/employee-3.png',
      name: 'New York, USA',
    },
  ];
  index = 0;
  photoNumber = this.sliderData[this.index].number;
  imgSrc = this.sliderData[this.index].img;
  name = this.sliderData[this.index].name;
  interval: any;

  next() {
    if (this.index >= this.sliderData.length - 1) return;
    this.index++;
    this.photoNumber = this.sliderData[this.index].number;
    this.imgSrc = this.sliderData[this.index].img;
    this.name = this.sliderData[this.index].name;
  }

  prev() {
    if (this.index <= 0) return;
    this.index--;
    this.photoNumber = this.sliderData[this.index].number;
    this.imgSrc = this.sliderData[this.index].img;
    this.name = this.sliderData[this.index].name;
  }

  getIndex(index: number) {
    this.index = index;
    this.photoNumber = this.sliderData[this.index].number;
    this.imgSrc = this.sliderData[this.index].img;
    this.name = this.sliderData[this.index].name;
  }

  slide() {
    this.interval = setInterval(() => {
      this.index++;
      if (this.index > this.sliderData.length - 1) this.index = 0;
      this.photoNumber = this.sliderData[this.index].number;
      this.imgSrc = this.sliderData[this.index].img;
      this.name = this.sliderData[this.index].name;
      console.log(this.index);
    }, 1000 * 2);
  }

  stopSlide() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
