import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    const newRequest = (request) => {
        return `<li>
            <button class="request__delete"
            id="request--${request.id}">
            Reject
            </button>
            <img class="contact" src="https://media.giphy.com/media/jpFDYkQ5ZeBRaAc9Yw/giphy.gif">
            Reservation for ${request.child} on ${request.date} <img class="contact" src="https://media.giphy.com/media/jpFDYkQ5ZeBRaAc9Yw/giphy.gif">
        </li>`
    }

    let html = `<ul class="requests"> ${requests
        .map(newRequest)
        .join("")} </ul>`

    return html
}
