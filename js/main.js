window.addEventListener("DOMContentLoaded", e => {
    
    let btntop = document.querySelector('#topButton')
    window.onscroll=()=> {
        if (
            document.body.scroll > 50 || 
            document.documentElement.scrollTop > 50
        ) {
            btntop.style.display="block"
        } else {
             btntop.style.display = "none"
        }
    }
})