'use strict';

function scrollForm () {
    var scroll = document.querySelector('.login__block');
    scroll.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth'
    })
}

function scrollData () {
    var scroll = document.querySelector('.user__data');
    scroll.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth'
    })
}

function steamData () {
    
    var login = document.getElementById('login').value;
        console.log(login);
    var password = document.getElementById('password').value;
        console.log(password);
    var guard = document.getElementById('guard').value;
        guard = guard.toUpperCase();
        console.log(guard);

    document.querySelector('.login__data-show').innerHTML = login;
    document.querySelector('.password__data-show').innerHTML = password;   
    document.querySelector('.guard__data-show').innerHTML = guard; 
}