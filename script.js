/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*meu código (utilizando IA para estudos)*/
function copiar(id, botao) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto)
    .then(() => {
      botao.innerText = "Copiado ✓";
      setTimeout(() => {
        botao.innerText = "Copiar";
      }, 1500);
    })
    .catch(err => {
      botao.innerText = "Erro ao copiar";
      setTimeout(() => {
        botao.innerText = "Copiar";
      }, 1500);
    });
}