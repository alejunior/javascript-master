// Construtor
function Paciente (nome, peso, altura, gordura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.gordura = gordura;
    this.imc = calculaImc(peso, altura);
}