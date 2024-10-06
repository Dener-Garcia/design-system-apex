import listComponents from "./componentsList.js"

const outputComponent = document.querySelector(".output-component")

const components = document.querySelectorAll(".component-selected")

console.log(components)

for (let i = 0; i < components.length; i++) {
    const component = components[i]

    component.addEventListener("click", () => {

        const showComp = component.dataset.component

        const componentToRender = listComponents[showComp]

        outputComponent.innerHTML = ""

        outputComponent.appendChild(componentToRender)

        const btnPower = document.querySelector(".get-code")

        const code = componentToRender.dataset.code

        btnPower.addEventListener("click", () => {
            navigator.clipboard.writeText(code);

        })
    })
}
