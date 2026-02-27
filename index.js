const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo-postagem");
const conteudo = document.querySelector("#conteudo-postagem");
const btnDisplay = document.querySelector("#post-btn");
const btnPostagem = document.querySelector("#btn-postagem");
const resultadoForm = document.querySelector("#post-form-resultado");
const sectionForm = document.querySelector("#posts-rotina-invisivel-form");

        document.addEventListener("DOMContentLoaded", () => {
            sectionForm.classList.add("none");
        })
        
        btnDisplay.addEventListener("click", () => {
            sectionForm.classList.remove("none");
        })
        // Enviar post 
        form.addEventListener("submit", event => {
        event.preventDefault();
        const data = {
            title: titulo.value,
            body: conteudo.value,
            userId: 1
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(data)
         })
         .then(response => response.json())
         .then(data => {
            // Renderizar post
            // console.log(data);
                resultadoForm.textContent = "";
                resultadoForm.insertAdjacentHTML("beforeend", `
                <h2>${data.title}</h2>
                <p id="p-break">${data.body}</p>
                `);
                
         });

    });