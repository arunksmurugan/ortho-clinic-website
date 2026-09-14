const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

// SKOC knee artwork behind the logo
const mark=document.querySelector('.site-header .brand-mark');
if(mark){mark.classList.add('knee-brand');mark.innerHTML='<img src="assets/knee-logo.svg" alt=""><span>SKOC</span>';}

// Remove robotic/computer-assisted cards as requested
[...document.querySelectorAll('.treatment-card')].forEach(card=>{
  if(/Robotic|Computer-Assisted/i.test(card.textContent)) card.remove();
});
// Remove robotic gallery tile too
[...document.querySelectorAll('.gallery-placeholder')].forEach(card=>{
  if(/Robotic/i.test(card.textContent)) card.remove();
});

const art={
  'Joint Replacement':'joint',
  'Arthroscopy & Sports Medicine':'scope',
  'Arthroscopy & Sports Injuries':'scope',
  'Revision Joint Replacement':'revision',
  'Hip, Knee & Shoulder':'joints',
  'Fracture & Trauma Care':'fracture',
  'Trauma Care':'fracture',
  'Back & Neck Pain':'spine'
};

document.querySelectorAll('.treatment-card').forEach(card=>{
  const title=card.querySelector('h3')?.textContent.trim();
  const icon=art[title];
  if(!icon)return;
  const visual=document.createElement('div');
  visual.className='treatment-visual';
  visual.innerHTML=`<svg viewBox="0 0 300 190" role="img" aria-label="${title} illustration"><use href="assets/treatment-icons.svg#${icon}"></use></svg>`;
  card.prepend(visual);
});
