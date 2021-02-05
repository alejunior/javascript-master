function buscaApiPaciente() {
    let pacientes = [], erros = [], xhr;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            pacientes = JSON.parse(xhr.responseText); // Parse do response da API em JSON e guardando no Array de Pacientes
            pacientes.forEach(paciente => {
                incluiPacienteNaTabela(new Paciente(paciente.nome, paciente.peso, paciente.altura, paciente.gordura));
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erros.push('Erro ao acessar a API externa, tente mais tarde...')
            exibeMensagemErro(erros);
        }
    });
    xhr.send();
}
