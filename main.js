const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    

    yesBtn.addEventListener('click', () =>{
        question.innerHTML = 'YEYY WALA NANG BAWIAN YAN AHH TULOY NA NATIN YUNG TAKOYAKI NA AYA KO LAST YEARR HEHE, DONT WORRY LIBRE KO =)';
    });

    
const btnheight = 50;
const btnwidth = 150;
const maxWidth = window.innerWidth - btnwidth;
const maxHeight = window.innerHeight - btnheight;


window.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => alert('You Clicked Me'));

    btn.addEventListener('mouseover', ()=> {
        btn.style.left = Math.floor(Math.random() * (maxWidth+1)) + 'px';
        btn.style.top = Math.floor(Math.random() * (maxHeight+1)) + 'px';
    });
});