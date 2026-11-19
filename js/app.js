/* ============ À MODIFIER : tes informations ============ */
/* ============ À MODIFIER : tes informations ============ */
var CONFIG = {
  whatsapp: '2250709858527',
  email: 'ngoranlaeljeanc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/la%C3%ABl-jean-charles-n-goran-95a059391',
  github: 'https://github.com/nljc-codev',
  cv: 'cv/CV_NGORAN_Lael_Jean-Charles.pdf',
  photo: 'images/photo.jpg',
  stats: { projets: 2, abonnes: 7 }
};

/* ============ Textes FR / EN ============ */
var T = {
p_more:['Voir les détails','See details'],
loading:['// chargement','// loading'],
a_lang:['Passer le site en anglais','Switch site to French'],a_theme:['Changer le thème clair ou sombre','Switch light or dark theme'],a_music:['Musique','Music'],a_nav:['Navigation','Navigation'],
h_l:['// étudiant en licence 2 · génie logiciel · à la recherche d’un stage','// 2nd-year student · software engineering · looking for an internship'],
h_t:['Étudiant en <em>informatique</em>, je cherche un stage.','Computer science <em>student</em> looking for an internship.'],
h_s:['Je développe des sites et des applications, et je cherche un stage pour apprendre en équipe et mettre mes compétences en pratique.','I build websites and apps, and I’m looking for an internship to learn in a team and put my skills into practice.'],
h_b1:['Voir mes projets','See my projects'],h_b2:['Me contacter','Contact me'],
st1:['projets','projects'],st2:['outils','tools'],st3:['étudiant','student'],
badge:['à la recherche d’un stage · ','looking for an internship · '],
mq2:['développement web ✱ python ✱ bases de données ✱ génie logiciel ✱ recherche de stage ✱ ','web development ✱ python ✱ databases ✱ software engineering ✱ internship search ✱ '],
ph:['// ta photo','// your photo'],stk1:['// licence 2 · IIT','// year 2 · IIT'],stk2:['génie logiciel','software engineering'],
a_l:['// à propos','// about'],a_t:['Salut, moi c’est <em>Laël</em>.','Hi, I’m <em>Laël</em>.'],
a_p1:['Je m’appelle N’Goran Laël Jean-Charles. Étudiant en licence 2 d’informatique, option génie logiciel, à l’Institut ivoirien de technologie (IIT) de Grand-Bassam, je suis passionné par les nouvelles technologies et le développement logiciel. Je préside aussi le club informatique de l’IIT pour l’année 2026/2027.','My name is N’Goran Laël Jean-Charles. A 2nd-year computer science student (software engineering) at the Institut ivoirien de technologie (IIT) in Grand-Bassam, I’m passionate about new technologies and software development. I also chair the IIT IT club for the 2026/2027 year.'],
a_p2:['Curieux et motivé, j’aime travailler en équipe pour concevoir des solutions modernes qui répondent aux défis du quotidien en Côte d’Ivoire.','Curious and motivated, I enjoy working in a team to build modern solutions that tackle everyday challenges in Côte d’Ivoire.'],
a_c1:['Grand-Bassam, Côte d’Ivoire','Grand-Bassam, Côte d’Ivoire'],a_c2:['Langues : FR · EN','Languages: FR · EN'],a_c3:['À la recherche d’un stage','Looking for an internship'],
t_l:['// mes outils','// my tools'],t_t:['Ma boîte à <em>outils</em>.','My <em>toolbox</em>.'],
dev_phone:['Tu regardes depuis un téléphone : voici mes outils, rangés comme les applis du tien. L’heure, le réseau et la batterie sont ceux de ton appareil.','You’re on a phone: here are my tools, laid out like the apps on yours. The time, network and battery are your device’s own.'],
dev_tablet:['Tu regardes depuis une tablette : voici mes outils, rangés comme les applis de la tienne. L’heure, le réseau et la batterie sont ceux de ton appareil.','You’re on a tablet: here are my tools, laid out like the apps on yours. The time, network and battery are your device’s own.'],
dev_pc:['Tu regardes depuis un ordinateur : voici mes outils, rangés comme sur ton bureau. L’heure, le réseau et la batterie sont ceux de ton appareil.','You’re on a computer: here are my tools, laid out like your desktop. The time, network and battery are your device’s own.'],
t_hint:['Touche une icône pour découvrir ce que j’en pense, ou cherche un outil.','Tap an icon to see what I think of it, or search for a tool.'],
search:['Rechercher un outil…','Search a tool…'],wg2:['projets réalisés','projects built'],close:['Fermer','Close'],level:['niveau','level'],offline:['hors ligne','offline'],
p_l:['// projets','// projects'],p_t:['Ce que j’ai <em>déjà construit</em>.','What I’ve <em>already built</em>.'],
p_hint:['glisse ou utilise les flèches →','swipe or use the arrows →'],prev:['Projet précédent','Previous project'],next:['Projet suivant','Next project'],
madewith:['// fait avec','// built with'],
slot:['emplacement n°{n} · libre','slot n°{n} · free'],yp_t:['Ton projet <em>ici</em> ?','Your project <em>here</em>?'],yp_b:['+ Démarrer mon projet','+ Start my project'],yp_s:['prochain projet · le tien ?','next project · yours?'],yp_url:['ton-projet.com','your-project.com'],
s_l:['// prestations','// services'],s_t:['Ce que je peux <em>créer</em> pour toi.','What I can <em>build</em> for you.'],
s1t:['Sites web','Websites'],s1d:['Site vitrine, portfolio, landing page ou blog : rapide, beau et visible sur Google.','Showcase site, portfolio, landing page or blog: fast, good-looking and visible on Google.'],s1a:['Design sur mesure','Custom design'],s1b:['Adapté au mobile','Mobile-friendly'],s1c:['Référencement de base','Basic SEO'],
s2t:['Applications mobiles','Mobile apps'],s2d:['Une appli Android et iOS pour ton activité, avec paiement Mobile Money si besoin.','An Android and iOS app for your business, with Mobile Money payment if needed.'],s2a:['Android et iOS','Android and iOS'],s2b:['Paiement intégré','Built-in payment'],s2c:['Mise en ligne sur les stores','Published on the stores'],
s3t:['Logiciels sur mesure','Custom software'],s3d:['Outils de gestion, tableaux de bord, plateformes SaaS : on automatise ce qui te fait perdre du temps.','Management tools, dashboards, SaaS platforms: we automate what wastes your time.'],s3a:['Analyse de ton besoin','Needs analysis'],s3b:['Espace administrateur','Admin area'],s3c:['Suivi et maintenance','Support and maintenance'],
from:['à partir de','from'],quote:['Demander un devis','Get a quote'],
pr_l:['// comment on travaille ensemble','// how we work together'],
pr1:['Échange','Talk'],pr1d:['On parle de ton idée et de ton budget.','We discuss your idea and budget.'],
pr2:['Maquette','Mockup'],pr2d:['Tu valides le design avant le code.','You approve the design before any code.'],
pr3:['Développement','Build'],pr3d:['Je code, tu suis l’avancement.','I code, you follow the progress.'],
pr4:['Livraison','Launch'],pr4d:['Mise en ligne et prise en main.','Go live and handover.'],
f_l:['// formations · bientôt','// courses · coming soon'],soon:['bientôt','soon'],f_t:['Apprends à <em>coder</em> avec moi.','Learn to <em>code</em> with me.'],
lv1:['débutant','beginner'],lv2:['intermédiaire','intermediate'],free:['gratuit','free'],
f1t:['Titre de la formation 1','Course title 1'],f1d:['Ce que tu sauras faire à la fin, en une phrase.','What you’ll be able to do at the end, in one sentence.'],f1m:['lancement prochainement · en ligne','launching soon · online'],
f2t:['Titre de la formation 2','Course title 2'],f2d:['Ce que tu sauras faire à la fin, en une phrase.','What you’ll be able to do at the end, in one sentence.'],f2m:['lancement prochainement · en ligne','launching soon · online'],
f3t:['Tutos gratuits sur TikTok','Free tutorials on TikTok'],f3d:['Des astuces et des tutos réguliers pour progresser en code, dès maintenant.','Regular tips and tutorials to grow your coding skills, starting now.'],f3m:['@nljc_codev · ouvert à tous','@nljc_codev · open to all'],
enroll:['Être prévenu','Notify me'],join:['Me suivre','Follow me'],
e_l:['// parcours','// background'],e_t:['Mon parcours <em>académique</em>.','My <em>academic</em> path.'],
e1_y:['en cours','ongoing'],e1_dg:['Licence 2 · Computer Science, option génie logiciel','Bachelor’s, year 2 · Computer Science, software engineering'],e1_sc:['Institut Ivoirien de Technologie (IIT) · Grand-Bassam','Institut Ivoirien de Technologie (IIT) · Grand-Bassam'],e1_ds:['En parallèle : projets clients, contenus TikTok et préparation de mes formations.','Alongside: client projects, TikTok content and preparing my courses.'],e2_y:['diplôme obtenu','completed'],e2_dg:['Baccalauréat · série A1','Baccalauréat · A1 track'],e2_sc:['Institut Ouezzin Coulibaly · Bouaké','Institut Ouezzin Coulibaly · Bouaké'],e2_ds:['Série lettres et philosophie.','Literature and philosophy track.'],
cv_l:['// mon cv','// my cv'],cv_t:['Mon parcours sur une page.','My background on one page.'],cv_b:['Télécharger mon CV','Download my CV'],cv_s:['PDF · 1 page','PDF · 1 page'],
r_l:['// avis','// reviews'],r_t:['Ce qu’ils <em>disent</em> de moi.','What they <em>say</em> about me.'],
r_more:['tout lire','read all'],r_less:['réduire','show less'],r_leave:['Laisser un avis','Leave a review'],
rf_n:['Ton nom','Your name'],rf_r:['Ton rôle (client, élève…)','Your role (client, student…)'],rf_s:['Ta note','Your rating'],rf_t:['Ton avis','Your review'],
rf_send:['Envoyer mon avis sur WhatsApp','Send my review on WhatsApp'],rf_note:['Ton avis m’arrive sur WhatsApp. Je le publie ici après vérification.','Your review reaches me on WhatsApp. I publish it here after checking it.'],rf_err:['Écris ton nom et ton avis avant d’envoyer.','Write your name and review before sending.'],
o_l:['// réseaux','// socials'],o_t:['Retrouve-moi <em>ici</em>.','Find me <em>here</em>.'],
o_tk:['tutos et coulisses','tutorials and behind the scenes'],o_ig:['projets et visuels','projects and visuals'],o_li:['Mon profil pro','My pro profile'],o_wa:['Écris-moi directement','Message me directly'],o_gh:['mon code','my code'],
o_v:['// dernières vidéos','// latest videos'],o_vt:['Titre de la vidéo','Video title'],o_views:['00k vues','00k views'],
c_l:['// contact','// contact'],c_t:['Écris-<em>moi</em>.','Get in <em>touch</em>.'],
c_s:['Ton message m’arrive sur WhatsApp et par e-mail. Je te réponds dès que possible.','Your message reaches me on WhatsApp and by email. I’ll reply as soon as I can.'],
c_n:['Ton nom','Your name'],c_np:['Prénom et nom','First and last name'],c_ty:['Type de projet','Project type'],
ty1:['Site web','Website'],ty2:['Appli mobile','Mobile app'],ty3:['Logiciel','Software'],ty4:['Formation','Course'],ty5:['Autre','Other'],
c_bu:['Budget','Budget'],bu1:['À définir','To discuss'],c_m:['Ton message','Your message'],c_mp:['Écris ton message…','Write your message…'],
c_send:['Envoyer mon message','Send my message'],c_mail:['Ou par e-mail','Or by email'],c_err:['Écris ton nom et ton message avant d’envoyer.','Write your name and message before sending.'],
copy:['Copier','Copy'],copied:['Copié','Copied'],
f_top:['Retour en haut','Back to top'],ft_tag:['Tes idées, en applis qui marchent.','Your ideas, as apps that work.'],ft_where:['Développeur web et mobile · Abidjan, Côte d’Ivoire','Web and mobile developer · Abidjan, Côte d’Ivoire'],ft_nav:['// navigation','// navigation'],ft_ct:['// contact','// contact'],ft_so:['// réseaux','// socials'],f_end:['Tu es à la fin de la visite 🥲','You’ve reached the end of the tour 🥲'],
nv1:['Accueil','Home'],nv2:['Projets','Projects'],nv3:['Avis','Reviews'],nv4:['Plus','More'],nv5:['Me contacter','Contact me'],
m_t:['// toutes les sections','// all sections'],m1:['À propos','About'],m2:['Outils','Tools'],m3:['Projets','Projects'],m4:['Avis','Reviews'],m5:['Contact','Contact'],m6:['Réseaux','Socials'],m7:['Contact','Contact'],
mu_l:['// musique','// music'],mu_n:['Pour l’écouter ici, choisis le fichier audio sur ton appareil. Sur ton site en ligne, il se lance tout seul quand tu touches ♪ si le fichier est placé dans le dossier musique.','To listen here, pick the audio file from your device. On your live site, it starts when you tap ♪ once the file is in the music folder.'],
mu_pick:['Choisir le fichier audio','Choose the audio file'],mu_play:['Lecture','Play'],mu_pause:['Pause','Pause'],mu_on:['en lecture','playing'],mu_off:['en pause','paused'],mu_none:['La musique n’est pas disponible ici.','Music isn’t available here.'],
wa_hello:['Bonjour Laël, je suis {n}. Je te contacte depuis ton portfolio.','Hello Laël, I’m {n}. I’m contacting you from your portfolio.'],
wa_enroll:['Bonjour Laël, je veux être prévenu du lancement de la formation : {f}.','Hello Laël, I want to be notified when this course launches: {f}.'],
wa_review:['Nouvel avis pour N’Goran Laël Jean-Charles\nNom : {n}\nRôle : {r}\nNote : {s}\nAvis : {t}','New review for N’Goran Laël Jean-Charles\nName: {n}\nRole: {r}\nRating: {s}\nReview: {t}']
};

/* ============ Données ============ */
var TOOLS = [
 {n:'HTML',a:'<img src="images/logos/html.png" alt="">',c:'l',lv:65,d:['La base de chaque page web que je construis.','The foundation of every web page I build.']},
 {n:'CSS',a:'<img src="images/logos/css.png" alt="">',c:'m',lv:50,d:['Mise en page, couleurs et responsive : je donne vie à mes interfaces.','Layout, colors and responsive design: I bring my interfaces to life.']},
 {n:'JavaScript',a:'<img src="images/logos/js.png" alt="">',c:'c',lv:30,d:['Pour rendre mes pages interactives. Je suis en train de l’apprendre.','To make my pages interactive. I’m still learning it.']},
 {n:'Python',a:'<img src="images/logos/python.png" alt="">',c:'w',lv:30,d:['Mon langage pour le scraping et l’architecture MVC.','My language for scraping and MVC architecture.']},
 {n:'MySQL',a:'<img src="images/logos/mysql.png" alt="">',c:'l',lv:50,d:['Pour concevoir et gérer mes bases de données.','To design and manage my databases.']},
 {n:'SQL Server',a:'<img src="images/logos/sqlserver.png" alt="">',c:'m',lv:70,d:['Le système de bases de données que je maîtrise le mieux.','The database system I know best.']},
 {n:'Access',a:'<img src="images/logos/access.png" alt="">',c:'c',lv:30,d:['Pour créer des bases de données simples et des formulaires.','To build simple databases and forms.']}
];
var DOCK = [0,2,3,5];
var REV = [
 {n:['Ouma Savané','Ouma Savané'],i:'O',c:'#C6F135',s:5,r:['',''],q:['Très, très, très bon travailleur.','A very, very, very hard worker.'],l:['','']},
 {n:['Adonis Kouassi','Adonis Kouassi'],i:'A',c:'#00B4F0',s:5,r:['',''],q:['Très organisé pour la gestion des projets informatiques.','Very organised when it comes to managing IT projects.'],l:['','']}
];

/* ============ Moteur ============ */
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var R=document.documentElement, L='fr', RM=matchMedia('(prefers-reduced-motion: reduce)').matches, FINE=matchMedia('(pointer: fine)').matches;
function tr(k){var v=T[k];return v?v[L==='fr'?0:1]:k}
function pick(a){return a[L==='fr'?0:1]}
function store(k,v){try{localStorage.setItem('nc-'+k,v)}catch(e){}}
function load(k){try{return localStorage.getItem('nc-'+k)}catch(e){return null}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function pad(n){return String(n).padStart(2,'0')}
function wa(txt){return 'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(txt)}

function split(el){
  var parts=[],prevWord=false;
  function add(h){if(prevWord){parts[parts.length-1]+=h}else{parts.push(h)}prevWord=true}
  Array.prototype.forEach.call(el.childNodes,function(n){
    var isEl=n.nodeType===1;if(n.nodeType!==3&&!isEl)return;
    var tag=isEl?n.tagName.toLowerCase():'';
    n.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){parts.push(' ');prevWord=false;return}add(isEl?'<'+tag+'>'+esc(w)+'</'+tag+'>':esc(w))});
  });
  var i=0;el.innerHTML=parts.map(function(p){return p===' '?' ':'<span class="w"><span style="--d:'+(i++)+'">'+p+'</span></span>'}).join('');
}

/* outils */
function appHTML(t,i,dock){return '<button class="app" type="button" data-k="'+i+'" style="--n:'+i+'" aria-label="'+esc(t.n)+'"><span class="ic ic-'+t.c+'">'+t.a+'</span>'+(dock?'':'<span class="nm">'+esc(t.n)+'</span>')+'</button>'}
function renderTools(){$('#apps').innerHTML=TOOLS.map(function(t,i){return appHTML(t,i)}).join('');$('#dk').innerHTML=DOCK.map(function(i){return appHTML(TOOLS[i],i,true)}).join('');filterApps()}
function filterApps(){var q=$('#q').value.trim().toLowerCase();$$('#apps .app').forEach(function(a){a.classList.toggle('hid',!!q&&TOOLS[a.dataset.k].n.toLowerCase().indexOf(q)<0)})}
function openTool(k){var t=TOOLS[k],ic=$('#pic');ic.className='ic ic-'+t.c;ic.innerHTML=t.a;$('#pn').textContent=t.n;$('#plv').textContent=tr('level')+' · '+t.lv+' %';$('#pd').textContent=pick(t.d);$('#pbar').style.width='0';$('#pop').classList.add('open');requestAnimationFrame(function(){requestAnimationFrame(function(){$('#pbar').style.width=t.lv+'%'})})}

/* appareil */
var BAT=null;
function devType(){var ua=navigator.userAgent,w=innerWidth;var tab=/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)||(navigator.maxTouchPoints>1&&/Macintosh/.test(ua));var ph=/Mobi|iPhone|iPod|Android.*Mobile/i.test(ua);if(ph||w<600)return 'phone';if(tab||w<1024)return 'tablet';return 'pc'}
function updateDevice(){var t=devType();$('#dev').dataset.t=t;$('#devLbl').textContent=tr('dev_'+t);tick()}
function tick(){var d=new Date(),loc=L==='fr'?'fr-FR':'en-US';var tm=d.toLocaleTimeString(loc,{hour:'2-digit',minute:'2-digit'});$$('.clk').forEach(function(e){e.textContent=tm});var dt=d.toLocaleDateString(loc,{weekday:'short',day:'numeric',month:'short'});$('#sbDate').textContent=dt;$('#wDate').textContent=d.toLocaleDateString(loc,{weekday:'long',day:'numeric',month:'long'})}
function paintNet(){var c=navigator.connection,el=$('#net');if(!navigator.onLine){el.textContent=tr('offline');return}if(c&&c.type==='wifi'||!c){el.innerHTML='<svg viewBox="0 0 24 24"><path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><path d="M12 19h.01" stroke-width="3.4"/></svg>';return}el.textContent=(c.effectiveType||'').toUpperCase()}
function paintBat(){var el=$('#bat');if(!BAT){$('#bp').textContent='';return}var lv=Math.round(BAT.level*100);$('#bp').textContent=lv+' %';el.style.setProperty('--lv',lv+'%');el.classList.toggle('low',lv<=20&&!BAT.charging);el.classList.toggle('chg',!!BAT.charging)}

/* projets */
var PI=-1,typing=null;
function renderProjects(){
  var tk=$('#track'),sl=tk.scrollLeft,N=PROJ.length+1;
  var h=PROJ.map(function(p){return '<article class="slide" data-c="'+p.c+'"><div class="pc"><div class="win"><div class="wbar"><i></i><i></i><i></i><span class="url">'+esc(p.u)+'</span></div><div class="mock" style="background:'+p.c+'"><div class="m-nav"><i></i><i></i><i></i></div><div class="m-h"><i></i><i></i></div><div class="m-p"><i></i><i></i></div><div class="m-b"></div><div class="m-o"></div><div class="m-ph"><i></i><i></i><i></i><i></i></div></div></div><p class="cat">'+pick(p.cat)+'</p><h3>'+esc(p.n)+'</h3><p class="desc">'+pick(p.d)+'</p><div class="tg"><small>'+tr('madewith')+'</small>'+p.t.map(function(x){return '<span>'+esc(x)+'</span>'}).join('')+'</div><a class="btn" href="projet.html?p='+p.k+'">'+tr('p_more')+'<span class="ar">→</span></a></div></article>'}).join('');
  tk.innerHTML=h;tk.scrollLeft=sl;PI=-1;onTrack();
}
function slides(){return $$('#track .slide')}
function onTrack(){
  var tk=$('#track'),sl=slides();if(!sl.length)return;var m=tk.getBoundingClientRect(),best=0,bd=1e9;
  sl.forEach(function(s,i){var r=s.getBoundingClientRect(),d=Math.abs(r.left+r.width/2-(m.left+m.width/2));if(d<bd){bd=d;best=i}});
  if(best===PI)return;PI=best;
  sl.forEach(function(s,i){s.classList.toggle('on',i===best)});
  $('#projets').style.setProperty('--pc',sl[best].dataset.c);
  $('#cnt').textContent=pad(best+1)+' / '+pad(sl.length);
  $('#pline').style.width=((best+1)/sl.length*100)+'%';
  if(best===sl.length-1)typeUrl();
}
function typeUrl(){var el=$('#furl');if(!el)return;clearInterval(typing);var s=tr('yp_url'),i=0;el.textContent='';typing=setInterval(function(){el.textContent=s.slice(0,++i);if(i>=s.length)clearInterval(typing)},90)}
function snapTo(i){var sl=slides(),tk=$('#track');i=Math.max(0,Math.min(sl.length-1,i));var s=sl[i];tk.scrollTo({left:s.offsetLeft-(tk.clientWidth-s.offsetWidth)/2,behavior:RM?'auto':'smooth'})}

/* avis */
var RI=0,rTimer=null,RS=5;
function renderReviews(){$('#avs').innerHTML=REV.map(function(r,i){return '<button class="av'+(i===RI?' on':'')+'" type="button" data-ri="'+i+'" aria-label="'+esc(pick(r.n))+'"><span style="background:'+r.c+'">'+esc(r.i)+'</span></button>'}).join('');showRev(RI,true)}
function showRev(i,quiet){
  RI=i;var r=REV[i],q=$('#quote');
  $$('.av').forEach(function(a,j){a.classList.toggle('on',j===i)});
  q.classList.remove('open');$('#qMoreT').textContent=tr('r_more');
  $('#qst').textContent='★★★★★'.slice(0,r.s)+'☆☆☆☆☆'.slice(0,5-r.s);
  $('#qBig').textContent=pick(r.q);$('#qLong').textContent=pick(r.l);$('#qMore').style.display=pick(r.l)?'':'none';$('#qRole').style.display=pick(r.r)?'':'none';$('#qName').textContent=pick(r.n);$('#qRole').textContent=pick(r.r);
  if(!quiet){q.classList.remove('sw');void q.offsetWidth;q.classList.add('sw')}
  var b=$('#rbi');b.style.animation='none';void b.offsetWidth;b.style.animation='';$('#rbar').classList.remove('pause');
  clearTimeout(rTimer);rTimer=setTimeout(function(){showRev((RI+1)%REV.length)},7000);
}
function pauseRev(){clearTimeout(rTimer);$('#rbar').classList.add('pause')}

function renderReels(){$('#reels').innerHTML=REELS.map(function(r){return '<a class="reel" href="'+esc(CONFIG.tiktok)+'" target="_blank" rel="noopener" style="background:'+r.c+'"><span class="rtag">'+pick(r.tag)+'</span><span class="rbg" aria-hidden="true">'+r.w+'</span><span class="play"><svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z"/></svg></span><span class="rt"><b>'+tr('o_vt')+'</b><small>'+tr('o_views')+'</small></span></a>'}).join('')}

/* liens */
function handle(u){var m=String(u).replace(/\/+$/,'').split('/').pop();return m.charAt(0)==='@'?m:'@'+m}
function setLinks(){
  $$('[data-link]').forEach(function(a){var k=a.dataset.link;a.href=k==='whatsapp'?'https://wa.me/'+CONFIG.whatsapp:CONFIG[k]});
  $$('[data-h]').forEach(function(e){e.textContent=handle(CONFIG[e.dataset.h])});
  $('#waTxt').textContent='+225 '+CONFIG.whatsapp.replace(/^225/,'').replace(/(\d{2})(?=\d)/g,'$1 ');$('#mailTxt').textContent=CONFIG.email;var fm=$('#fmail');if(fm){fm.href='mailto:'+CONFIG.email;fm.textContent=CONFIG.email}
  $$('[data-enroll]').forEach(function(a){a.href=wa(tr('wa_enroll').replace('{f}',tr(a.dataset.enroll)))});
  updateContactLinks();updateReviewLink();
}
function selTxt(id){var b=$(id+' [aria-pressed="true"]');return b?b.textContent:'-'}
function updateContactLinks(){
  var n=$('#cn').value.trim(),m=$('#cm').value.trim();
  var txt=tr('wa_hello').replace('{n}',n||'-')+'\n\n'+m;
  $('#csend').href=wa(txt);
  $('#cmail').href='mailto:'+CONFIG.email+'?subject='+encodeURIComponent('Contact portfolio · '+($('#cn').value.trim()||'-'))+'&body='+encodeURIComponent(txt);
}
function updateReviewLink(){
  var s='★★★★★'.slice(0,RS)+'☆☆☆☆☆'.slice(0,5-RS);
  $('#rsend').href=wa(tr('wa_review').replace('{n}',$('#rn').value.trim()).replace('{r}',$('#rr').value.trim()||'-').replace('{s}',s).replace('{t}',$('#rt').value.trim()));
}

/* musique : un appui lance depuis le début, un autre appui arrête */
var au=$('#au'),playing=false,tt0=null;
function setPlay(p){playing=p;$('#bm').classList.toggle('on',p);$('#bm').setAttribute('aria-pressed',String(p))}
function updateMusicUI(){}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt0);tt0=setTimeout(function(){t.classList.remove('show')},2200)}
function toggleMusic(){
  if(playing){au.pause();setPlay(false);return}
  try{au.currentTime=0}catch(e){}
  au.volume=.55;var pr;try{pr=au.play()}catch(e){pr=null}
  setPlay(true);
  if(pr&&pr.then)pr.catch(function(){setPlay(false);toast(tr('mu_none'))});
}

/* feuilles */
function openSheet(id){closeSheets();var s=$('#sh-'+id);s.classList.add('open');s.setAttribute('aria-hidden','false');$('#bd').classList.add('open');var f=s.querySelector('.sx');if(f)setTimeout(function(){f.focus({preventScroll:true})},300)}
function closeSheets(){$$('.sheet.open').forEach(function(s){s.classList.remove('open');s.setAttribute('aria-hidden','true')});$('#bd').classList.remove('open')}

/* barre d'onglets */
var CT=0,TABMAP={top:0,projets:1,avis:2},IDS=['top','apropos','outils','projets','avis','contact','reseaux'];
function placeInd(){var t=$$('.tab')[CT],ind=$('#ind');if(!t)return;ind.style.width=t.offsetWidth+'px';ind.style.transform='translateX('+t.offsetLeft+'px)'}
function spy(){var cur='top';IDS.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<innerHeight*.45)cur=id});var t=(cur in TABMAP)?TABMAP[cur]:3;if(t!==CT){CT=t;$$('.tab').forEach(function(x,i){x.classList.toggle('on',i===t)});placeInd()}}

/* langue */
function applyLang(){
  R.lang=L;
  $$('[data-i]').forEach(function(e){e.innerHTML=tr(e.dataset.i);if(e.hasAttribute('data-split'))split(e)});
  $$('[data-ph]').forEach(function(e){e.placeholder=tr(e.dataset.ph)});
  $$('[data-al]').forEach(function(e){e.setAttribute('aria-label',tr(e.dataset.al))});
  $('#bl').textContent=L==='fr'?'EN':'FR';
  $('#badgeText').textContent=tr('badge')+tr('badge');
  renderTools();renderProjects();renderReviews();updateDevice();paintNet();updateMusicUI();setLinks();
  $('#cpMail').textContent=tr('copy');
  requestAnimationFrame(placeInd);
}
function switchLang(){
  var go=function(){L=L==='fr'?'en':'fr';store('lang',L);applyLang();$$('.split.in').forEach(function(h){h.classList.remove('in');void h.offsetWidth;h.classList.add('in')})};
  if(RM){go();return}document.body.classList.add('lswap');setTimeout(function(){go();document.body.classList.remove('lswap')},200);
}

/* thème */
function curTheme(){return R.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function switchTheme(){
  var t=curTheme()==='dark'?'light':'dark',go=function(){R.dataset.theme=t};store('theme',t);
  if(document.startViewTransition&&!RM){var b=$('#bt').getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,rad=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    var vt=document.startViewTransition(go);vt.ready.then(function(){R.animate({clipPath:['circle(0px at '+x+'px '+y+'px)','circle('+rad+'px at '+x+'px '+y+'px)']},{duration:700,easing:'cubic-bezier(.22,1,.36,1)',pseudoElement:'::view-transition-new(root)'})}).catch(function(){})}
  else go();
}

/* révélations au défilement */
var io=null;
function countUp(el){var to=+el.dataset.count,suf=el.dataset.suf||'',t0=performance.now();if(RM){el.textContent=to+suf;return}(function f(t){var p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)})(t0)}
function startReveal(){
  var els=$$('[data-rv],.ti,[data-count]');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.dataset.count)countUp(e.target)}})},{threshold:0,rootMargin:'0px 0px -10% 0px'});
  els.forEach(function(e){io.observe(e)});
}

/* défilement */
var ticking=false,shapes=$$('.sh'),big=$('#big');
function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(function(){ticking=false;
  var y=scrollY,h=R.scrollHeight-innerHeight;$('#prog').style.transform='scaleX('+(h>0?y/h:0)+')';$('#hdr').classList.toggle('sc',y>20);
  if(!RM){shapes.forEach(function(s,i){s.style.transform='translate3d('+(Math.cos(y/700+i)*14)+'px,'+(Math.sin(y/520+i*2)*40)+'px,0) rotate('+(y*.015*(i%2?-1:1))+'deg)'});big.style.transform='translate3d(-50%,'+(-y*.03)+'px,0)'}
  var tl=$('#tl');if(tl){var r=tl.getBoundingClientRect();tl.style.setProperty('--tp',Math.max(0,Math.min(1,(innerHeight*.7-r.top)/r.height)))}
  spy();
})}

/* intro */
function ready(){R.classList.add('ready');startReveal();onScroll()}
function intro(){var el=$('#intro');if(RM){el.remove();ready();return}var c=$('#icnt'),b=$('#ibar'),t0=performance.now();
  (function f(t){var p=Math.min(1,(t-t0)/1500),v=Math.round((1-Math.pow(1-p,3))*100);c.textContent=String(v).padStart(3,'0');b.style.width=v+'%';
    if(p<1)requestAnimationFrame(f);else setTimeout(function(){el.classList.add('out');ready();setTimeout(function(){el.remove()},1100)},250)})(t0)}

/* ============ Démarrage ============ */
(function init(){
  var sl=load('lang');if(sl==='en')L='en';
  $('#stP').dataset.count=CONFIG.stats.projets;$('#stA').dataset.count=CONFIG.stats.abonnes;$('#wNum').textContent=CONFIG.stats.projets;
  if(CONFIG.photo){$('#photo').innerHTML='<img src="'+esc(CONFIG.photo)+'" alt="N’Goran Laël Jean-Charles">'}
  $('#rs').innerHTML=[1,2,3,4,5].map(function(n){return '<button type="button" class="on" data-s="'+n+'" aria-label="'+n+'/5">★</button>'}).join('');
  applyLang();
  setInterval(tick,15000);
  if(navigator.getBattery){navigator.getBattery().then(function(b){BAT=b;paintBat();b.addEventListener('levelchange',paintBat);b.addEventListener('chargingchange',paintBat)}).catch(function(){})}
  if(navigator.connection&&navigator.connection.addEventListener)navigator.connection.addEventListener('change',paintNet);
  addEventListener('online',paintNet);addEventListener('offline',paintNet);

  $('#bl').addEventListener('click',switchLang);
  $('#bt').addEventListener('click',switchTheme);

  $('#q').addEventListener('input',filterApps);
  $('#scr').addEventListener('click',function(e){var a=e.target.closest('.app');if(a){openTool(a.dataset.k);return}if(!e.target.closest('.pop')&&!e.target.closest('.srch'))$('#pop').classList.remove('open')});
  $('#px').addEventListener('click',function(){$('#pop').classList.remove('open')});

  var tk=$('#track'),tt=false;tk.addEventListener('scroll',function(){if(tt)return;tt=true;requestAnimationFrame(function(){tt=false;onTrack()})},{passive:true});
  $('#prev').addEventListener('click',function(){snapTo(PI-1)});$('#next').addEventListener('click',function(){snapTo(PI+1)});
  var dn=false,sx=0,ss=0,moved=false;
  tk.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;dn=true;moved=false;sx=e.clientX;ss=tk.scrollLeft;tk.classList.add('drag')});
  addEventListener('pointermove',function(e){if(!dn)return;if(Math.abs(e.clientX-sx)>4)moved=true;tk.scrollLeft=ss-(e.clientX-sx)});
  addEventListener('pointerup',function(){if(!dn)return;dn=false;tk.classList.remove('drag');onTrack();snapTo(PI)});
  tk.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false}},true);

  $('#avs').addEventListener('click',function(e){var b=e.target.closest('.av');if(b)showRev(+b.dataset.ri)});
  $('#qMore').addEventListener('click',function(){var q=$('#quote'),o=q.classList.toggle('open');$('#qMoreT').textContent=o?tr('r_less'):tr('r_more');if(o)pauseRev();else showRev(RI,true)});
  var tx0=0;$('#quote').addEventListener('touchstart',function(e){tx0=e.touches[0].clientX},{passive:true});
  $('#quote').addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-tx0;if(Math.abs(dx)>50)showRev((RI+(dx<0?1:REV.length-1))%REV.length)});
  $('#leave').addEventListener('click',function(){openSheet('review')});
  $('#rs').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;RS=+b.dataset.s;$$('#rs button').forEach(function(x,i){x.classList.toggle('on',i<RS)});updateReviewLink()});
  ['#rn','#rr','#rt'].forEach(function(id){$(id).addEventListener('input',function(){$('#rerr').textContent='';updateReviewLink()})});
  $('#rsend').addEventListener('click',function(e){if(!$('#rn').value.trim()||!$('#rt').value.trim()){e.preventDefault();$('#rerr').textContent=tr('rf_err')}});

  $$('.chs').forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('.ch');if(!b)return;$$('.ch',g).forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});updateContactLinks()})});
  ['#cn','#cm'].forEach(function(id){$(id).addEventListener('input',function(){$('#cerr').textContent='';updateContactLinks()})});
  $('#cf').addEventListener('submit',function(e){e.preventDefault()});
  $('#csend').addEventListener('click',function(e){if(!$('#cn').value.trim()||!$('#cm').value.trim()){e.preventDefault();$('#cerr').textContent=tr('c_err');($('#cn').value.trim()?$('#cm'):$('#cn')).focus();return}setTimeout(function(){location.href=$('#cmail').href},700)});
  $$('[data-type]').forEach(function(a){a.addEventListener('click',function(){var b=$$('#cty .ch')[+a.dataset.type];if(b)b.click()})});
  $('#cpMail').addEventListener('click',function(){var b=this;var done=function(){b.textContent=tr('copied');setTimeout(function(){b.textContent=tr('copy')},1600)};try{navigator.clipboard.writeText(CONFIG.email).then(done).catch(function(){selectText($('#mailTxt'))})}catch(err){selectText($('#mailTxt'))}});

  $('#more').addEventListener('click',function(){openSheet('more')});
  $('#bd').addEventListener('click',closeSheets);
  $$('[data-close]').forEach(function(b){b.addEventListener('click',closeSheets)});
  $$('.menu a').forEach(function(a){a.addEventListener('click',closeSheets)});
  addEventListener('keydown',function(e){if(e.key==='Escape'){closeSheets();$('#pop').classList.remove('open')}});

  if(FINE&&!RM){
    $$('.mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12)+'px,'+((e.clientY-r.top-r.height/2)*.16)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
  }
  addEventListener('scroll',onScroll,{passive:true});
  var rz;addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){updateDevice();placeInd();PI=-1;onTrack();onScroll()},150)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(placeInd);
  var gi=$('#giant');if(gi&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){gi.classList.remove('go');void gi.offsetWidth;gi.classList.add('go')}})},{threshold:.6}).observe(gi)}
  intro();
})();
/* défilement fluide avec Lenis (désactivé si l'appareil demande moins d'animations) */
(function(){
  if(!window.Lenis||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  try{
    var lenis=new Lenis({lerp:.09,autoRaf:true,prevent:function(n){return n.nodeType===1&&(n.classList.contains('sheet')||n.classList.contains('track')||n.id==='pop')}});
    window.LENIS=lenis;
    document.addEventListener('click',function(e){
      var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;
      var id=a.getAttribute('href');if(id.length<2)return;var t=document.getElementById(id.slice(1));if(!t)return;
      e.preventDefault();
      lenis.scrollTo(id==='#top'?0:t,{offset:-(parseFloat(getComputedStyle(t).scrollMarginTop)||0),duration:1.2});
      if(history.replaceState)history.replaceState(null,'',id);
    });
  }catch(err){}
})();
function selectText(el){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r)}
