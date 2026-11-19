var R=document.documentElement,L='fr';try{if(localStorage.getItem('nc-lang')==='en')L='en';var th=localStorage.getItem('nc-theme');if(th)R.dataset.theme=th}catch(e){}
var TX={back:['Retour aux projets','Back to projects'],tech:['Réalisé avec','Built with'],visit:['Visiter l’application','Visit the app'],code:['Voir le code','View the code'],nf:['Projet introuvable.','Project not found.']};
function pick(a){return a[L==='fr'?0:1]}function tr(k){return pick(TX[k])}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function draw(){R.lang=L;document.getElementById('bl').textContent=L==='fr'?'EN':'FR';document.getElementById('bkt').textContent=tr('back');
 var k=new URLSearchParams(location.search).get('p'),p=PROJ.filter(function(x){return x.k===k})[0],d=document.getElementById('d');
 if(!p){d.innerHTML='<p>'+tr('nf')+'</p>';return}
 d.innerHTML='<p class="lb">'+pick(p.cat)+'</p><h1>'+esc(p.n)+'</h1><p class="soft" style="font-size:18px">'+pick(p.d)+'</p><div class="grd"><div class="bx"><small>'+tr('tech')+'</small><div class="chips">'+p.t.map(function(x){return '<span class="chip">'+esc(x)+'</span>'}).join('')+'</div></div></div>'
 +'<div style="display:flex;gap:12px;flex-wrap:wrap">'+(p.site?'<a class="btn mag" target="_blank" rel="noopener" href="'+p.site+'"><span>'+tr('visit')+'</span><span class="ar">→</span></a>':'')+(p.link?'<a class="btn o" target="_blank" rel="noopener" href="'+p.link+'"><span>'+tr('code')+'</span><span class="ar">→</span></a>':'')+'</div>';
 document.title=p.n+' · N’Goran Laël Jean-Charles'}
document.getElementById('bl').onclick=function(){L=L==='fr'?'en':'fr';try{localStorage.setItem('nc-lang',L)}catch(e){}draw()};
document.getElementById('bt').onclick=function(){var t=(R.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'))==='dark'?'light':'dark';R.dataset.theme=t;try{localStorage.setItem('nc-theme',t)}catch(e){}};
R.classList.add('ready');draw();
