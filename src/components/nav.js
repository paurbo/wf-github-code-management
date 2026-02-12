import gsap from 'gsap';

export function initNav() {
  const menuBtn = document.querySelector('.nav_btn');
  const menuOverlay = document.querySelector('.nav_overlay');

  if (!menuBtn || !menuOverlay) return;

  // Simple GSAP toggle animation
  const tl = gsap.timeline({ paused: true });
  
  tl.to(menuOverlay, { 
    y: '0%', 
    duration: 0.5, 
    ease: 'power3.inOut' 
  });

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    if (menuBtn.classList.contains('is-active')) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
}