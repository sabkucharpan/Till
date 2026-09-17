(function(){
  const root=document.documentElement, saved=localStorage.getItem('acaevai-theme');
  if(saved==='dark') root.classList.add('dark');
  const nav=document.querySelector('.nav'), theme=document.querySelector('[data-theme]'), mob=document.querySelector('[data-mobile]');
  theme&&theme.addEventListener('click',()=>{root.classList.toggle('dark');localStorage.setItem('acaevai-theme',root.classList.contains('dark')?'dark':'light')});
  mob&&mob.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#demoModal')?.classList.add('open')));
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#demoModal')?.classList.remove('open')));
  document.querySelector('#demoModal')?.addEventListener('click',e=>{if(e.target.id==='demoModal')e.currentTarget.classList.remove('open')});
  const form=document.querySelector('#demoForm');
  if(form) form.addEventListener('submit',e=>{e.preventDefault();form.innerHTML='<div class="card" style="background:var(--surface-2)"><span class="tag">Request received</span><h3 style="margin-top:12px">Let’s build something worth learning.</h3><p>This static build captures the interaction locally. Connect the form to your CRM/email endpoint for production.</p></div>'});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const prev=document.querySelector('[data-preview]');
  if(prev){const buttons=prev.querySelectorAll('[data-lesson]'), title=prev.querySelector('[data-title]'), body=prev.querySelector('[data-body]'); const data=[['Why risk exists — and how institutions teach it','Explore the core concepts, terminology and mental models behind financial risk.'],['From volatility to exposure','Translate market movements into concrete learning objectives and applied cases.'],['Assessing counterparties','Work through a case-based framework for evaluating credit exposure.']]; buttons.forEach((b,i)=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');title.textContent=data[i][0];body.textContent=data[i][1]}));}
})();
