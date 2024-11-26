import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
  state,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ImageModule } from 'primeng/image';

export interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  @Input() public galleryData: Item[] = [];
  @Input() public showCount: boolean = true;

  public previewImage: boolean = false;
  public showMask: boolean = false;
  public currentPreviewImage: Item = this.galleryData[0];
  public currentindex: number = 0;
  public controls: boolean = true;
  public totalImageCount: number = 0;

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  public onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentindex = index;
    this.currentPreviewImage = this.galleryData[index];
  }

  public onAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  public onClosePreview() {
    this.previewImage = false;
    this.showMask = false;
  }

  public nextImage(): void{
    this.currentindex = this.currentindex + 1
    if(this.currentindex > this.galleryData.length -1 ){
      this.currentindex = 0;
    }
    this.currentPreviewImage = this.galleryData[this.currentindex]
  }

  public prevImage(): void{
    this.currentindex = this.currentindex - 1
    if(this.currentindex < 0){
      this.currentindex = this.galleryData.length - 1;
    }
    this.currentPreviewImage = this.galleryData[this.currentindex]
  }

  public trackByFn(index: number, item: Item): string {
    return item.imageAlt;
  }
}
