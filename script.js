function start() {
  document.getElementById('unlock').style.display = 'none';
  document.getElementById('page').classList.remove('hidden');
  type();
}

/* TYPING */
const typing = document.querySelector('.typing');
const text = typing.dataset.text;
let i = 0;
function type() {
  if (i < text.length) {
    typing.textContent += text[i++];
    setTimeout(type, 95);
  }
}

/* REVEAL */
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('show'), i * 150);
      obs.unobserve(e.target);
    }
  });
},{threshold:.1});
reveals.forEach(r => obs.observe(r));

/* STARS */
const c = document.getElementById('space');
const ctx = c.getContext('2d');
let w,h,stars;

function resize(){
  w=c.width=innerWidth;
  h=c.height=innerHeight;
  stars=Array.from({length:150},()=>({
    x:Math.random()*w,
    y:Math.random()*h,
    r:Math.random()*1.4,
    s:Math.random()*.35+.1
  }));
}
addEventListener('resize',resize);
resize();

function draw(){
  ctx.clearRect(0,0,w,h);
  stars.forEach(s=>{
    ctx.globalAlpha=Math.random();
    ctx.fillStyle='#fff';
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
    s.y+=s.s;
    if(s.y>h) s.y=0;
  });
  requestAnimationFrame(draw);
}
draw();

/* WA */
function openWA(){
  location.href =
  "https://wa.me/6285704058851?text=Hai%20aku%20sudah%20baca%20semuanya";
                 }
