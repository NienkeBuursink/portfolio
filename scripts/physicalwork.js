document.querySelector("section").style.overflowY = "hidden";

const reverse = document.querySelector(".column-reverse");
const normal = document.querySelector(".column");



const timeline = new ScrollTimeline({
    source: document.documentElement,
});



if (reverse) {
    reverse.style.flexDirection = "column-reverse";

    reverse.animate(
        {
            transform: [
                "translateY(calc(100% - 100vh))",  
                "translateY(calc(-100% + 100vh))"
            ]
        },
        {
            fill: "both",  
            timeline  
        }
    );
}

    if (normal) {
        normal.animate(
            {
                transform: [
                    "translateY(calc(-100% + 100vh))", 
                    "translateY(calc(100% - 100vh))"  
                ]
            },
            {
                fill: "both",  
                timeline 
            }
        );
    }
;
