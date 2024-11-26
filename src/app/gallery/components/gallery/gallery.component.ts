import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageModule ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  photos: any[] = [];
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '768px',
        numVisible: 3,
      }
    ];
  }

  ngOnInit() {
    this.photos = [
      {
        itemImageSrc: 'assets/images/cesta.jpg',
        thumbnailImageSrc: 'assets/images/cesta.jpg',
        alt: 'Photo 1',
        title: 'Photo 1',
      },
      {
        itemImageSrc: 'assets/images/montanha.jpg',
        thumbnailImageSrc: 'assets/images/montanha.jpg',
        alt: 'Photo 2',
        title: 'Photo 2',
      },
      {
        itemImageSrc: 'assets/images/navio.jpg',
        thumbnailImageSrc: 'assets/images/navio.jpg',
        alt: 'Photo 3',
        title: 'Photo 3',
      },
      {
        itemImageSrc: 'assets/images/galleria7.jpg',
        thumbnailImageSrc: 'assets/images/galleria7.jpg',
        alt: 'Photo 4',
        title: 'Photo 4',
      },{
        itemImageSrc: 'assets/images/galleria8.jpg',
        thumbnailImageSrc: 'assets/images/galleria8.jpg',
        alt: 'Photo 5',
        title: 'Photo 5',
      },{
        itemImageSrc: 'assets/images/galleria9.jpg',
        thumbnailImageSrc: 'assets/images/galleria9.jpg',
        alt: 'Photo 6',
        title: 'Photo 6',
      },{
        itemImageSrc: 'assets/images/galleria10.jpg',
        thumbnailImageSrc: 'assets/images/galleria10.jpg',
        alt: 'Photo 7',
        title: 'Photo 7',
      }
    ];
  }

  trackByFn(index: number, item: any): string {
    return item.alt; // Use uma propriedade única para identificação
  }
  
}