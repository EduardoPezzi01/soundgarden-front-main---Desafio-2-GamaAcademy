const divEventos = document.querySelector("#eventos")

const getEvents = async(eventos) => {    
    const events = await fetch(`${BASE_URL}/events`).then((result) => 
        result.json()
        )

    events
    .sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
    .slice(0, 3)
    .forEach((event) => {
        const article = document.createElement('article')
        article.innerHTML = `
        <article class="evento card p-5 m-3">
            <h2>${event.name} - ${new Date (event.scheduled).toLocaleDateString('pt-BR')}</h2>
            <h4>${event.attractions.join(", ")}</h4>
            <p>${event.description}</p>
            <button  id='reserva' class="btn btn-primary">reservar ingresso</a>
        </article>`
        divEventos.appendChild(article)
    });


const closeModal = document.querySelector("#close-modal")
const bodyModal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    [bodyModal, fade].forEach((element) => element.classList.toggle("hide"))
}


    // if (reserva.length) {
    //     for (var i = 0; i < reserva.length; i++) {
    //         reserva[i].addEventListener("click", toggleModal());
    //     }
    // }


    // const reservas = []
    // const reserva = document.getElementsByClassName('btn btn-primary')
    // reservas.push(reserva)

    // reservas.forEach((a) => {
    //     a.addEventListener("click", () => toggleModal())})

    const reservas = document.querySelectorAll('#reserva');
    for (let reserva, i = 0; i < reservas.length; i++) {
    reserva = reservas[i];
    reserva.addEventListener('click', toggleModal);
    }



closeModal.addEventListener("click", () => toggleModal()) 
fade.addEventListener("click", () => toggleModal()) 

// [closeModal, fade].forEach((elemento) => {
//     elemento.addEventListener("click", () => toggleModal())
// })


const emailUsuario = document.querySelector("#email")
const nomeUsuario = document.querySelector("#nome")

formModal.addEventListener("submit", (event) => {
    event.preventDefault(); 
        

    const bodym = { // criando objeto que será enviado no POST pra API
        owner_name: nomeUsuario.value,
        owner_email: emailUsuario.value,
        number_tickets: "1",
        event_id: `${event.event_id}`
    }
    console.log(bodym)
    const response = fetch(`${BASE_URL}/bookings`, { // requisição de envio para o banco de dados
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bodym)
    }).then((response) => {
        if (response.ok){
            alert("Reserva efetuada com sucesso!")
            window.location.replace("index.html") // volta a página
        }else {
            alert("Falha ao efetuar reserva :(")
        }
    })



})



}



divEventos.appendChild(modal)

getEvents()