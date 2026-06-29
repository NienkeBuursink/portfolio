// cursor
const glow = document.querySelector(".glow")
const flame = document.querySelector(".flame")

let x = 0
let y = 0

flame.addEventListener("mousemove", followCursor)

function followCursor(){
    document.addEventListener("mousemove", (e) =>{
        document.body.style.cursor = "pointer"
        x = e.clientX
        y = e.clientY

        glow.style.position= "fixed"
        glow.style.setProperty("transform", "translate(-50%, -50%)","important")
        glow.style.left = x + "px"
        glow.style.top = y + "px"

        flame.style.position= "fixed"
        flame.style.setProperty("transform", "translate(-50%, -100%)","important")
        flame.style.left = x + "px"
        flame.style.top = y + "px"
        flame.style.pointerEvents = "none"
    }) 
}