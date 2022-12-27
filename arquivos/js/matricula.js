let $tdTotalCursos = document.querySelector('.js-total-de-cursos')
let $tdTotalHoras = document.querySelector('.js-total-de-horas')
let $tdTotalConfirmar = document.querySelector('.js-botao-matricula')

let totalHoras = 0
let totalCuros = 0

function adicionaCurso(checkbox) {
    if (checkbox.checked) {
        totalCuros ++
        totalHoras += parseInt(checkbox.value)
    } else {
        totalCuros --
        totalHoras -= parseInt(checkbox.value)
    }
    $tdTotalHoras.textContent = totalHoras + 'h'
    $tdTotalCursos.textContent = totalCuros + 'curso(s)'
}

$buttonConfirmar.onclick = confirmaMatriculas

function confirmaMatriculas() {
    if (totalCursos === 0) {
        alert('Nenhum curso selecionado')
    }else{
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}