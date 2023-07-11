let color = "rgb(71, 71, 71)"
let color1 = "white"
let colorText = "lightgray"
let colorText1 = "black"


document.getElementById('id-moon').onclick = function(){
    document.getElementById('id-sun').style.background = "darkgray";
    document.getElementById('id-sun').style.color = "yellow";
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active');
    document.getElementById('body').style.background = "radial-gradient(rgb(78, 78, 78), rgb(65, 64, 64), rgb(51, 51, 51), rgb(29, 29, 29), rgb(17, 17, 17), rgb(8, 8, 8), rgb(0, 0, 0))";
    document.getElementById('body').style.color = colorText;
    document.getElementById('form').style.background = color;
    document.getElementById('dropdown-menu').style.background = color;
    document.getElementById('dropdown-item0').style.color = colorText;
    document.getElementById('dropdown-item1').style.color = colorText;
    document.getElementById('dropdown-item2').style.color = colorText;
    document.getElementById('dropdown-item3').style.color = colorText;
    document.getElementById('dropdown-item4').style.color = colorText;
    document.getElementById('dropdown-item5').style.color = colorText;
    document.getElementById('dropdown-item6').style.color = colorText;
    document.getElementById('promo').style.background = "black";
    document.getElementById('promo1').style.background = "black";
    document.getElementById('promo1').style.color = colorText;
    document.getElementById('promo2').style.background = "black";
    document.getElementById('footer').style.background = "rgb(31, 31, 32)";
    document.getElementById('sitio').style.color = "rgb(123, 123, 233)";
    document.getElementById('icono-footer-1').style.color = "rgb(123, 123, 233)";
    document.getElementById('icono-footer-2').style.color = "rgb(123, 123, 233)";
    document.getElementById('icono-footer-3').style.color = "rgb(123, 123, 233)";
    document.getElementById('nombre').style.color = "rgb(123, 123, 233)";
    document.getElementById('derechos').style.color = colorText;
}

document.getElementById('id-sun').onclick = function(){
    document.getElementById('id-sun').style.background = colorText1;
    document.getElementById('id-moon').classList.remove('active'); 
    this.classList.add('active');
    document.getElementById('body').style.background = "radial-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgb(253, 253, 253), rgb(247, 247, 247), rgb(241, 241, 241), rgb(219, 217, 217), rgb(209, 208, 208), rgb(196, 195, 195), rgb(185, 185, 185))";
    document.getElementById('body').style.color = colorText1;
    document.getElementById('form').style.background = colorText;
    document.getElementById('dropdown-menu').style.background = color1;
    document.getElementById('dropdown-item0').style.color = colorText1;
    document.getElementById('dropdown-item1').style.color = colorText1;
    document.getElementById('dropdown-item2').style.color = colorText1;
    document.getElementById('dropdown-item3').style.color = colorText1;
    document.getElementById('dropdown-item4').style.color = colorText1;
    document.getElementById('dropdown-item5').style.color = colorText1;
    document.getElementById('dropdown-item6').style.color = colorText1;
    document.getElementById('promo').style.background = "lightgray";
    document.getElementById('promo1').style.background = "lightgray";
    document.getElementById('promo2').style.background = "lightgray";
    document.getElementById('promo1').style.color = colorText1;
    document.getElementById('footer').style.background = "rgb(173, 171, 171)";
    document.getElementById('sitio').style.color = "darkblue";
    document.getElementById('icono-footer-1').style.color = "blue";
    document.getElementById('icono-footer-2').style.color = "blue";
    document.getElementById('icono-footer-3').style.color = "blue";
    document.getElementById('nombre').style.color = "blue";
    document.getElementById('derechos').style.color = colorText1;
}
