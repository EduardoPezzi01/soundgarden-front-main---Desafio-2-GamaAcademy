const BASE_URL = "https://soundgarden-api.deta.dev"

const modal = document.createElement('article')
modal.innerHTML = `
<div id="fade" class="hide"></div>
<div id="modal" class="hide">
    <div class="modal-header">
        <h2>Reserve o seu ingresso</h2>
        <button id="close-modal">Fechar</button>
    </div>
    <div class="modal-body">
        <form id="formModal">
            <label for="email">E-mail:</label>
            <input id="email" type="email" placeholder="digite seu e-mail">
            <label for="nome">Nome:</label>
            <input id="nome" type="text" placeholder="qual o seu nome?">
            <button type="submit">Reservar</button>     
        </form>
    </div>
</div>
`

