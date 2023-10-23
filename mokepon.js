//variables globales
let playerAttack 
let enemyAttack
let playerLife = 3
let enemyLife = 3

//funcion del evento load del documento y funcion onclick
function startGame(){
    //declarar variables

    let sectionSelectAttack = document.getElementById('selectAttack')
    sectionSelectAttack.style.display = 'none'

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'none'

    let btnPetPlayer = document.getElementById('btnPet')
    btnPetPlayer.addEventListener('click',selectPlayerPet)   
    let btnFire = document.getElementById('btnFire')
    btnFire.addEventListener('click', fireAttack)
    let btnWatter = document.getElementById('btnWatter')
    btnWatter.addEventListener('click', watterAttack)
    let btnPlant = document.getElementById('btnPlant')
    btnPlant.addEventListener('click', plantAttack)
    let btnRestart = document.getElementById('btnRestart')
    btnRestart.addEventListener('click', restartGame)
}
//funcion seleccionar mascota
function selectPlayerPet(){
    //declarar variables

    let sectionselectPet = document.getElementById('selectPet')
    sectionselectPet.style.display = 'none'

    let sectionSelectAttack = document.getElementById('selectAttack')
    sectionSelectAttack.style.display = 'flex'

    let inputHipo = document.getElementById('hipodoge')
    let inputCapi = document.getElementById('capipepo')
    let inputRati = document.getElementById('ratigueya')
    let spanPetChoose = document.getElementById('playerPetName')

//comprueba la seleccion y por medio del DOM modifica el html por medio de una etiqueta span 
    if(inputHipo.checked) {
        spanPetChoose.innerHTML = 'hipodoge'
    }else if(inputCapi.checked){
        spanPetChoose.innerHTML = 'capipepo'
    }else if(inputRati.checked){
        spanPetChoose.innerHTML = 'ratigueya'
    }else{ 
        alert('please choose a pet') 
    } 
    //llamamos la funcion select enemy pet
    selectEnemyPet()
}

function selectEnemyPet(){

    //llamamos la funcion random para asignar un nombre a cada numero y que la eleccion de la mascota del enemigo sea al azar
    let randomPet = random(1,3)
    let spanEnemyPet = document.getElementById('enemyPetName')

    //si es 1 la variable spanEnemyPet imprimira en el html por medio del inner el nombre asignado "hipodoge" en el siguiente id "enemyPetName" 
    if(randomPet == 1){
        spanEnemyPet.innerHTML = 'hipodoge'
    }else if(randomPet == 2){
        spanEnemyPet.innerHTML = 'capipepo'
    }else {
        spanEnemyPet.innerHTML = 'ratigueya'
    }
}

//creamos las funciones para cada uno de los ataques y guardamos el resultado en la variable global player attack 
function fireAttack(){
    playerAttack = 'fire'
    randomEnemyAttack()
}
function watterAttack(){
    playerAttack = 'watter'
    randomEnemyAttack()

}
function plantAttack(){
    playerAttack = 'plant'
    randomEnemyAttack()

}

//aca definimos que los ataques seran al azar gracias a la funcion rondom 
function randomEnemyAttack(){
let randomAttack = random(1,3)

if(randomAttack == 1){
    enemyAttack = 'fire'
}else if (randomAttack == 2){
    enemyAttack = 'watter'
}else{
    enemyAttack = 'plant'
}
    fight()
}


//esta funcion es la que le dara argumentos a un parametro que le daremos a la funcion crear mensaje el parametro se asigna aca segun lo que pase por meido de azar y luego por medio de un parametro llamado result traemos el argumento dado en la funcion fight 
function fight(){

    let spanPlayerLife = document.getElementById('playerLife')
    let spanEnemyLife = document.getElementById('enemyLife')

    if (enemyAttack == playerAttack) {
        //llamamos la funcion create message y le damos un valor que luego asigna en la variable result con el resultado "gana, pierde, empata"
        createMessage("EMPATE")
      } else if (playerAttack == 'fire' && enemyAttack == 'plant') { 
        //&& es y 
        createMessage("GANASTE")
        enemyLife -- 
        spanEnemyLife.innerHTML = enemyLife
      } else if (playerAttack == 'watter' && enemyAttack == 'fire') {
        createMessage("GANASTE")
        enemyLife -- 
        spanEnemyLife.innerHTML = enemyLife
      } else if (playerAttack == 'plant' && enemyAttack == 'watter') {
        createMessage("GANASTE")
        enemyLife -- 
        spanEnemyLife.innerHTML = enemyLife
      } else {
        createMessage("PERDISTE")
        playerLife-- 
        spanPlayerLife.innerHTML = playerLife
      }

      //llamamos la funcion, ya que aca dentro de la pelea es donde succede el evento que dispara los msjs 
      inspectLife()
}

//creamos una funcion que lee el total de vidas y que dispara un evento cuando cierta condicion se cumple en este caso vidas en 0 
function inspectLife(){
    if(playerLife == 0 ){
        createFinalMessage("-----PERDISTE-----")

    }else if(enemyLife == 0){
        createFinalMessage("-----GANASTE-----")
    }
}

//con esta funcion creamos contenido "elementos en nuestro html por medio de js"
function createMessage(result){
    //llamamos la etiqueta donde pondremos estos nuevos elementos por medio de su id 
let sectionMessage = document.getElementById('result')
let playerAttacks = document.getElementById('playerAttacks')
let enemyAttacks = document.getElementById('enemyAttacks')

let newPlayerAttacks = document.createElement('p')
let newEnemyAttacks = document.createElement('p')

sectionMessage.innerHTML = result
newPlayerAttacks.innerHTML = playerAttack
newEnemyAttacks.innerHTML = enemyAttack

//por medio de createElement decimos que etiqueta deseamos crear en nuestro html 
/* let paragraph = document.createElement('p')
 *///por medio del inner decimos que mostraremos en nuestro html 
//con los + mas + estamos concatenando variables en nuestro texto  
/* paragraph.innerHTML = 'your pet attack with ' + playerAttack + ', the enemys pet attack with ' + enemyAttack + ',' + result
 */
//el appenchild "adjuntar hijos" revisa que ya el elemento este creado por medio de js y lo crea en el html 
playerAttacks.appendChild(newPlayerAttacks)
enemyAttacks.appendChild(newEnemyAttacks)
}  

//misma funcion de arriba con cambios 
function createFinalMessage(finalScore){

let sectionRestart = document.getElementById('restart')
sectionRestart.style.display = 'block'
    //llamamos la etiqueta donde pondremos estos nuevos elementos por medio de su id 
let sectionMessage = document.getElementById('result')

//por medio de createElement decimos que etiqueta deseamos crear en nuestro html 
//por medio del inner decimos que mostraremos en nuestro html 
//con los + mas + estamos concatenando variables en nuestro texto  
sectionMessage.innerHTML = finalScore

//el appenchild "adjuntar hijos" revisa que ya el elemento este creado por medio de js y lo crea en el html 


let btnFire = document.getElementById('btnFire')
btnFire.disabled = true
let btnWatter = document.getElementById('btnWatter')
btnWatter.disabled = true
let btnPlant = document.getElementById('btnPlant')
btnPlant.disabled = true

}

function restartGame(){
    location.reload()
}

//Math.random(): Esta función devuelve un número decimal pseudoaleatorio en el rango de 0 (inclusive) a 1 (exclusive). En otras palabras, puede generar números aleatorios como 0.123456789 o 0.987654321

//Math.floor(): Esta función redondea hacia abajo un número decimal al número entero más cercano que es menor o igual al número original. Por ejemplo, Math.floor(3.99) devolverá 3.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('load',startGame)
