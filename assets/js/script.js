const resultado = document.querySelector(".result")

function insert(valor) {
  if (resultado.innerHTML.length < 15) {
    resultado.innerHTML += valor
  } else {
    alert("Máximo de 15 dígitos!")
  }
}

function clean() {
  resultado.innerHTML = " "
}

function backspace() {
  if (resultado.textContent) {
    let result = document.querySelector(".result").innerHTML
    resultado.innerHTML = result.substring(0, result.length - 1)
  }
}

function equal() {
  if (resultado.textContent) {
    document.getElementById("result").innerHTML = eval(resultado.innerHTML)
  }
}
