
function validarForm(form) {
    if ((form.nome.value && form.peso.value && form.altura.value && form.gordura.value) === '') {
        return false;
    }
    return true;
}

function salvaPaciente(form) {
    let paciente = oberPacienteDoForm(form);
    incluiPacienteNaTabela(paciente);
}

function oberPacienteDoForm(form) {
    let nome, peso, altura, gordura, paciente;

    nome = form.nome.value;
    peso = (form.peso.value).replace(',', '.');
    altura = (form.altura.value).replace(',', '.');
    gordura = form.gordura.value;

    paciente = new Paciente(nome, peso, altura, gordura);
    return paciente;
}

function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPesoAltura(peso, altura) {
    let erros = [];

    if (peso >= 600 || peso <= 1) erros.push('peso inválido');
    if (altura >= 2.6 || altura <= 1) erros.push('Altura inválida');
    return erros;
}

function removePaciente() {
    let tabela;

    tabela = document.querySelector('table');
    tabela.addEventListener('dblclick', (event) => {
        if (event.target.tagName === 'TD') {
            event.target.parentNode.classList.add('fadeOut');
            setTimeout(() => {
                event.target.parentNode.remove();
            }, 800);
        }
    });
}