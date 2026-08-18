const menu=document.getElementById('menu'),nav=document.getElementById('nav'),search=document.getElementById('search'),msg=document.getElementById('msg'),items=[...document.querySelectorAll('[data-tool]')];
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();if(!q){items.forEach(x=>x.style.display='');msg.textContent='';return}let n=0;items.forEach(x=>{const show=((x.dataset.tool||'')+' '+x.textContent).toLowerCase().includes(q);x.style.display=show?'':'none';if(show)n++});msg.textContent=n?`${n} matching tool${n===1?'':'s'} found.`:'No matching tools found yet. Try another search.'});
