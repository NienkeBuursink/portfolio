const radios = document.querySelectorAll('input[name="goal"]');
const dialogs = document.querySelectorAll("dialog");

function closeAllDialogs() {
    dialogs.forEach(dialog => dialog.close());
}

radios.forEach((radio, index) => { //ChatGPT prompt: hoe open ik per radiobutton een andere dialog?
    radio.addEventListener("change", () => {
        closeAllDialogs();

        const dialog = dialogs[index];

        if (radio.checked) {
            dialog.show();
        } else {
            dialog.close();
        }
    });
});

