const yesBtn = document.getElementById("yes-btn")
const noBtn = document.getElementById("no-btn")
const gif = document.getElementById("cat-gif")
const tease = document.getElementById("tease")
const music = document.getElementById("music")
const musicBtn = document.getElementById("musicBtn")

let noCount = 0
let teaseCount = 0
let runaway = false

const gifs = [
"https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
"https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
"https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
"https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
"https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif"
]

const noTexts = [
"No",
"Are you sure?",
"Please?",
"Don't do this 😭",
"I'll cry...",
"Last chance 😤"
]

const teaseTexts = [
"try pressing no first 😏",
"curious what happens? click no 👀",
"hehe press no once 😈"
]

/* MUSIC */
music.volume = 0.3
document.addEventListener("click",()=>music.play(),{once:true})

musicBtn.onclick=()=>{
if(music.paused){music.play();musicBtn.textContent="🔊"}
else{music.pause();musicBtn.textContent="🔇"}
}

/* YES BUTTON */
yesBtn.onclick=()=>{
if(!runaway){
tease.textContent = teaseTexts[Math.min(teaseCount,teaseTexts.length-1)]
teaseCount++
return
}
location.href="yes.html"
}

/* NO BUTTON */
noBtn.onclick=()=>{
noCount++

noBtn.textContent=noTexts[Math.min(noCount,noTexts.length-1)]

yesBtn.style.transform=`scale(${1+noCount*0.15})`
noBtn.style.transform=`scale(${1-noCount*0.05})`

gif.src=gifs[Math.min(noCount,gifs.length-1)]

if(noCount>=4 && !runaway){
runaway=true
noBtn.onmouseover=move
noBtn.ontouchstart=move
}
}

/* RUNAWAY */
function move(){
const x=Math.random()*(window.innerWidth-100)
const y=Math.random()*(window.innerHeight-50)

noBtn.style.position="fixed"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"
}
