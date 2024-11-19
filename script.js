const imagensContainer = document.querySelector(".imagens");
const imagens = document.querySelectorAll(".imagens img");
const totalImagens = imagens.length; //lenght faz com que a variavel armazene o numero de imagens

let indiceAtual = 0;

function avancarCarrossel(){
    indiceAtual = (indiceAtual + 1) % totalImagens;

    const larguraImagem = imagens[0].clientWidth;

    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}

setInterval(avancarCarrossel, 4000)


// ---------------accordeon-----------------

document.querySelectorAll(".titulo").forEach(titulo =>{
    titulo.addEventListener("click", () =>{
        const conteudo = titulo.nextElementSibling //encontra proximo elemento irmão (conteudo associado ao titulo)
        document.querySelectorAll(".conteudo").forEach(c =>{
            if(c !== conteudo){
                c.style.maxHeight = null
            }
        });
        if (conteudo.style.maxHeight){
            conteudo.style.maxHeight = null
        }else{
            conteudo.style.maxHeight = conteudo.scrollHeight + "px"
        }
    })
})
