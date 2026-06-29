const main = document.querySelector('main');

const river = document.createElement('div');
river.className = 'river';
river.setAttribute('aria-hidden', 'true');
river.innerHTML = `
    <svg viewBox="0 0 480 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,22 Q80,12 160,22 Q240,32 320,22 Q400,12 480,22"
                stroke="currentColor" stroke-width="2.5" fill="none" opacity="0.5">
            <animate attributeName="d"
                values="M0,22 Q80,12 160,22 Q240,32 320,22 Q400,12 480,22;
                        M0,22 Q80,32 160,22 Q240,12 320,22 Q400,32 480,22;
                        M0,22 Q80,12 160,22 Q240,32 320,22 Q400,12 480,22"
                dur="4s" repeatCount="indefinite"/>
        </path>
        <path d="M0,30 Q80,20 160,30 Q240,40 320,30 Q400,20 480,30"
                stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.25">
            <animate attributeName="d"
                values="M0,30 Q80,20 160,30 Q240,40 320,30 Q400,20 480,30;
                        M0,30 Q80,40 160,30 Q240,20 320,30 Q400,40 480,30;
                        M0,30 Q80,20 160,30 Q240,40 320,30 Q400,20 480,30"
                dur="3.5s" repeatCount="indefinite"/>
        </path>
    </svg>
`;
main.appendChild(river);