import './styles/style.css';
import { initNav } from './components/nav.js';
import { initHome } from './pages/home.js';
import { initAbout } from './pages/about.js';

// 1. Define the Init Function (The code you want to run)
function initSite() {
  console.log('Global scripts loaded 🌍');
  initNav();

  // READ THE PAGE ID HERE (Inside the function, when DOM is ready)
  // Note: Using 'getAttribute' is sometimes safer than dataset for strictly raw attributes
  const pageId = document.documentElement.getAttribute('data-wf-page');
  
  console.log(`Current Webflow Page ID: ${pageId}`);

  switch (pageId) {
    case '698c9fa84beb9de881eaccf1': // Home
      initHome();
      break;
    case 'YOUR_ABOUT_PAGE_ID': 
      initAbout();
      break;
    default:
      console.log(`No specific scripts for page ID: ${pageId}`);
  }
}

// 2. The "Safety Check" (Run immediately if ready, otherwise wait)
if (document.readyState === 'loading') {
  // The page is still loading, wait for the event
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  // The page is already ready (Event happened), run immediately
  initSite();
}