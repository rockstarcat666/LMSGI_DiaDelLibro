// hace que al pinchar en el menú se mantegan las opciones de hover para que se pueda usar en moviles
document.querySelector('.menu > a').addEventListener("click", function(event){  
  event.target.parentNode.classList.add('hover');
  event.preventDefault();
  event.stopPropagation();
});

document.querySelector('body').addEventListener("click", function(event){  
  document.querySelector('.menu').classList.remove('hover');  
});