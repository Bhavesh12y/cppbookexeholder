const links = [...document.querySelectorAll('nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // 1. Reset all links to default state
      links.forEach(a => {
        a.style.background = '';
        a.style.color = ''; // Added this to fix the text color bug
      });
      
      // 2. Apply new premium styling to the active link
      const activeLink = links.find(x => x.getAttribute('href') === '#' + e.target.id);
      if (activeLink) {
        activeLink.style.background = 'rgba(255, 255, 255, 0.05)'; // Sleek transparent highlight
        activeLink.style.color = 'var(--text-main)'; // Bright white text variable
      }
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(s => io.observe(s));