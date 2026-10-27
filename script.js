const ocean=`<svg viewBox="0 0 500 530" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of wind turbines over a calm sea"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#e2e6d9"/><stop offset="1" stop-color="#b9ceca"/></linearGradient><linearGradient id="sea" x2="0" y2="1"><stop stop-color="#6d999a"/><stop offset="1" stop-color="#183f49"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h500v530H0z"/><circle cx="390" cy="110" r="48" fill="#eac6a5"/><path d="M0 280Q130 265 255 282T500 275V530H0z" fill="url(#sea)"/><g fill="none" stroke="#d2e3d9" stroke-width="1" opacity=".35"><path d="M-10 330q100-15 200 0t320 0M-10 380q130-18 240 0t300 0M-10 435q90-14 210 0t320 0M-10 485q110-12 240 0t300 0"/></g><g stroke="#f7f5ee" stroke-linecap="round" fill="none"><path stroke-width="7" d="M185 320V170"/><path stroke-width="5" d="M185 170l-73-28m73 28 54-72m-54 72 19 95"/><path stroke-width="4" d="M345 294V202"/><path stroke-width="3" d="M345 202l-44-17m44 17 32-44m-32 44 12 56"/><path stroke-width="2" d="M430 286V229m0 0-27-11m27 11 21-28m-21 28 7 35"/></g><circle cx="185" cy="170" r="8" fill="#f7f5ee"/><circle cx="345" cy="202" r="5" fill="#f7f5ee"/><path d="M165 329h40l-10 10h-20z" fill="#d7a679"/><g stroke="#f7f5ee" opacity=".25"><path d="M183 350l-6 60m16-40 4 50"/></g></svg>`;
const posts=[ {
  id:'india-offshore-wind',cat:'Offshore wind',date:'26 October 2026',time:'4 min read',title:'From land to sea: why India’s offshore wind step matters to me',excerpt:'A proposed prototype off Tamil Nadu connects the engineering questions I work with to the possibilities along India’s coastline.',art:'ocean',paras:[`As an Indian researcher studying offshore wind in Norway, news of an offshore wind prototype planned near Thoothukudi, Tamil Nadu, feels close to home. It connects the engineering questions I work with to the possibilities along India’s coastline.`,`The proposed project involves a 6.25 MW turbine, with an estimated cost of around ₹77 crore. Its scope includes design, installation, testing and commissioning, followed by two years of operation and maintenance. The government procurement portal lists the latest tender as published on 30 September 2026, with a scheduled closing date of 29 October 2026. This article describes the tender-stage proposal as reported on 26 October; it does not establish a contract award or the start of construction.`,`A single turbine may seem modest when compared with large offshore wind farms. Yet the knowledge gained from an initial project can matter well beyond its capacity. It offers a chance to understand how equipment, vessels, ports, electrical systems and maintenance arrangements work together under local conditions.`,`Moving a wind turbine offshore brings a different set of questions. How will the structure respond to wind and waves? How can components be inspected? What happens when weather restricts access? How do we account for uncertainty over years of operation?`,`These questions connect to my PhD research at NTNU, where I study the long-term reliability of nylon mooring lines for floating offshore wind turbines. My work examines how loading, fatigue and assumed material deterioration influence the probability of failure. It has taught me to look beyond whether a design performs today and ask how confidently we can assess its performance over time.`,`The Thoothukudi announcement does not establish that the project will use a floating foundation or nylon moorings. What encourages me is the opportunity to build the wider engineering capability that offshore wind requires.`,`I hope deployment can be connected with research and education. Carefully planned measurements could help test numerical models, improve understanding of local conditions and train engineers. Collaboration between industry, universities and marine specialists could make early experience useful to future projects.`,`There are still questions about cost, infrastructure, environmental assessment and maintenance. A tender alone cannot answer them. The next stages will show how the proposed project develops and what lessons it produces.`,`For me, the encouraging part is seeing offshore wind become a more concrete engineering conversation at home. Studying abroad often means learning from places with different resources and experience, while wondering how that knowledge might become useful in India. I hope projects like this create more opportunities for that exchange.`],sources:true
}
, {
  id:'reliability-beyond-equations',cat:'PhD life',date:'26 October 2026',time:'2 min read',title:'What does reliability mean, beyond the equations?',excerpt:'A small introduction to the questions behind my PhD research.',art:'equation',paras:[`When I say I study the reliability of mooring lines, it can sound like a very narrow subject. But the underlying question is familiar: how confident can we be that something will keep doing its job?`,`For a floating wind turbine, mooring lines help hold the platform in position while allowing it to move. Those lines experience changing loads. Over time, repeated loading can accumulate fatigue damage. Material properties and the way we represent loading also carry uncertainty.`,`Reliability analysis gives us a way to express that uncertainty. Instead of assigning a single fixed value to every input, we can describe selected quantities statistically and examine the conditions under which a limit is exceeded.`,`The equations matter, but so do the assumptions behind them. A calculated probability is conditional on the model and its inputs. Agreement between calculation methods does not, by itself, prove that the model captures the real structure.`,`That is one of the things I want to explore through this journal: the connection between numerical answers, physical evidence and the questions we still need to ask.`]
}
, {
  id:'a-little-home-in-trondheim',cat:'Life in Norway',date:'26 October 2026',time:'2 min read',title:'Finding a little home in Trondheim',excerpt:'On Kerala roots, shorter days, and the comfort of ordinary moments.',art:'leaf',paras:[`As the days grow shorter in Norway, a cup of tea begins to feel like a small occasion. There is comfort in pausing, holding something warm and letting the day settle.`,`Living far from Kerala brings a different rhythm to familiar things. Food, language and conversations with people at home become ways of carrying a place with me, even when the distance is large.`,`Alongside the PhD and the research questions, there is this ordinary life: learning, adapting and noticing what helps a new place feel familiar.`,`I wanted this journal to have space for those moments too. Not every entry needs a result or a conclusion. Sometimes it is enough to record a season, a thought, or the simple comfort of tea on an autumn day.`]
}
];
document.getElementById('heroart').innerHTML=ocean+'<span class="artnote">Where curiosity meets the sea.</span>';
function visual(p) {
  return p.art==='ocean'?ocean:`<span class="tinyart" aria-hidden="true">${p.art==='leaf'?'❧':'β'}</span>`
}
let filter='All';
const box=document.getElementById('posts');
function render() {
  let q=document.getElementById('search').value.toLowerCase();
  let list=posts.filter(p=>(filter==='All'||p.cat===filter)&&(p.title+' '+p.excerpt+' '+p.cat).toLowerCase().includes(q));
  if(!list.length) {
    box.innerHTML='<p class="empty">No stories found. Try another search or category.</p>';
    return
  }
  box.innerHTML=list.map((p,i)=>`${i===1?'<div class="smallgrid">':''}<article class="entry ${i===0?'featured':''}"><a class="visual" style="background:${p.art==='leaf'?'#b48364':p.art==='equation'?'#71908b':'#c6d6d5'}" href="#post/${p.id}" aria-label="Read ${p.title}">${visual(p)}</a><div><span class="label">${p.cat}</span><h3><a href="#post/${p.id}">${p.title}</a></h3><p>${p.excerpt}</p><div class="meta">${p.date} &nbsp;·&nbsp; ${p.time}</div><a class="textlink" href="#post/${p.id}">Read the story <span>↗</span></a></div></article>${i===list.length-1&&i>=1?'</div>':''}`).join('')
}
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=> {
  filter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=> {
    x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))
  }
  );render()
}
);
document.getElementById('search').oninput=render;
render();
function route() {
  const hash=location.hash;
  if(hash.startsWith('#post/')) {
    let p=posts.find(p=>p.id===hash.slice(6));
    if(!p) {
      location.hash='journal';
      return
    }
    document.getElementById('homeview').classList.add('hidden');
    let v=document.getElementById('articleview');
    v.classList.remove('hidden');
    v.innerHTML=`<article class="article"><a class="back" href="#journal">← Back to the journal</a><div class="label" style="margin-top:32px">${p.cat}</div><h1>${p.title}</h1><p class="dek">${p.excerpt}</p><div class="authorline">By Krishnaja Balachandran · ${p.date} · ${p.time}</div>${p.art==='ocean'?'<div class="visual articleart">'+ocean+'</div>':''}<div class="body">${p.paras.map(t=>'<p>'+t+'</p>').join('')}</div>${p.sources?'<div class="sources"><strong>Sources & reading</strong><p><a target="_blank" rel="noopener noreferrer" href="https://www.business-standard.com/industry/news/india-plans-first-offshore-wind-farm-prototype-off-tamil-nadu-coast-report-126100500632_1.html">Business Standard · Project reporting, 5 October 2026 ↗</a></p><p><a target="_blank" rel="noopener noreferrer" href="https://etenders.gov.in/eprocure/app">Government eProcurement portal ↗</a><br>Tender ID: 2026_IPRCL_292836_1 · Reference: IPRCL/VoCPA/Wind/2026/05. Dates and status may change; consult the official tender record.</p><p>Illustration is conceptual and does not depict the project’s confirmed foundation design.</p></div>':''}<div class="sources"><a href="#journal">← More stories from the journal</a></div></article>`;
    document.title=p.title+' — Krishnaja Writes';
    window.scrollTo(0,0)
  }
  else {
    document.getElementById('homeview').classList.remove('hidden');
    document.getElementById('articleview').classList.add('hidden');
    document.title='Krishnaja Writes — Research, offshore wind & life beyond home';
    requestAnimationFrame(()=> {
      const el=document.getElementById(hash.slice(1)||'home');if(el)el.scrollIntoView()
    }
    )
  }
}
window.addEventListener('hashchange',route);
route();
