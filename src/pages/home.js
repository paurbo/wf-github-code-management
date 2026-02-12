import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHome() {
  console.log('Home page scripts running 🏠');

  // Example: Hero Animation
  gsap.from('.hero_heading', {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power4.out'
  });

  // Example: Scroll Interaction
  gsap.to('.section_image', {
    scrollTrigger: {
      trigger: '.section_about',
      start: 'top center',
      scrub: true,
    },
    y: -50, // Parallax effect
  });
}