import "../utils/lucide.js"
import listComponents from "./componentsList.js"

const copyComponentsSection = document.querySelector(".copy-components")

const outputComponent = document.querySelector(".output-component")

const components = document.querySelectorAll(".component-selected")

for (let i = 0; i < components.length; i++) {
    const component = components[i]

    component.addEventListener("click", () => {
        copyComponentsSection.classList.add("d-block")

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
