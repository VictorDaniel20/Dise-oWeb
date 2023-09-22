const candado = document.getElementById('lock');
const passw = document.getElementById('password');
const candadoIcon = document.getElementById('candado');

candado.addEventListener('click',()=>{
    if(passw.type === 'password'){
        console.log("si es password");
        passw.type = 'text';
        candadoIcon.classList.remove('gg-lock');
        candadoIcon.classList.add('gg-lock-unlock');
    }else{
        console.log("no es");
        password.type = 'password';
        candadoIcon.classList.remove('gg-lock-unlock');
        candadoIcon.classList.add('gg-lock');
    }
});