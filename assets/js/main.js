(function () {
  'use strict';
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (cursor && ring) {
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',(e)=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
    (function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();
    document.querySelectorAll('a,button,.service-row,.p-card').forEach((el)=>{el.addEventListener('mouseenter',()=>{cursor.style.width='20px';cursor.style.height='20px';ring.style.width='60px';ring.style.height='60px';});el.addEventListener('mouseleave',()=>{cursor.style.width='12px';cursor.style.height='12px';ring.style.width='40px';ring.style.height='40px';});});
  }
  const revealObs=new IntersectionObserver((entries)=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){setTimeout(()=>entry.target.classList.add('up'),i*80);}});},{threshold:0.08});
  document.querySelectorAll('.reveal').forEach((el)=>revealObs.observe(el));
  const nav=document.querySelector('nav');
  if(nav){window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50);},{passive:true});}
  document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{anchor.addEventListener('click',(e)=>{const target=document.querySelector(anchor.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});const navMenu=document.querySelector('.nav-center');if(navMenu)navMenu.classList.remove('open');}});});
  const mobileToggle=document.querySelector('.nav-mobile-toggle');
  const navMenu=document.querySelector('.nav-center');
  if(mobileToggle&&navMenu){mobileToggle.addEventListener('click',()=>{const isOpen=navMenu.classList.toggle('open');mobileToggle.setAttribute('aria-expanded',isOpen);const spans=mobileToggle.querySelectorAll('span');if(isOpen){spans[0].style.transform='translateY(7px) rotate(45deg)';spans[1].style.opacity='0';spans[2].style.transform='translateY(-7px) rotate(-45deg)';}else{spans.forEach((s)=>{s.style.transform='';s.style.opacity='';})}});}
  const form=document.getElementById('contactForm');
  const feedback=document.getElementById('formFeedback');
  if(form){form.addEventListener('submit',async(e)=>{e.preventDefault();const btn=form.querySelector('.form-submit');const btnText=btn.querySelector('.btn-text');const btnLoad=btn.querySelector('.btn-loading');btn.disabled=true;btnText.style.display='none';btnLoad.style.display='inline';feedback.className='form-feedback';feedback.textContent='';try{const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});if(response.ok){feedback.className='form-feedback success';feedback.textContent="✓ Message sent! We'll be in touch within 24 hours.";form.reset();}else{feedback.className='form-feedback error';feedback.textContent='Something went wrong. Please email us directly.';}}catch{feedback.className='form-feedback error';feedback.textContent='Network error. Please email hello@boldkraft.com directly.';}finally{btn.disabled=false;btnText.style.display='inline';btnLoad.style.display='none';}});}
  const yearEl=document.getElementById('currentYear');
  if(yearEl)yearEl.textContent=new Date().getFullYear();
})();
