if (typeof window !== "undefined")
{

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toogle bar icon and navbar when navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.box-container, .portfolio-box, .contact form, .btn, .home-image',{ origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .social-media, .about-image', { origin: 'left'});
 ScrollReveal().reveal('.home-content h3, .about-content, .bx bx-up-arrow-alt, .footer-text', { origin: 'right'});

/*typed js*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','IT Enthusiast','Programmer'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true
});

 let theEnd = 0
    navbar  = document.getElementById('navbar')

window.addEventListener('scroll', function() {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
        navbar.style.top = '70px';
    }
    else
    {
        navbar.style.top = '0';
    }
    theEnd = scrollTop
})

}

