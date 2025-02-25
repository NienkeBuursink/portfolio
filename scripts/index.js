const pijltje = document.getElementById("pijltje");

function onClick() {
    document.getElementById("websites").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

pijltje.addEventListener("click", onClick);
