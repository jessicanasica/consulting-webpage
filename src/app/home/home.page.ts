import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  cloudOfflineOutline,
  locationOutline,
  shieldCheckmarkOutline,
  peopleOutline,
  codeSlashOutline,
  serverOutline,
  schoolOutline,
  checkmarkCircle,
  imagesOutline,
  videocamOutline,
  newspaperOutline,
  mailOutline,
  logoLinkedin,
  logoInstagram,
  playCircleOutline,
  analyticsOutline,
  syncOutline,
  mapOutline,
  pulseOutline,
  barChartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    RouterLink
  ],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content!: IonContent;
  private slideshowInterval: any;
  private currentSlide = 0;
  private totalSlides = 6;

  constructor() {
    addIcons({
      cloudOfflineOutline,
      locationOutline,
      shieldCheckmarkOutline,
      peopleOutline,
      codeSlashOutline,
      serverOutline,
      schoolOutline,
      checkmarkCircle,
      imagesOutline,
      videocamOutline,
      newspaperOutline,
      mailOutline,
      logoLinkedin,
      logoInstagram,
      playCircleOutline,
      analyticsOutline,
      syncOutline,
      mapOutline,
      pulseOutline,
      barChartOutline
    });
  }

  ngOnInit() {
    // Start slideshow after view initializes
    setTimeout(() => {
      this.startSlideshow();
    }, 500);
  }

  ngOnDestroy() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
  }

  private startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  private nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
      slides[this.currentSlide].classList.remove('slide-active');
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      slides[this.currentSlide].classList.add('slide-active');
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
