/* Shared presentation, photographic assets and canonical prototype navigation. */
const canonicalPFS=r=>'/'+r.replace(/^work(?=\/|$)/,'work-with-us').replace(/^event\//,'events/').replace(/^space\//,'spaces/').replace(/^shop\/product\//,'products/').replace(/^building\/courses\//,'courses/');
function photoPFS(src,caption=''){return `<figure class="editorial-photo"><img src="assets/${src}.jpg" alt="${caption||t('PFS建造档案','PFS building archive')}" loading="lazy">${caption?`<figcaption>${caption}</figcaption>`:''}</figure>`}
function enhancePFS(){
 const raw=(location.hash.slice(2)||location.pathname.slice(1)).replace(/\/$/,'');
 const main=q('#main'),page=q('.page');
 document.body.dataset.page=raw.split('/')[0]||'home';
 if(page){const key=raw.split('/')[0];const primary=['visit','stay','building','shop','work','work-with-us'].includes(key)&&!raw.includes('/');
  if(primary){const img={visit:'hero-1',stay:'hero-2',building:'hero-5',shop:'cabinet',work:'hero-3','work-with-us':'hero-3'}[key];const old=q('.page-hero');if(old)old.remove();const lead=q('.page-lead')||q('.page-title');lead.insertAdjacentHTML('afterend',photoPFS(img,t('PFS现有影像资料','From the PFS image archive')));page.classList.add('editorial-page')}
  const course=raw.startsWith('courses/')||raw.startsWith('building/courses/');if(course){const image=raw.includes('openbike')?'bike':raw.includes('shipyard')?'boat':'hero-5';q('.page-title').insertAdjacentHTML('afterend',photoPFS(image,t('相关建造档案影像','Related building archive')))}
  if(key==='building'&&raw==='building'){main.insertAdjacentHTML('beforeend',`<section class="section course-overview"><div class="section-head"><h2>${t('课程库','COURSE LIBRARY')}</h2></div>${data66.courseGroups.map(g=>`<div class="course-row"><h3>${link('building/courses/'+g.id,local66(g.name)+' ↗')}</h3><div>${g.children.map(c=>link('building/courses/'+g.id+'/'+c.id,local66(c.name)+' ↗')).join('')}</div></div>`).join('')}</section>`)}
  if(key==='shop'&&raw==='shop'){const imgs=qa('.products .product img');imgs.forEach(i=>i.loading='lazy')}
 }
 const footer=q('#footer');footer.innerHTML=`<div class="footer-brand"><a class="original-logo" href="#/" aria-label="PFS"><img src="assets/kit-badger.jpg" alt=""></a><p>${t('派对朋友的飞船','Party Friend Ship')}<small>${t('分享更可持续的生活办法，共享知识，共享制造。','Sharing sustainable living practices, knowledge, and collaborative manufacturing.')}</small></p></div><div class="footer-columns"><div>${data66.navigation.map(([r,c,e])=>link(r,`${e}<small>${c}</small>`)).join('')}</div>${data66.footer.map(([r,c,e])=>`<div><h3>${link(r,`${e}<small>${c}</small>`)}</h3>${(footerItems66[r]||[]).filter(x=>x[0]!=='shop').map(([id,z,en])=>link(r+'/'+id,t(z,en))).join('')}</div>`).join('')}</div>`;
 qa('a[href^="#/"]').forEach(a=>{a.href=canonicalPFS(a.getAttribute('href').slice(2))+'?lang='+(zh?'zh':'en')});
 qa('.language a').forEach(a=>{const language=a.lang==='en'?'en':'zh';a.href=location.pathname+'?lang='+language+location.hash});
 const headerNav=qa('header nav a');headerNav.forEach((a,i)=>{const [,c,e]=data66.navigation[i];a.innerHTML=`${e}<small>${c}</small>`});
}
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;const url=new URL(a.href);if(url.origin!==location.origin||a.closest('.language')||url.hash||a.target)return;e.preventDefault();history.pushState({},'',url.pathname+url.search);route66()});
