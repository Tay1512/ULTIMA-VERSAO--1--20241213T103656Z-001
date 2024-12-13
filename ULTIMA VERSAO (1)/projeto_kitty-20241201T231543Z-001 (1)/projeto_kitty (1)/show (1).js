function atualizaValorIdade() {
    const idade = document.getElementById('idade').value;
    document.getElementById('valor-idade').textContent = idade;
    window.onload = atualizaValorIdade;
}