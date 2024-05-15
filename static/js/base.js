
var URLactual = window.location.pathname;
if (!localStorage.theme) {localStorage.setItem('theme', 'dark');}

document.getElementById(URLactual).classList.add('active');

const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    if (localStorage.theme === "dark" ) {link.href="/static/css/dark.css";} 
    else {link.href="/static/css/ligh.css";}
    console.log(link);

    document.getElementsByTagName('head')[0].appendChild(link);

document.getElementById("Cambiartema").addEventListener("click",function(e){
    e.preventDefault();
    
    if (localStorage.theme === "dark"){localStorage.theme="ligh";}
    else {localStorage.theme = "dark";}
    if (localStorage.theme === "dark" ) {link.href="/static/css/dark.css";} 
    else {link.href="/static/css/ligh.css";}


})

