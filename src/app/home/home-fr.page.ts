import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
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
    barChartOutline,
    cogOutline,
    hardwareChipOutline,
    wifiOutline,
    phonePortraitOutline,
    cloudUploadOutline
} from 'ionicons/icons';

@Component({
    selector: 'app-home-fr',
    templateUrl: './home-fr.page.html',
    styleUrls: ['./home-fr.page.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule, RouterLink]
})
export class HomeFrPage implements OnInit, OnDestroy {
    currentSlide = 0;
    slideshowInterval: any;

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
            barChartOutline,
            cogOutline,
            hardwareChipOutline,
            wifiOutline,
            phonePortraitOutline,
            cloudUploadOutline
        });
    }

    ngOnInit() {
        // Start slideshow after view initializes
        setTimeout(() => {
            this.startSlideshow();
        }, 100);
    }

    ngOnDestroy() {
        if (this.slideshowInterval) {
            clearInterval(this.slideshowInterval);
        }
    }

    scrollTo(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    private startSlideshow() {
        this.slideshowInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    private nextSlide() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[this.currentSlide].classList.remove('slide-active');
            this.currentSlide = (this.currentSlide + 1) % slides.length;
            slides[this.currentSlide].classList.add('slide-active');
        }
    }
}
