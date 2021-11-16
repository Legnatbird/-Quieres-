no.addEventListener("mousemove",()=>{
  const x = Math.round(Math.random()*80);
  const y = Math.round(Math.random()*80);
  no.style.left = x+"%";
  no.style.top = y+"%";
  no.style.setProperty("transform",`translate(-${x}%,-${y}%)`);
});