
window.addEventListener('keydown' , (e)=> {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    key.classList.add('active');
});

window.addEventListener('keyup' , (e)=> {
   
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    key.classList.remove('active');
})
