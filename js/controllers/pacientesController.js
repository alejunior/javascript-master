function adicionaPaciente() {
    var form = document.getElementById('form-adiciona');

    validarForm(form) ? salvaPaciente(form) : alert('Preencha todos os campos do formulário, por favor.');
}

function atualizaTabela() {

    let erros = [], tabelaPacientes = [], peso, altura;

    tabelaPacientes = document.querySelectorAll('.paciente');
    tabelaPacientes.forEach(paciente => {
        peso = paciente.querySelector('.info-peso').textContent;
        altura = paciente.querySelector('.info-altura').textContent;
        paciente.querySelector('.info-imc').textContent = calculaImc(peso, altura);
        erros = validaPesoAltura(peso, altura);
        if (erros.length > 0) {
            paciente.classList.add('paciente-invalido');
            paciente.querySelector('.info-imc').textContent = erros.toString().replace(',', ' e ');
        }
    });
}

function incluiPacienteNaTabela(paciente) {

    let pacienteTr, tabelaPacientes, erros = [];

    pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    erros = validaPesoAltura(paciente.peso, paciente.altura);
    if (erros.length > 0) pacienteTr.classList.add('paciente-invalido');
    exibeMensagemErro(erros);

    if (erros.length === 0) {
        pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
        pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
        pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
        pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
        pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

        tabelaPacientes = document.querySelector('#tabela-pacientes');
        tabelaPacientes.appendChild(pacienteTr);
        limpaForm();
    } else {
        return
    }
}

function montaTd(valor, css) {
    let td = document.createElement('td');

    td.textContent = valor;
    td.classList.add(css);
    return td;
}

function exibeMensagemErro(erros) {
    let li, ul;

    ul = document.querySelector('#mensagens-erro');
    erros.forEach(function (erro) {
        li = document.createElement('li');
        li.textContent = `O paciente não pode ser incluído, "${erro}"`;
        ul.appendChild(li);
    });
    setTimeout(() => {
        ul.innerHTML = '';
    }, 4000)
}

function limpaForm() {
    let form = document.getElementById('form-adiciona');

    form.reset();
}

function pesquisaPaciente() {
    let campoFiltro, nome, expressao, tabelaPacientes = [];

    campoFiltro = document.querySelector('#input-filtrar-tabela');

    campoFiltro.addEventListener('input', () => {
        tabelaPacientes = document.querySelectorAll('.paciente');
        if (campoFiltro.value.length > 0) {
            tabelaPacientes.forEach(paciente => {
                nome = paciente.querySelector('.info-nome').textContent;
                expressao = new RegExp(campoFiltro.value, "i");
                if (expressao.test(nome)) {
                    paciente.classList.remove('invisivel');
                } else {
                    paciente.classList.add('invisivel');
                }
            });
        } else {
            tabelaPacientes.forEach(paciente => {
                paciente.classList.remove('invisivel');
            });
        }
    });

}