import './style.css'
import "./src/utils/lucide"
import heroIllustration from "./src/components/heroIllustration"
import introductionIllustration from "./src/components/introductionIllustration"




import BtnPriDsa from './src/components-dsa/buttons/BtnPriDsa/BtnPriDsa';
import BtnIcnPriDsa from './src/components-dsa/buttons/BtnIcnPriDsa/BtnIcnPriDsa';
import BtnIcnSecDsa from './src/components-dsa/buttons/BtnIcnSecDsa/BtnIcnSecDsa';
import BtnIcnTerDsa from './src/components-dsa/buttons/BtnIcnTerDsa/BtnIcnTerDsa';
import BtnTerDsa from './src/components-dsa/buttons/BtnTertDsa/BtnTerDsa';
import BtnSecDsa from './src/components-dsa/buttons/BtnSecDsa/BtnSecDsa';
import BtnIcnLtDsa from './src/components-dsa/buttons/BtnIcnLtDsa/BtnIcnLtDsa';
import BtnDangerDsa from './src/components-dsa/buttons/BtnDangerDsa/BtnDangerDsa';



const btnPriContainer = document.querySelector(".btn-pri-container")
const btnSecContainer = document.querySelector(".btn-sec-container")
const btnTerContainer = document.querySelector(".btn-ter-container")
const btnDangerContainer = document.querySelector(".btn-danger-container")
const btnicnLtContainer = document.querySelector(".btn-icnLt-container")
const btnIcnPriContainer = document.querySelector(".btn-icn-pri-container")
const btnIcnSecContainer = document.querySelector(".btn-icn-sec-container")
const btnIcnTerContainer = document.querySelector(".btn-icn-ter-container")

btnPriContainer.appendChild(BtnPriDsa)
btnSecContainer.appendChild(BtnSecDsa)
btnTerContainer.appendChild(BtnTerDsa)
btnDangerContainer.appendChild(BtnDangerDsa)
btnicnLtContainer.appendChild(BtnIcnLtDsa)
btnIcnPriContainer.appendChild(BtnIcnPriDsa)
btnIcnSecContainer.appendChild(BtnIcnSecDsa)
btnIcnTerContainer.appendChild(BtnIcnTerDsa)
