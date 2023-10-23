//Llamamos la calse math y usamos 2 de sus metodos floor que nos da el decimal redondo mas bajo y random que nos da un valor aleatorio de 0 a 1(por eso creamos 2 parametros para darle un rango a ese numero )
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
      resultado = "Piedra 🪨"
    } else if (jugada == 2) {
      resultado = "Papel 📃"
    } else if (jugada == 3) {
      resultado = "Tijera ✂️"
    } else {
      resultado = "MAL ELEGIDO"
    }
    return resultado
  }
  
  // 1 es piedra, 2 es papel, 3 es tijera
  let jugador = 0
  let pc = 0
  let triunfos = 0
  let perdidas = 0
  
  //CICLOS WHILE=Mientras no se cumplan estas condicciones hazme un bucle infinito
  while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    // alert("Elegiste " + jugador)
  
    alert("PC elige " + eleccion(pc))
    alert("Tú eliges " + eleccion(jugador))
    
    // COMBATE
    if (pc == jugador) {
      alert("EMPATE")
    } else if (jugador == 1 && pc == 3) { //&& es y 
      alert("GANASTE")
      triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
      alert("GANASTE")
      triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
      alert("GANASTE")
      triunfos = triunfos + 1
    } else {
      alert("PERDISTE")
      perdidas = perdidas + 1
    }
  }
  
  alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
