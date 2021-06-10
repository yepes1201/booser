document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector('#menu')
    var menuOpenBtn = document.querySelector('#open-menu')
    menuOpenBtn.addEventListener('click', function() {
        console.log('toggle')
        menu.classList.toggle('deactive')
    },false)
    var test = setInterval(function(){
        var winValidation = window.innerWidth > 750
        if(winValidation){
            menu.classList.add('deactive')
            console.log(true);
        }
    },1000)

    //Smooth Animation on document
    var anchorTags = document.querySelectorAll('a')
    anchorTags.forEach( aTag => {
        if(!aTag.getAttribute('href').includes('.html')){
            aTag.addEventListener('click', scrollAnim)
        }
    })
})

function scrollAnim(e){
    e.preventDefault();
    const href = this.getAttribute('href')
    document.querySelector(href).scrollIntoView({behavior: 'smooth'})   
}