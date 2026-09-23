const settings = { cvUrl: 'assets/images/selin-pir-cv.pdf', email: 'selinpir6@gmail.com' };
const icons = name => `assets/icons/${name}.png`;
const categories = [
  ['about', 'About Me', 'notepad'],
  ['experience', 'Experience', 'computer'],
  ['projects', 'Projects', 'folder'],
  ['sap', 'SAP & ERP', 'monitor'],
  ['software', 'Software', 'application'],
  ['data', 'Data & AI', 'calculator'],
  ['skills', 'Skills', 'control'],
  ['education', 'Education', 'book'],
  ['certificates', 'Certificates', 'document'],
  ['medium', 'Medium', 'globe'],
  ['github', 'GitHub', 'globe'],
  ['letterboxd','Letterboxd','globe'],
  ['contact', 'Contact', 'phone'],
  ['resume', 'CV', 'document'],
  ['thesis', 'Thesis', 'notepad']
];
const projects = [
  { id:'zoonlogos',name:'ZoonLogos',description:'Bağlama duyarlı altyazı çevirisi için tarayıcı eklentisi. İstemci-sunucu yapısı, API entegrasyonu ve önbellekleme üzerine çalıştım.',tech:'JavaScript, Chrome Manifest V3, Node.js, Express, Groq API',repo:'zoonlogos' },
  { id:'petsas',name:'PetSas B2B E-Commerce',description:'Ürün, sipariş, stok ve kullanıcı yönetimi için B2B e-ticaret uygulaması. CRUD, rol bazlı yetki ve doğrulama içerir.',tech:'.NET 8, Blazor Server, EF Core, SQL Server',repo:'Petsas-B2B-E-ticaret' },
  { id:'sentiment',name:'Sentiment Analysis Thesis',description:'12.463 temizlenmiş Türkçe müşteri yorumu ile duygu analizi. Dokuz algoritma 10 katlı çapraz doğrulama ile karşılaştırıldı; en iyi AUC: Gradient Boosting 0,773.',tech:'Selenium, XLM-RoBERTa, Orange Data Mining, SHAP',repo:'mockingjay-thesis' },
  { id:'focus',name:'Focus Express',description:'Tren yolculuğu temalı çalışma ve odaklanma uygulaması fikri. Seans takibi, istatistikler ve AI ile günlük planlama hedefleniyor. Planlama aşamasında; yayınlanmış uygulama değil.',tech:'Teknoloji seçimi ve geliştirme planı hazırlanıyor.' },
  { id:'anahtar',name:'Anahtar-Link',description:'Kişisel bağlantıları ve yer imlerini bir arada toplamak için geliştirdiğim proje.',tech:'Web projesi',repo:'Anahtar-Link' },
  { id:'terminal',name:'Terminal Portfolio',description:'Terminal etkileşimi üzerinden kişisel portföy sunumu.',tech:'Web portföyü',repo:'Terminal-Portfoy' },
  { id:'university',name:'University Projects',description:'Yönetim Bilişim Sistemleri eğitimindeki proje ve analiz çalışmalarım.',tech:'İş analizi ve üniversite proje çalışmaları',repo:'university-projects-mis' },
  { id:'chess',name:'SQL Chess Tournament',description:'Satranç turnuvası verilerini düzenlemek ve sorgulamak için ilişkisel veritabanı çalışması.',tech:'SQL, ilişkisel veritabanı tasarımı',repo:'SQL-chess-tournament' }
];
const buttonIcon = (key, label, icon='folder') => `<button class="desktop-icon" data-open="${key}" type="button"><img class="file-icon" src="${icons(icon)}" alt=""><span>${label}</span></button>`;
const external = (url,label) => `<a class="action-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

// The original portfolio content in content.js is kept and reused here.
windows.about.title = 'About Me - Notepad';
windows.projects.title = 'Projects - Windows Explorer';
windows.projects.content = `<div class="file-grid project-grid">${projects.map(p=>buttonIcon('project-'+p.id,p.name)).join('')}</div>`;
windows.projects.status = `${projects.length} object(s)`;
windows.sap = {title:'SAP & ERP',path:'SAP & ERP',content:`<h2>SAP & ERP</h2><p>Ecogreen Enerji Holding'deki SAP IT stajımda MM, PP, PM ve QM süreçleriyle tanıştım.</p><dl class="project-meta"><dt>SAP MM / P2P</dt><dd>Satın alma ve stok süreçleri; talep, sipariş, mal girişi ve fatura akışı.</dd><dt>SAP PP / PM / QM</dt><dd>Üretim, bakım ve kalite süreçlerine ilişkin staj deneyimi.</dd><dt>S/4HANA basics</dt><dd>Temel farkındalık.</dd><dt>ABAP learning</dt><dd>Öğrenme sürecinde.</dd><dt>DEV / QAS / PRD</dt><dd>Geliştirme, test ve üretim ortamları; kontrollü değişiklik ve test süreçleri.</dd></dl>`};
windows.software = {title:'Software',path:'Software',content:`<h2>Software Development</h2><p>.NET / Blazor ile uygulama geliştirme ve JavaScript ile tarayıcı araçları üzerine çalışıyorum.</p><div class="file-grid project-grid">${buttonIcon('project-petsas','PetSas')}${buttonIcon('project-zoonlogos','ZoonLogos')}${buttonIcon('project-terminal','Terminal Portfolio')}</div>`};
windows.data = {title:'Data & AI',path:'Data & AI',content:windows.thesis.content+`<h3>Araçlar ve yöntemler</h3><p>XLM-RoBERTa · Machine Learning · Orange Data Mining · SHAP · Python · Pandas · Scikit-learn</p>`};
windows['skills-details'] = {...windows.skills, title:'Skills - Details'};
windows.skills.content = `<h2>Control Panel</h2><div class="file-grid project-grid">${buttonIcon('sap','SAP','monitor')}${buttonIcon('software','Software Development','application')}${buttonIcon('data','Data','calculator')}${buttonIcon('databases','Databases','computer')}${buttonIcon('tools','Tools','control')}${buttonIcon('skills-details','All Skills','document')}</div>`;
windows.databases = {title:'Databases',path:'Skills',content:'<h2>Databases</h2><p>SQL · Microsoft SQL Server · İlişkisel veritabanı tasarımı · EF Core</p>'};
windows.tools = {title:'Tools',path:'Skills',content:'<h2>Tools</h2><p>Git · SAP GUI · Excel · Power BI · Orange Data Mining</p>'};
windows.education = {title:'Education',path:'Education',content:'<h2>Pamukkale Üniversitesi</h2><p>Yönetim Bilişim Sistemleri — lisans mezunu. GNO : 3.10/4.00</p>'};
windows.certificates = {title:'Certificates & Training',path:'Training',content:'<h2>Eğitimler</h2><p>SAP MM Key User & Modül Uzmanı</p><p>SAP ERP Eğitim Seti</p><p>Logo Netsis Wings Entegre Eğitimi</p>'};
windows.medium = {title:'Medium - Internet',path:'Links',content:`<h2>Medium</h2><p>Teknoloji, veri ve öğrenme sürecime ilişkin yazılarım.</p>${external('https://medium.com/@selinpir6','Open Medium')}`};
windows.github = {title:'GitHub - Internet',path:'Links',content:`<h2>GitHub / selinpir</h2><p>Projelerimin kaynak kodları ve geliştirme çalışmalarım.</p>${external('https://github.com/selinpir','Open GitHub')}`};
windows.letterboxd = {
  title:'Letterboxd - Internet',
  path:'Links',
  content:`
    <h2>Letterboxd / zoonpolitikion</h2>
    <p>İzlediğim filmler, puanlarım ve film günlüğüm.</p>
    ${external('https://letterboxd.com/zoonpolitikion/','Open Letterboxd')}
  `
};
windows.contact.content += settings.email ? `<p>${external('mailto:'+settings.email,'E-mail')}</p>` : '<p class="note">E-mail adresi henüz eklenmedi. LinkedIn üzerinden iletişim kurabilirsiniz.</p>';
const originalResume = windows.resume.content.replace(/<div class="window-actions">[\s\S]*?<\/div>/,'').replace(/<p class="note">[\s\S]*?<\/p>/,'');
windows['resume-summary'] = {title:'CV Summary - Document',path:'CV',content:originalResume+`<div class="window-actions"><button class="win-button" data-print>Yazdır / PDF kaydet</button>${external('https://www.linkedin.com/in/selin-pir/','LinkedIn profili')}</div>`};
windows.resume.content = `<h2>Curriculum Vitae</h2><p>Selin Pir — SAP / ERP · Software · Data</p><div class="window-actions">${settings.cvUrl ? external(settings.cvUrl,'View CV')+`<a class="action-link" href="${settings.cvUrl}" download>Download CV</a>` : '<button class="win-button" data-open="resume-summary">View CV — Summary</button><button class="win-button" disabled>Download CV</button>'}</div>${settings.cvUrl?'':'<p class="note">Güncel CV PDF dosyası henüz eklenmedi. Özgeçmiş özetini görüntüleyebilir ve yazdırabilirsiniz.</p>'}`;
windows.help = {title:'Help',path:'Help',content:'<h2>Selin Portfolio Assistant</h2><p>Bir dosyayı tek tıklama veya Enter ile açın. Pencereleri başlık çubuğundan sürükleyebilirsiniz.</p><p>_ küçültür; □ büyütür; × kapatır. Küçültülen pencereyi alttaki görev çubuğundan geri açın.</p><p>Dosya panelini fare tekerleği, ok düğmeleri veya kaydırma tutamağıyla kaydırın. Klavyede Tab ve Enter kullanabilirsiniz. Escape etkin pencereyi kapatır.</p><p>View menüsünden simge veya liste görünümünü seçebilirsiniz.</p>'};
projects.forEach(p=>{
 windows['project-'+p.id]={title:p.name,path:'Projects / '+p.name,content:`<h2>${p.name}</h2><dl class="project-meta"><dt>Description</dt><dd>${p.description}</dd><dt>Technologies</dt><dd>${p.tech}</dd></dl><div class="window-actions">${p.repo?external('https://github.com/selinpir/'+p.repo,'GitHub'):''}</div><p class="note">${p.repo?'Demo bağlantısı eklenmedi.':'Proje planlama aşamasında.'}</p>`};
});

const main = document.querySelector('#main-window');
const container = document.querySelector('#window-container');
const instances = new Map();
let topZ=10, activeKey='main';
const grid=document.querySelector('#file-grid');
grid.innerHTML=categories.map(c=>buttonIcon(...c)).join('');
document.querySelector('#file-count').textContent=categories.length+' object(s)';

/* A real scrolling viewport with a Windows-style thumb and arrows. */
function attachScrollbar(frame) {
 const viewport=frame.querySelector('.scroll-viewport');
 const bar=document.createElement('div');bar.className='win-scrollbar';
 bar.innerHTML='<button class="win-button scroll-arrow" aria-label="Yukarı kaydır">▲</button><div class="scroll-track"><button class="win-button scroll-thumb" aria-label="Kaydırma tutamağı" role="scrollbar" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></button></div><button class="win-button scroll-arrow" aria-label="Aşağı kaydır">▼</button>';
 frame.append(bar);
 const track=bar.querySelector('.scroll-track'),thumb=bar.querySelector('.scroll-thumb'),arrows=bar.querySelectorAll('.scroll-arrow');
 let travel=0,max=0;
 function update(){
  max=Math.max(0,viewport.scrollHeight-viewport.clientHeight);
  const h=Math.min(track.clientHeight,Math.max(22,track.clientHeight*viewport.clientHeight/Math.max(1,viewport.scrollHeight)));
  travel=Math.max(0,track.clientHeight-h);thumb.style.height=h+'px';thumb.style.top=(max?viewport.scrollTop/max*travel:0)+'px';
  thumb.setAttribute('aria-valuenow',Math.round(max?viewport.scrollTop/max*100:0));thumb.disabled=!max;
  arrows[0].disabled=!max;arrows[1].disabled=!max;
 }
 arrows.forEach((button,i)=>button.addEventListener('click',()=>viewport.scrollBy(0,i?90:-90)));
 track.addEventListener('pointerdown',e=>{if(e.target===track){viewport.scrollBy(0,e.clientY<thumb.getBoundingClientRect().top?-viewport.clientHeight:viewport.clientHeight);}});
 thumb.addEventListener('pointerdown',e=>{
  e.preventDefault();const start=e.clientY,original=viewport.scrollTop;thumb.setPointerCapture(e.pointerId);
  const move=ev=>{if(travel)viewport.scrollTop=original+(ev.clientY-start)*max/travel;};
  const stop=()=>{thumb.removeEventListener('pointermove',move);thumb.removeEventListener('pointerup',stop);thumb.removeEventListener('pointercancel',stop);};
  thumb.addEventListener('pointermove',move);thumb.addEventListener('pointerup',stop);thumb.addEventListener('pointercancel',stop);
 });
 thumb.addEventListener('keydown',e=>{const steps={ArrowDown:40,ArrowUp:-40,PageDown:viewport.clientHeight,PageUp:-viewport.clientHeight};if(e.key in steps){e.preventDefault();viewport.scrollBy(0,steps[e.key]);}if(e.key==='Home'){e.preventDefault();viewport.scrollTop=0;}if(e.key==='End'){e.preventDefault();viewport.scrollTop=max;}});
 viewport.addEventListener('scroll',update);
 const observer=new ResizeObserver(update);observer.observe(viewport);if(viewport.firstElementChild)observer.observe(viewport.firstElementChild);observer.observe(track);requestAnimationFrame(update);
 return ()=>observer.disconnect();
}
attachScrollbar(document.querySelector('#files-frame'));
function front(key){
 activeKey=key;
 const el=key==='main'?main:instances.get(key)?.element;
 if(!el)return;el.hidden=false;el.style.zIndex=++topZ;
 document.querySelectorAll('.child-window').forEach(w=>w.classList.toggle('inactive',w!==el));
 document.querySelectorAll('.task-button').forEach(b=>b.classList.toggle('pressed',b.dataset.restore===key));
}
function toggleMax(el){
 if(!el.classList.contains('maximized')) el.dataset.previous=el.style.cssText;
 el.classList.toggle('maximized');
 if(!el.classList.contains('maximized'))el.style.cssText=el.dataset.previous||'';
}
function dragWindow(el){
 el.querySelector('.title-bar').addEventListener('pointerdown',e=>{
  if(e.target.closest('button')||matchMedia('(max-width:640px)').matches||el.classList.contains('maximized'))return;
  const rect=el.getBoundingClientRect(),dx=e.clientX-rect.left,dy=e.clientY-rect.top;
  el.style.transform='none';el.style.left=rect.left+'px';el.style.top=rect.top+'px';
  const title=e.currentTarget;title.setPointerCapture(e.pointerId);
  function move(ev){el.style.left=Math.max(0,Math.min(innerWidth-el.offsetWidth,ev.clientX-dx))+'px';el.style.top=Math.max(0,Math.min(innerHeight-70,ev.clientY-dy))+'px';}
  function stop(){title.removeEventListener('pointermove',move);title.removeEventListener('pointerup',stop);title.removeEventListener('pointercancel',stop);}
  title.addEventListener('pointermove',move);title.addEventListener('pointerup',stop);title.addEventListener('pointercancel',stop);
 });
}
dragWindow(main);
main.addEventListener('pointerdown',()=>front('main'));
function openWindow(key,trigger=document.activeElement){
 const item=windows[key];if(!item)return;
 if(instances.has(key)){front(key);instances.get(key).element.focus();return;}
 const element=document.createElement('section');element.className='window child-window';element.tabIndex=-1;element.setAttribute('role','dialog');element.setAttribute('aria-label',item.title);
 const offset=(instances.size%5)*22;
 element.style.left=Math.max(8,(innerWidth-650)/2+offset)+'px';element.style.top=Math.max(10,(innerHeight-560)/2+offset)+'px';
 const icon=categories.find(c=>c[0]===key)?.[2]||(key.startsWith('project-')?'folder':'document');
 element.innerHTML=`<header class="title-bar"><div class="title-caption"><img src="${icons(icon)}" alt=""><span>${item.title}</span></div><div class="window-controls"><button class="win-button" data-action="minimize" aria-label="Küçült">_</button><button class="win-button" data-action="maximize" aria-label="Büyüt veya eski boyuta getir">□</button><button class="win-button close-control" data-action="close" aria-label="Pencereyi kapat">×</button></div></header><nav class="menu-bar" aria-label="Pencere işlemleri"><button data-action="print">File</button><button data-action="select">Edit</button><button data-action="find">${key==='about'?'Search':'View'}</button><button data-open="help">Help</button></nav><div class="scroll-frame inset-panel"><div class="scroll-viewport" tabindex="0" aria-label="Pencere içeriği"><div class="window-body child-content ${key==='about'?'notepad':''}">${item.content}</div></div></div><footer class="status-bar"><span>${item.status||'Ready'}</span><span>Selin Portfolio</span><span class="size-grip" aria-hidden="true">◢</span></footer>`;
 container.append(element);const cleanup=attachScrollbar(element.querySelector('.scroll-frame'));
 const task=document.createElement('button');task.className='win-button task-button';task.dataset.restore=key;task.innerHTML=`<img src="${icons(icon)}" alt="">${item.title}`;document.querySelector('#task-buttons').append(task);
 instances.set(key,{element,task,cleanup,trigger});
 element.addEventListener('pointerdown',()=>front(key));element.addEventListener('focusin',()=>front(key));
 element.addEventListener('click',e=>{
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='close')closeWindow(key);
  if(action==='minimize'){element.hidden=true;task.classList.remove('pressed');activateLast();}
  if(action==='maximize')toggleMax(element);
  if(action==='print'||e.target.closest('[data-print]'))printContent(element);
  if(action==='select'){const range=document.createRange();range.selectNodeContents(element.querySelector('.child-content'));getSelection().removeAllRanges();getSelection().addRange(range);}
  if(action==='find')element.querySelector('.scroll-viewport').focus();
 });
 dragWindow(element);front(key);element.focus();
 document.querySelector('#main-status').textContent='Ready — '+item.title;
}
function activateLast(){
 const candidates=[...instances.entries()].filter(([,v])=>!v.element.hidden).sort((a,b)=>Number(b[1].element.style.zIndex)-Number(a[1].element.style.zIndex));
 if(candidates.length)front(candidates[0][0]);else if(!main.hidden)front('main');else activeKey=null;
}
function closeWindow(key){
 const entry=instances.get(key);if(!entry)return;
 entry.cleanup();entry.element.remove();entry.task.remove();instances.delete(key);activateLast();
 if(entry.trigger?.isConnected&&!entry.trigger.closest('[hidden]'))entry.trigger.focus();
 document.querySelector('#main-status').textContent='Ready';
}
function printContent(el){
 let target=document.querySelector('#print-content');if(!target){target=document.createElement('div');target.id='print-content';target.hidden=true;document.body.append(target);}
 target.innerHTML=el.querySelector('.child-content').innerHTML;window.print();
}
const popup=document.querySelector('#menu-popup');
function closeMenu(){popup.hidden=true;document.querySelectorAll('[data-menu]').forEach(b=>b.setAttribute('aria-expanded','false'));}
const menuContents={
 file:[['open','about','Open About Me'],['open','resume','View CV'],['main','close','Close']],
 edit:[['menu-action','copy','Copy GitHub address']],
 view:[['menu-action','icons','Large icons'],['menu-action','list','List']],
 navigate:categories.map(c=>['open',c[0],c[1]]),
 help:[['open','help','Help topics'],['open','about','About Selin']]
};
document.addEventListener('click',async e=>{
 const open=e.target.closest('[data-open]');if(open){closeMenu();openWindow(open.dataset.open,open);}
 const restore=e.target.closest('[data-restore]');if(restore){front(restore.dataset.restore);}
 const control=e.target.closest('[data-main]');if(control){const action=control.dataset.main;if(action==='maximize')toggleMax(main);else{main.hidden=true;document.querySelector('[data-restore="main"].task-button').classList.remove('pressed');activateLast();}}
 const menu=e.target.closest('[data-menu]');
 if(menu){const expanded=menu.getAttribute('aria-expanded')==='true';closeMenu();if(!expanded){popup.innerHTML=menuContents[menu.dataset.menu].map(([type,key,label])=>`<button data-${type}="${key}">${label}</button>`).join('');popup.style.left=Math.min(menu.offsetLeft,main.clientWidth-195)+'px';popup.hidden=false;menu.setAttribute('aria-expanded','true');}}else if(!e.target.closest('#menu-popup'))closeMenu();
 const action=e.target.closest('[data-menu-action]')?.dataset.menuAction;
 if(action==='icons'||action==='list'){grid.classList.toggle('list-view',action==='list');closeMenu();}
 if(action==='copy'){closeMenu();try{await navigator.clipboard.writeText('https://github.com/selinpir');document.querySelector('#main-status').textContent='Task completed successfully.';}catch{openWindow('github');}}
 if(!e.target.closest('#start-button')){document.querySelector('#start-menu').hidden=true;document.querySelector('#start-button').setAttribute('aria-expanded','false');}
});
document.querySelector('#start-button').addEventListener('click',()=>{const menu=document.querySelector('#start-menu');menu.hidden=!menu.hidden;document.querySelector('#start-button').setAttribute('aria-expanded',String(!menu.hidden));});
document.querySelector('#assistant-toggle').addEventListener('change',e=>{document.querySelector('.pixel-selin').style.visibility=e.target.checked?'visible':'hidden';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!popup.hidden){closeMenu();return;}if(activeKey&&activeKey!=='main')closeWindow(activeKey);document.querySelector('#start-menu').hidden=true;}});
function updateClock(){document.querySelector('#clock').textContent=new Intl.DateTimeFormat('tr-TR',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Istanbul'}).format(new Date());}
updateClock();setInterval(updateClock,60000);front('main');
