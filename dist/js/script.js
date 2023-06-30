// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik di luar 
window.addEventListener('click',function(e){
    if (e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
}
});

// dark mode

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
});

// pindah toggle

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }


// send email

const contactForm = document.getElementById("contact-form");
const loader = document.getElementById("loader");
loader.style.display = "none";

contactForm.addEventListener("submit", function(e){
    loader.style.display = "block";
    e.preventDefault();
    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "post",
        body: formData,
        mode: "no-cors",
    })

    .then(() => {
        loader.style.display = "none";
        // url thankyou
        window.location.href = "/thankyou.html";
    })
    .catch((e) => alert("Error occurd"));
})


