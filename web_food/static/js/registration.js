let enterTab = document.querySelector('.enter_tab');
let regTab = document.querySelector('.resist_tab');

let enterPage = document.querySelector('.page_enter');
let registrPage = document.querySelector('.page_registration');


enterTab.addEventListener('click',function(){
    this.classList.add('active');
    regTab.classList.remove("active");

    enterPage.classList.add('can_see')
    registrPage.classList.remove('can_see')
})

regTab.addEventListener('click',function(){
    this.classList.add('active');
    enterTab.classList.remove("active");

    enterPage.classList.remove('can_see');
    registrPage.classList.add('can_see');
})


