const $=id=>document.getElementById(id);
const lessons={
rating:["01 · STAR RATING","Fill them in <em>turn.</em>","Stars fill one after another, with a small stagger between each one.","Tap a star to see each one fill in sequence."],
otp:["02 · ONE-TIME CODE","Drop in, then <em>glow.</em>","A six-digit code is entered with a staggered focus glow and a clear verified state.","Type 482917 or click Replay to watch the six-digit sequence."],
accordion:["03 · ACCORDION","Grow, make <em>room.</em>","The content panel expands and the arrow rotates to show the open state.","Click each accordion heading to expand or collapse it."],
password:["04 · PASSWORD","Grade as you <em>type.</em>","Strength improves in four segments as the password gets longer and more varied.","Type a password to see its strength grade update."],
todo:["05 · TO-DO","Draw, strike, <em>sink.</em>","Checking a task draws the checkmark and strikes through the completed item.","Check a task to see the completion feedback."],
reactions:["06 · REACTIONS","Pop, grow, <em>fly.</em>","Reactions scale up on hover or tap, with a quick stagger between options.","Hover or tap an emoji to make it pop."]
};
let current="rating", timers=[];
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function setLesson(id){current=id;clearTimers();document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.demo===id));document.querySelectorAll('.scene').forEach(s=>s.classList.toggle('show',s.id===id));const d=lessons[id];$('number').textContent=d[0];$('heading').innerHTML=d[1];$('desc').textContent=d[2];$('hint').textContent=d[3];resetDemo()}
function resetDemo(){if(current==="rating"){$('stars').querySelectorAll('button').forEach(b=>{b.textContent='☆';b.classList.remove('filled')});$('ratingThanks').textContent='Tap a star to rate'}
if(current==="otp"){$('digits').querySelectorAll('input').forEach(i=>{i.value='';i.classList.remove('filled')});$('verified').classList.remove('visible')}
if(current==="password"){$('pass').value='';grade('')}
if(current==="todo")document.querySelectorAll('.task input').forEach(i=>i.checked=false)}
document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>setLesson(b.dataset.demo)));
function rate(n){const buttons=[...$('stars').querySelectorAll('button')];buttons.forEach((b,i)=>{b.classList.remove('filled');b.textContent='☆'});buttons.forEach((b,i)=>timers.push(setTimeout(()=>{if(i<n){b.classList.add('filled');b.textContent='★'}if(i===n-1)$('ratingThanks').textContent=n===5?'Perfect, thanks!':`${n} star${n>1?'s':''} — thanks!`},i*100+50)))}
$('stars').addEventListener('click',e=>{const b=e.target.closest('button');if(b)rate([...b.parentNode.children].indexOf(b)+1)});
const digits=[...$('digits').querySelectorAll('input')];
digits.forEach((input,i)=>{input.addEventListener('input',()=>{input.value=input.value.replace(/[^0-9]/g,'').slice(-1);input.classList.toggle('filled',!!input.value);if(input.value&&i<5)digits[i+1].focus();$('verified').classList.toggle('visible',digits.every(x=>x.value))});input.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!input.value&&i>0)digits[i-1].focus()})});
$('digits').addEventListener('click',()=>{if(!digits.some(i=>i.value))playOtp()});
document.querySelectorAll('.acc-trigger').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
function grade(value){const score=[value.length>=4,value.length>=8&&/[A-Z]/.test(value),value.length>=10&&/[0-9]/.test(value),value.length>=12&&/[^A-Za-z0-9]/.test(value)].filter(Boolean).length;document.querySelectorAll('.strength span').forEach((s,i)=>{s.style.background=i<score?['#ed5268','#f39a4a','#eac34d','#31bdf0'][score-1]:'#273851'});$('strengthText').textContent=['Too short','Weak','Fair','Good','Strong'][score];$('strengthText').style.color=['#8193ac','#ef5a6a','#f2a14d','#e8c44f','#37c5f4'][score];$('count').textContent=value.length+' chars'}
$('pass').addEventListener('input',e=>grade(e.target.value));
function playOtp(){clearTimers();const code='482917';digits.forEach(i=>{i.value='';i.classList.remove('filled')});$('verified').classList.remove('visible');digits.forEach((el,i)=>timers.push(setTimeout(()=>{el.value=code[i];el.classList.add('filled');if(i===5)$('verified').classList.add('visible')},i*70+150)))}
$('replay').addEventListener('click',()=>{resetDemo();if(current==="rating")rate(4);if(current==="otp")playOtp();if(current==="accordion")document.querySelectorAll('.acc').forEach((a,i)=>timers.push(setTimeout(()=>a.classList.toggle('open',i===0),i*120)));if(current==="todo"){const box=document.querySelector('.task input');timers.push(setTimeout(()=>box.checked=true,100))}if(current==="reactions"){const b=[...document.querySelectorAll('.bubble button')];b.forEach((x,i)=>timers.push(setTimeout(()=>{x.animate([{transform:'scale(1)'},{transform:'scale(1.6)'},{transform:'scale(1)'}],{duration:450})},i*70))) }});
setLesson("rating");