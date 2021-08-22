let harmburger = document.querySelector('.nav-toggle');
let body = document.querySelector('body');
harmburger.addEventListener('click',function(){
    let navbarNav = document.querySelector('.navbar-nav');
    let imgSrc = this.querySelector('img');
    body.classList.toggle('toggle')
    console.log(imgSrc.src)
    navbarNav.classList.toggle('show')
    
    if(imgSrc.src.includes('harmburger')){
        console.log('includes harm')
        imgSrc.setAttribute('src','/assets/image/logo/close-nav.svg')
    }else{
        imgSrc.setAttribute('src','/assets/image/logo/harmburger.svg')

    }
})