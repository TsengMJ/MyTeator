window.onload = function(){
    const navSlide = () => {
        const menuber = document.querySelector('.menuber');
        const nav = document.querySelector('.navber');
        const navlinks = document.querySelectorAll('.navber li');
        const menubtn = document.querySelectorAll('a[data-btn]');
    
        // toggle
        menuber.addEventListener('click', () =>{
        nav.classList.toggle('navber-active');
    
        // animation
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navlinkFade 0.2s ease forwards ${index / 7 + 1}s`;
                }
            })
        // menuber-animation
        menuber.classList.toggle('toggle');    
        })
        // menu_close
        menubtn.addEventListener('click',function(event){
            menu_close(nav);
        });
        menubtn.addEventListener('touchstart',function(event){
            menu_close(nav);
        });

        for(let val of menubtn)
        {
            val.addEventListener('click',function(event){
                
            })
        }
    }
    navSlide();
}