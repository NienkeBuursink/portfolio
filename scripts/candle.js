// cursor
const glow = document.querySelector(".glow")
const flame = document.querySelector(".flame")
const wick = document.querySelector(".wick")
const slider = document.querySelector("#light-range")

let followMode = false;

function setFollowPosition(e) {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.position = "fixed";
    glow.style.left = x + "px";
    glow.style.top = y + "px";
    glow.style.transform = "translate(-50%, -50%)";

    flame.style.position = "fixed";
    flame.style.left = x + "px";
    flame.style.top = y + "px";
    flame.style.transform = "translate(-50%, -100%)";
    flame.style.pointerEvents = "none";
}

function resetPosition() {
    glow.style.position = "";
    glow.style.left = "";
    glow.style.top = "";
    glow.style.transform = "";

    flame.style.position = "";
    flame.style.left = "";
    flame.style.top = "";
    flame.style.transform = "";
}

wick.addEventListener("mouseenter", () => {
    if (!followMode) {
        followMode = true;
        document.addEventListener("mousemove", setFollowPosition);
    } else {
        followMode = false;
        document.removeEventListener("mousemove", setFollowPosition);
        resetPosition();
    }
});

slider.addEventListener("input", () => {
    document.documentElement.style.setProperty(
        "--glow-size",
        slider.value + "%"
    );
});