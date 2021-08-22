let harmburger = document.querySelector('.nav-toggle');
let body = document.querySelector('body');
harmburger.addEventListener('click',function(){
   let navbarNav = document.querySelector('.navbar-nav');
  
    navbarNav.classList.toggle('show')
    let imgSrc = this.querySelector('img').src;
    body.classList.toggle('toggle')
    console.log(imgSrc)
    
    // if(imgSrc.includes('harmburger')){
    //     console.log('includes harm')
    //     imgSrc = '/assets/image/logo/close-nav.svg'
    // }else{
    //     imgSrc = '/assets/image/logo/harmburger.svg'
    // }
})