const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const LinkDados = document.getElementById('link-perfil-dados');
const back = document.getElementById('back');

//comandos de teclado
window.addEventListener('keyup', (e) => {  

  if (e.code === 'Digit1') {
    if(navPerfil.style.display == 'block') {
      LinkDados.click()

    } else {
      navPerfil.style.display = 'block'
    }
  }
  
  if(e.code === 'Escape') {
    navPerfil.style.display = "none"
  }

  if(e.code === 'Backspace') {
    back.click()
  }
})

//Primeiro exercício
//if(e.key ==='1' || e.key === '2' || e.key === '3' || e.key === '4') {//'===' compara o valor e o tipo de dado
//  console.log(e.key)
//  navPerfil.style.display = "block"
//}

//if(e.key === 'Escape') {
//  console.log(e.key)
//  navPerfil.style.display = 'none'
//}