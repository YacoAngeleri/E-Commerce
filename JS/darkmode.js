document.getElementById('id-sun').onclick = function(){
    document.getElementById('id-moon').classList.remove('active'); 
    this.classList.add('active');
}

document.getElementById('id-moon').onclick = function(){
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active')
}