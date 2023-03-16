var boton = document.getElementById('boton');

boton.addEventListener('click', function() {
  alert('Alerta de prueba');
});

window.onload = function(){
	var menuItems = document.querySelectorAll('nav ul li');
	for(var i=0; i<menuItems.length; i++){
		if(menuItems[i].querySelector('ul')){
			menuItems[i].querySelector('a').addEventListener('click', function(e){
				e.preventDefault();
				var subMenu = this.parentNode.querySelector('ul');
				if(subMenu.style.display === 'block'){
					subMenu.style.display = 'none';
				} else {
					subMenu.style.display = 'block';
				}
			});
		}
		
	}
}