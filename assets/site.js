
const b=document.querySelector('.hamb'),m=document.querySelector('.menu');
if(b&&m)b.addEventListener('click',()=>m.classList.toggle('open'));

document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'block':'none');
}));

const form=document.querySelector('#contactForm');
if(form)form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const s=encodeURIComponent('Permintaan dari website baru - '+(d.get('name')||''));
  const body=encodeURIComponent('Nama: '+d.get('name')+'
Email: '+d.get('email')+'
Telepon: '+d.get('phone')+'

Pesan:
'+d.get('message'));
  location.href='mailto:pt_pbdwijaya@yahoo.com?subject='+s+'&body='+body;
});

const slides=[...document.querySelectorAll('.hero-slide')];
if(slides.length>1){
  let idx=0;
  setInterval(()=>{
    slides[idx].classList.remove('active');
    idx=(idx+1)%slides.length;
    slides[idx].classList.add('active');
  },4600);
}
