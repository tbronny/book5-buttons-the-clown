import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "submitRequest") {
        const userParent = document.querySelector(
            "input[name='serviceParent']"
        ).value
        const userChild = document.querySelector(
            "input[name='serviceChild']"
        ).value
        const userSize = document.querySelector(
            "input[name='serviceSize']"
        ).value
        const userAddress = document.querySelector(
            "input[name='serviceAddress']"
        ).value
        const userDate = document.querySelector(
            "input[name='serviceDate']"
        ).value
        const sendToApi = {
            parent: userParent,
            child: userChild,
            size: userSize,
            address: userAddress,
            date: userDate,
        }

        sendRequest(sendToApi)
    }
})

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceParent">Parent or guardian of child:</label>
            <input type="text" name="serviceParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChild">Child's name:</label>
            <input type="text" name="serviceChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceSize">How many children will be attending?</label>
            <input type="number" name="serviceSize" class="input" />
        </div>        
        <div class="field">
            <label class="label" for="serviceAddress">Address or location of event:</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Reservation Date:</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}
