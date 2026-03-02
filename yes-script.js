setInterval(()=>{
const heart=document.createElement("div")
heart.textContent="💖"
heart.style.position="fixed"
heart.style.left=Math.random()*100+"vw"
heart.style.top="-20px"
heart.style.fontSize="30px"
document.body.appendChild(heart)

let y=0
const fall=setInterval(()=>{
y+=3
heart.style.top=y+"px"
if(y>window.innerHeight){
heart.remove()
clearInterval(fall)
}
},20)

},300)
