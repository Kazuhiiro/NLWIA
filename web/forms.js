import { server } from "./server.js"
const form = document.querySelector("#form")
const url = document.querySelector("#url")
const content = document.querySelector("#content")

//Observar quando ocorrer o evento
form.addEventListener("submit", (event) => {
    //Prevenir Método Padrão (Recarregar a página)
    event.preventDefault()

    const videoURL = input.value
    
    if(!videoURL.includes("shorts")){
        return content.textContent = "Esse vídeo não parece ser um short"
    }

    //Separar a URL entre o que vem antes do "/shorts" e depois
    const [_, params] = videoURL.split("/shorts/")
    const videoID = params.split("?si")

    content.textContent = "Obtendo o texto do áudio..."
})