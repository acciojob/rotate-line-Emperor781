//your JS code here. If required.
let line=document.querySelector('#line');
let x=2
let set=setInterval(()=>{
	line.style.transform=`rotate(${x}deg)`
	x+=2;
},20)