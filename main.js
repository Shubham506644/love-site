

/* floating hearts */
setInterval(()=>{
    const h=document.createElement("div");
    h.innerText=["❤️","💖","💕","💘"][Math.floor(Math.random()*4)];
    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.bottom="-10px";
    h.style.fontSize="20px";
    h.style.opacity=.8;
    h.style.transition="6s linear";
    document.body.appendChild(h);
    requestAnimationFrame(()=>h.style.bottom="110vh");
    setTimeout(()=>h.remove(),6000);
},450);

/* smooth page transition */
document.querySelectorAll("a").forEach(link=>{
    const url=link.getAttribute("href");
    if(!url||url.startsWith("#"))return;

    link.onclick=e=>{
        e.preventDefault();
        document.body.classList.add("page-fade-out");
        setTimeout(()=>location.href=url,400);
    };
});

/* typing animation (letter page) */
const typed=document.getElementById("typedText");
if(typed){
    const text=typed.dataset.text.trim();
    typed.textContent="";
    let i=0;
    (function type(){
        if(i<text.length){
            typed.textContent+=text[i++];
            setTimeout(type,35);
        }
    })();
}

