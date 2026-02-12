import './styles/style.css'; // Import your CSS so Vite bundles it
import { initNav } from './components/nav.js';
import { initHome } from './pages/home.js';
import { initAbout } from './pages/about.js';

// 1. Global Code (Runs on every page)
// e.g., Custom cursor, Nav animations, Cookie banner
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  console.log('Global scripts loaded 🌍');
});

// 2. Page-Specific Code (Router)
const page = document.body.getAttribute('data-page');

switch (page) {
  case 'home':
    initHome();
    break;
  case 'about':
    initAbout();
    break;
  default:
    console.log(`No specific scripts for page: ${page}`);
}