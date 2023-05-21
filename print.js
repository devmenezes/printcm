const header = document.querySelector("#page-header");
let img = document.createElement("img")
let btn = document.createElement("button");
let page = document.createElement("page");
header.style.position = 'relative';

img.src = "https://i.imgur.com/fJY6SDB.png";
img.style.width = '50px';
img.style.height = '50px';

btn.style.backgroundColor = '#9763f6';

btn.style.position = 'absolute';
btn.style.display = 'flex';
btn.style.alignItems = 'center';
btn.style.justifyContent = 'center';
btn.style.top = '1px';
btn.style.right = '1px';
btn.style.width = '60px';
btn.style.height = '60px';
btn.style.border = '4px solid #9763f6';
btn.style.borderRadius = '50%';
btn.style.color = 'white';

btn.appendChild(img);

const print = function(){
	const radios = document.querySelectorAll('input');
	radios.forEach(r=>r.remove());

	const icones = document.querySelectorAll('i.icon');
	icones.forEach(i=>i.remove());

	const sr = document.querySelectorAll('.sr-only');
	sr.forEach(i=>i.remove());
	
	const feedback = document.querySelectorAll('.content .outcome');
	feedback.forEach(f=>f.remove());

	const info = document.querySelectorAll('.info');
	info.forEach(f=>f.remove());

	const submitbtns = document.querySelectorAll('.submitbtns a');
	submitbtns.forEach(a=>a.remove());


	const divs = document.querySelectorAll('div');
	divs.forEach(d=>d.style.display = 'none');

	const navs = document.querySelectorAll('nav');
	navs.forEach(n=>n.style.display = 'none');

	const main = document.querySelector('#region-main-box');
	main.style.display = 'block';
	document.querySelector('#page-wrapper').style.display = 'block';
	document.querySelector('#page').style.display = 'block';
	document.querySelector('#page').className = '';
	document.body.className = '';
	document.querySelector('#page-content').style.display = 'block';

	const mainDivs = main.querySelectorAll('div');
	mainDivs.forEach(d=>d.style.display = 'block');

	document.querySelector('.othernav').remove();
	
	document.querySelector('.qn_buttons').remove(); 
	document.querySelector('.footer').remove();


	document.querySelector('.quizreviewsummary').remove();
	document.querySelector('.activity-navigation').remove(); 
	
	let material = '';
	
	formulation = document.querySelectorAll('.formulation');
	formulation.forEach(f=>{
		f.style.borderBottom = '2px dashed #888';
		f.style.paddingTop = '30px'
		f.style.paddingBottom = '100px'
	});


	btn.remove();

	window.print();
	location.reload();

}

btn.addEventListener('click',print);
header.appendChild(btn);