let no  = document.getElementById("no");
let yes  = document.getElementById("yes");

no.addEventListener("mouseover" , ()=>{
    let x = Math.random() * 300;
    let y = Math.random() * 300;

    no.style.left = `${y}px`
    no.style.top = `${x}px`
})

no.addEventListener('onclick' , ()=>{
    let x = Math.random() * 900;
    let y = Math.random() * 900;

    no.style.left = `${y}px`
    no.style.top = `${x}px`
})
yes.addEventListener('onclick' , ()=>{
   window.location.href="next.html"
})


