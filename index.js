var type = new Typed(".typing",{
    strings : [ "Web Designer", "Front End Developer", "Software Developer" ],
    typeSpeed: 100,
    backSpeed:50,
    loop:true
});

let themecolor = document.querySelectorAll('.theme-toggler span');
themecolor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));