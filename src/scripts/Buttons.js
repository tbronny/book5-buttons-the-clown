import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const Buttons = () => {
    return `
        <div class="header">
        <img class="gif"src="https://media.giphy.com/media/SvXyB7PimFtm7AHaxt/giphy.gif" height="150" width="150">
        <h1>Buttons the Clown!<i>We all float down here!</i></h1>
        </div>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests:</h2>
            ${Requests()}
        </section>


    `
}
