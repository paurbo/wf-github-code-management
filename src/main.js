(async function() {
  const githubUser = 'paurbo';
  const repoName = 'wf-github-code-management';
  const mainFile = 'dist/main.min.js';

  // 1. Fetch the manifest (using a timestamp to ensure we get the latest manifest)
  // This file is tiny (<1KB), so it loads instantly.
  const manifestUrl = `https://cdn.jsdelivr.net/gh/${githubUser}/${repoName}@main/manifest.json?t=${Date.now()}`;
  
  let version = 'latest'; // Fallback
  
  try {
    const response = await fetch(manifestUrl);
    const data = await response.json();
    version = data.version; // e.g., "a1b2c3d"
  } catch (e) {
    console.warn('Manifest load failed, falling back to latest');
  }

  // 2. Load the actual script with the specific version hash
  const scriptUrl = `https://cdn.jsdelivr.net/gh/${githubUser}/${repoName}@main/${mainFile}?v=${version}`;

  const script = document.createElement('script');
  script.src = scriptUrl;
  script.defer = true;
  document.body.appendChild(script);
  
  console.log(`🚀 Loaded Production Build: ${version}`);
})();