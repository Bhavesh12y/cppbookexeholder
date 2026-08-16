const links=[...document.querySelectorAll('nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.style.background='');
      const a=links.find(x=>x.getAttribute('href')==='#'+e.target.id);
      if(a){a.style.background='#171a1f';a.style.color='#f1f2f4';}
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>io.observe(s));
