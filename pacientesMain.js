(function onLoad() {
    atualizaTabela();
    
    var btnAdicionarPaciente = document.querySelector("#btn_adicionarPaciente");
    btnAdicionarPaciente.addEventListener('click', (event) => {
        event.preventDefault();
        adicionaPaciente();
    })

    var btn_buscaApiPaciente = document.querySelector('#btn_buscarApiPaciente');
    btn_buscaApiPaciente.addEventListener('click', (event)=>{
        event.preventDefault();
        buscaApiPaciente();
    });

    removePaciente();
    pesquisaPaciente();

})();