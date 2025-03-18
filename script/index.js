document.getElementById("menu-b").addEventListener("click", function() {
    document.getElementById("menu_lateral").style.left = "0";
})

document.getElementById("fechar").addEventListener("click", function() {
    document.getElementById("menu_lateral").style.left = "-250px";
})


function adicionarnews() {
    const titulo = document.getElementById('news_titulo').value;
    const escrever = document.getElementById('news_escrever').value;
    if (titulo.trim() === "" || escrever.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    const news_lista = document.getElementById('news_lista');
    const item = document.createElement("div");
    item.innerHTML = `<h4>${titulo}</h4><p>${escrever}</p><hr>`;
    news_lista.prepend(item)
    document.getElementById('news_titulo').value = "";
    document.getElementById("news_escrever").value = '';
}
