let hr=document.getElementById("hourhand");
let min=document.getElementById("minutehand");
let sec=document.getElementById("secondhand");
function displayTime()
{
    let date= new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hrotate= (hh*30)+(mm*0.5);
    let mrotate=6*mm;
    let srotate=6*ss;
    hr.style.transform=`rotate(${hrotate}deg)`;
    min.style.transform=`rotate(${mrotate}deg)`;
    sec.style.transform=`rotate(${srotate}deg)`;
}
setInterval(displayTime,1000)