/* =========================================================
   BRUNO SYS
   SCRIPT.JS
   Portfólio — Front-end & Mobile Developer
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const elements = {

    // Power / Unlock
    powerButton: document.getElementById("powerButton"),
    unlockButton: document.getElementById("unlockButton"),

    // Screens
    screenOff: document.getElementById("screenOff"),
    bootScreen: document.getElementById("bootScreen"),
    lockScreen: document.getElementById("lockScreen"),
    homeScreen: document.getElementById("homeScreen"),

    // App
    appWindow: document.getElementById("appWindow"),
    backButton: document.getElementById("backButton"),
    appTitle: document.getElementById("appTitle"),
    appBody: document.getElementById("appBody"),

    // Search
    googleSearchForm: document.getElementById("googleSearchForm"),
    googleSearch: document.getElementById("googleSearch"),

    // Clock
    lockTime: document.getElementById("lockTime"),
    lockStatusTime: document.getElementById("lockStatusTime"),
    homeTime: document.getElementById("homeTime"),
    appTime: document.getElementById("appTime"),
    lockDate: document.getElementById("lockDate"),

    // Home indicator
    homeIndicator: document.getElementById("homeIndicator"),

    // Hero
    roleText: document.getElementById("roleText")
};


/* =========================================================
   APPLICATION STATE
========================================================= */

const state = {

    phoneOn: false,

    unlocked: false,

    booting: false,

    currentApp: null

};


/* =========================================================
   GENERAL HELPERS
========================================================= */

/**
 * Mostra um elemento.
 */
function show(element) {

    if (!element) {
        return;
    }

    element.classList.add("active");
    element.classList.remove("hidden");
}


/**
 * Esconde um elemento.
 */
function hide(element) {

    if (!element) {
        return;
    }

    element.classList.remove("active");
    element.classList.add("hidden");
}


/**
 * Ativa um elemento.
 */
function activate(element) {

    if (!element) {
        return;
    }

    element.classList.add("active");
}


/**
 * Desativa um elemento.
 */
function deactivate(element) {

    if (!element) {
        return;
    }

    element.classList.remove("active");
}


/* =========================================================
   MOBILE DETECTION
========================================================= */

/**
 * Retorna true se estiver em tela de celular.
 */
function isMobile() {

    return window.matchMedia("(max-width: 600px)").matches;

}


/* =========================================================
   APP DATA
========================================================= */

const apps = {


    /* =====================================================
       SOBRE MIM
    ===================================================== */

    about: {

    title: "Sobre mim",

    html: `

        <div class="app-intro">

            <span class="eyebrow">
                PERFIL
            </span>

            <h3>
                Bruno Nunes.
            </h3>

            <p>
                Front-end & Mobile Developer,
                construindo interfaces modernas e
                experiências digitais com foco em
                performance, design e usabilidade.
            </p>

        </div>


        <div class="info-card">

            <div class="info-card-title">
                Quem sou
            </div>

            <div class="info-card-text">
                Tenho 21 anos e sou formado em Análise
                e Desenvolvimento de Sistemas (ADS).
                Atualmente atuo como Controlador de
                Tráfego Jr.
            </div>

        </div>


        <div class="info-card">

            <div class="info-card-title">
                Objetivo
            </div>

            <div class="info-card-text">
                Migrar definitivamente para a área de
                tecnologia, atuando como desenvolvedor
                Front-end ou Mobile, criando produtos
                que unem código limpo, boa experiência
                do usuário e identidade visual forte.
            </div>

        </div>

    `

},


    /* =====================================================
       PROJETOS
    ===================================================== */

    projects: {

        title: "Projetos",

        html: `

            <div class="app-intro">

                <span class="eyebrow">
                    WORK
                </span>

                <h3>
                    Projetos.
                </h3>

                <p>
                    Alguns dos projetos que desenvolvi
                    ao longo da minha jornada.
                </p>

            </div>


            <!-- =========================================
                 PROJETO 01
            ========================================== -->

            <div class="project-card">

                <div class="project-number">
                    01
                </div>

                <h3>
                    Bruno Sys
                </h3>

                <p>
                    Interface de portfólio inspirada
                    em uma experiência mobile premium,
                    desenvolvida com foco em interação,
                    responsividade e experiência do usuário.
                </p>

                <div class="project-tags">

                    <span>
                        HTML
                    </span>

                    <span>
                        CSS
                    </span>

                    <span>
                        JavaScript
                    </span>

                </div>


                <div class="project-actions">

                    <!--
                        Adicione o link do GitHub
                        quando o repositório estiver disponível.
                    -->

                    <!--
                    <a
                        href="https://github.com/Bru001/SEU-REPOSITORIO"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                    >
                        GitHub
                    </a>
                    -->


                    <!--
                        Adicione quando o projeto
                        estiver publicado.
                    -->

                    <!--
                    <a
                        href="https://seuprojeto.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link project-live"
                    >
                        Visitar projeto →
                    </a>
                    -->

                </div>

            </div>


            <!-- =========================================
                 PROJETO 02
            ========================================== -->

            <div class="project-card">

                <div class="project-number">
                    02
                </div>

                <h3>
                    Converte Já
                </h3>

                <p>
                    Aplicativo mobile para conversão
                    de moedas de forma rápida e simples,
                    pensado para viagens, compras
                    internacionais e acompanhamento
                    do câmbio.
                </p>

                <div class="project-tags">

                    <span>
                        React Native
                    </span>

                    <span>
                        Expo
                    </span>

                    <span>
                        API
                    </span>

                </div>


                <div class="project-actions">

                    <a
                        href="https://github.com/Bru001/app-converteJA"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                    >
                        GitHub
                    </a>

                </div>

            </div>

        `

    },


    /* =====================================================
       HABILIDADES
    ===================================================== */

    skills: {

        title: "Habilidades",

        html: `

            <div class="app-intro">

                <span class="eyebrow">
                    SKILLS
                </span>

                <h3>
                    Stack.
                </h3>

                <p>
                    Tecnologias e ferramentas que
                    fazem parte da minha jornada.
                </p>

            </div>


            <div class="skills-list">

                <span class="skill">
                    HTML5
                </span>

                <span class="skill">
                    CSS3
                </span>

                <span class="skill">
                    JavaScript
                </span>

                <span class="skill">
                    React
                </span>

                <span class="skill">
                    React Native
                </span>

                <span class="skill">
                    Expo
                </span>

                <span class="skill">
                    Responsive Design
                </span>

                <span class="skill">
                    APIs
                </span>

                <span class="skill">
                    Git
                </span>

                <span class="skill">
                    GitHub
                </span>

            </div>

        `

    },


    /* =====================================================
       EXPERIÊNCIA
    ===================================================== */

    experience: {

    title: "Experiência",

    html: `

        <div class="app-intro">

            <span class="eyebrow">
                EXPERIENCE
            </span>

            <h3>
                Minha jornada.
            </h3>

            <p>
                Uma visão rápida da minha evolução
                profissional e técnica.
            </p>

        </div>


        <div class="timeline">


            <div class="timeline-item">

                <div class="timeline-date">
                    2025/26
                </div>

                <h3>
                    Projetos independentes
                </h3>

                <p>
                    Desenvolvimento de projetos
                    web e mobile, com foco em
                    interfaces, responsividade,
                    APIs e experiência do usuário.
                </p>

            </div>


            <div class="timeline-item">

                <div class="timeline-date">
                    2026 — ATUAL
                </div>

                <h3>
                    Controlador de Tráfego Jr
                </h3>

                <p>
                    Monitoramento e direcionamento do
                    fluxo de caminhões de cana, álcool
                    e açúcar em tempo real. Atuação em
                    operações logísticas que exigem
                    organização e atenção — habilidades
                    que aplico hoje no desenvolvimento
                    de software.
                </p>

            </div>


            <div class="timeline-item">

                <div class="timeline-date">
                    START
                </div>

                <h3>
                    Início da jornada
                </h3>

                <p>
                    Início dos estudos e primeiros
                    projetos na área de desenvolvimento
                    front-end e mobile.
                </p>

            </div>


        </div>

    `

},


    /* =====================================================
       CONTATO
    ===================================================== */

    contact: {

        title: "Contato",

        html: `

            <div class="app-intro">

                <span class="eyebrow">
                    CONTACT
                </span>

                <h3>
                    Vamos conversar.
                </h3>

                <p>
                    Tem uma ideia, projeto ou oportunidade?
                    Entre em contato.
                </p>

            </div>


            <div class="contact-box">

                <div class="contact-label">
                    EMAIL
                </div>

                <div class="contact-value">
                    bruno.nunes.sys@gmail.com
                </div>

                <a
                    class="contact-button"
                    href="mailto:bruno.nunes.sys@gmail.com?subject=Vamos%20conversar&body=Ol%C3%A1%20Bruno%2C%20tudo%20bem%3F"
                >
                    Vamos conversar
                </a>

            </div>

        `

    },


    /* =====================================================
       GITHUB
    ===================================================== */

    github: {

        title: "GitHub",

        html: `

            <div class="github-profile">

                <div class="github-avatar">

                    <img
                        src="./image/capa.jpg"
                        alt="Bruno Nunes"
                    >

                </div>


                <h3>
                    Bruno R. Nunes
                </h3>


                <p>
                    Projetos, códigos e experimentos.
                </p>


                <button
                    class="contact-button"
                    type="button"
                    onclick="openGitHub()"
                >
                    Abrir GitHub
                </button>

            </div>

        `

    },


    /* =====================================================
       LINKEDIN
    ===================================================== */

    linkedin: {

        title: "LinkedIn",

        html: `

            <div class="app-intro">

                <span class="eyebrow">
                    NETWORK
                </span>

                <h3>
                    Conecte-se comigo.
                </h3>

                <p>
                    Perfil profissional, experiências
                    e conexões.
                </p>

            </div>


            <div class="linkedin-profile">

                <div class="linkedin-avatar">

                    <img
                        src="./image/capa.jpg"
                        alt="Bruno Nunes"
                    >

                </div>


                <h3>
                    Bruno Nunes
                </h3>


                <p>
                    Front-end & Mobile Developer
                </p>


                <button
                    class="contact-button"
                    type="button"
                    onclick="openLinkedIn()"
                >
                    Abrir LinkedIn
                </button>

            </div>

        `

    }

};


/* =========================================================
   POWER BUTTON
========================================================= */

function setupPowerButton() {

    const button = elements.powerButton;

    if (!button) {
        return;
    }


    button.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        togglePower();

    });


    button.addEventListener(
        "touchstart",
        (event) => {

            event.preventDefault();
            event.stopPropagation();

            togglePower();

        },
        {
            passive: false
        }
    );

}


/* =========================================================
   POWER
========================================================= */

function togglePower() {

    if (state.booting) {
        return;
    }


    if (state.phoneOn) {

        powerOff();

    } else {

        powerOn();

    }

}


/* =========================================================
   POWER ON
========================================================= */

function powerOn() {

    if (state.phoneOn || state.booting) {
        return;
    }


    state.phoneOn = true;
    state.unlocked = false;
    state.booting = true;


    hide(elements.screenOff);

    deactivate(elements.lockScreen);
    deactivate(elements.homeScreen);
    deactivate(elements.appWindow);

    activate(elements.bootScreen);


    /*
     * Mobile: boot mais rápido
     * Desktop: boot normal
     */

    const bootDuration = isMobile()
        ? 900
        : 1800;


    setTimeout(() => {

        deactivate(elements.bootScreen);

        activate(elements.lockScreen);

        state.booting = false;

        updateAllClocks();

    }, bootDuration);

}


/* =========================================================
   POWER OFF
========================================================= */

function powerOff() {

    if (state.booting) {
        return;
    }


    state.phoneOn = false;
    state.unlocked = false;
    state.currentApp = null;


    deactivate(elements.lockScreen);
    deactivate(elements.homeScreen);
    deactivate(elements.appWindow);
    deactivate(elements.bootScreen);


    if (elements.appBody) {
        elements.appBody.innerHTML = "";
    }


    if (elements.appTitle) {
        elements.appTitle.textContent = "App";
    }


    show(elements.screenOff);

}


/* =========================================================
   UNLOCK
========================================================= */

function setupUnlockButton() {

    const button = elements.unlockButton;

    if (!button) {
        return;
    }


    button.addEventListener("click", (event) => {

        event.preventDefault();

        unlockPhone();

    });

}


/* =========================================================
   UNLOCK PHONE
========================================================= */

function unlockPhone() {

    if (!state.phoneOn || state.booting) {
        return;
    }


    if (state.unlocked) {
        return;
    }


    state.unlocked = true;


    deactivate(elements.lockScreen);

    activate(elements.homeScreen);


    updateAllClocks();

}


/* =========================================================
   OPEN APP
========================================================= */

function openApp(appName) {

    if (!state.phoneOn || !state.unlocked) {
        return;
    }


    const app = apps[appName];


    if (!app) {

        console.warn(
            `Aplicativo "${appName}" não encontrado.`
        );

        return;
    }


    state.currentApp = appName;


    if (elements.appTitle) {

        elements.appTitle.textContent =
            app.title;

    }


    if (elements.appBody) {

        elements.appBody.innerHTML =
            app.html;

        elements.appBody.scrollTop = 0;

    }


    activate(elements.appWindow);


    activateDynamicIsland();

    updateAllClocks();

}


/* =========================================================
   DYNAMIC ISLAND
========================================================= */

function activateDynamicIsland() {

    const island =
        document.querySelector(".dynamic-island");


    if (!island) {
        return;
    }


    island.classList.add("active");


    setTimeout(() => {

        island.classList.remove("active");

    }, 700);

}


/* =========================================================
   APP BUTTONS
========================================================= */

function setupAppButtons() {

    document.addEventListener("click", (event) => {

        const appButton =
            event.target.closest("[data-app]");


        if (!appButton) {
            return;
        }


        const appName =
            appButton.dataset.app;


        if (!appName) {
            return;
        }


        event.preventDefault();

        openApp(appName);

    });

}


/* =========================================================
   BACK BUTTON
========================================================= */

function setupBackButton() {

    const button = elements.backButton;

    if (!button) {
        return;
    }


    button.addEventListener("click", (event) => {

        event.preventDefault();

        closeApp();

    });

}


/* =========================================================
   CLOSE APP
========================================================= */

function closeApp() {

    deactivate(elements.appWindow);

    state.currentApp = null;


    setTimeout(() => {

        if (elements.appBody) {

            elements.appBody.innerHTML = "";

        }

    }, 350);

}


/* =========================================================
   HOME INDICATOR
========================================================= */

function setupHomeIndicator() {

    const indicator =
        elements.homeIndicator;


    if (!indicator) {
        return;
    }


    indicator.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        goHome();

    });


    indicator.addEventListener(
        "touchstart",
        (event) => {

            event.preventDefault();
            event.stopPropagation();

            goHome();

        },
        {
            passive: false
        }
    );

}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    if (!state.currentApp) {
        return;
    }


    closeApp();

    activate(elements.homeScreen);

    updateAllClocks();


    const indicator =
        elements.homeIndicator;


    if (indicator) {

        indicator.style.opacity = "0.5";


        setTimeout(() => {

            indicator.style.opacity = "1";

        }, 200);

    }

}


/* =========================================================
   GOOGLE SEARCH
========================================================= */

function setupGoogleSearch() {

    const form =
        elements.googleSearchForm;


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const input =
                elements.googleSearch;


            if (!input) {
                return;
            }


            const query =
                input.value.trim();


            if (!query) {

                input.focus();

                return;

            }


            const url =
                "https://www.google.com/search?q=" +
                encodeURIComponent(query);


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   CLOCK
========================================================= */

function getCurrentTime() {

    const now = new Date();


    return now.toLocaleTimeString(
        "pt-BR",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================================
   DATE
========================================================= */

function getCurrentDate() {

    const now = new Date();


    return now.toLocaleDateString(
        "pt-BR",
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    );

}


/* =========================================================
   UPDATE CLOCK
========================================================= */

function updateClock(element) {

    if (!element) {
        return;
    }


    element.textContent =
        getCurrentTime();

}


/* =========================================================
   UPDATE DATE
========================================================= */

function updateDate(element) {

    if (!element) {
        return;
    }


    let date =
        getCurrentDate();


    date =
        date.charAt(0).toUpperCase() +
        date.slice(1);


    element.textContent =
        date;

}


/* =========================================================
   UPDATE ALL CLOCKS
========================================================= */

function updateAllClocks() {

    updateClock(elements.lockTime);

    updateClock(elements.lockStatusTime);

    updateClock(elements.homeTime);

    updateClock(elements.appTime);

    updateDate(elements.lockDate);

}


/* =========================================================
   LIVE CLOCK
========================================================= */

function startClock() {

    updateAllClocks();


    setInterval(() => {

        updateAllClocks();

    }, 1000);

}


/* =========================================================
   TEMPORARY MESSAGE
========================================================= */

function showTemporaryMessage(message) {

    const oldMessage =
        document.querySelector(
            ".temporary-message"
        );


    if (oldMessage) {
        oldMessage.remove();
    }


    const element =
        document.createElement("div");


    element.className =
        "temporary-message";


    element.textContent =
        message;


    Object.assign(
        element.style,
        {

            position: "fixed",

            left: "50%",

            bottom: "35px",

            transform:
                "translateX(-50%)",

            zIndex: "99999",

            padding:
                "10px 16px",

            borderRadius:
                "999px",

            background:
                "rgba(20,20,25,.92)",

            border:
                "1px solid rgba(255,255,255,.12)",

            color:
                "#fff",

            fontSize:
                "11px",

            fontFamily:
                "-apple-system,BlinkMacSystemFont,sans-serif",

            boxShadow:
                "0 10px 30px rgba(0,0,0,.4)",

            backdropFilter:
                "blur(20px)",

            pointerEvents:
                "none",

            opacity:
                "0",

            transition:
                "opacity .2s ease"

        }
    );


    document.body.appendChild(element);


    requestAnimationFrame(() => {

        element.style.opacity = "1";

    });


    setTimeout(() => {

        element.style.opacity = "0";


        setTimeout(() => {

            element.remove();

        }, 250);

    }, 1600);

}


/* =========================================================
   EXTERNAL LINKS
========================================================= */

function openGitHub() {

    window.open(
        "https://github.com/Bru001",
        "_blank",
        "noopener,noreferrer"
    );

}


function openLinkedIn() {

    window.open(
        "https://www.linkedin.com/in/bruno-nunes-dev",
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   ROLE TYPING EFFECT
========================================================= */

function startRoleAnimation() {

    const roleText =
        elements.roleText;


    if (!roleText) {
        return;
    }


    const roles = [

        "FRONT-END DEVELOPER",

        "MOBILE DEVELOPER"

    ];


    let currentIndex = 0;

    let isDeleting = false;

    let currentText = "";

    let charIndex = 0;


    const typingSpeed = 80;

    const deletingSpeed = 40;

    const pauseAfterTyping = 4000;

    const pauseBetweenRoles = 500;


    function typeEffect() {

        const fullText =
            roles[currentIndex];


        if (!isDeleting) {

            charIndex++;

            currentText =
                fullText.substring(
                    0,
                    charIndex
                );


            roleText.textContent =
                currentText;


            if (
                charIndex ===
                fullText.length
            ) {

                isDeleting = true;


                setTimeout(
                    typeEffect,
                    pauseAfterTyping
                );


                return;
            }


            setTimeout(
                typeEffect,
                typingSpeed
            );


            return;
        }


        charIndex--;

        currentText =
            fullText.substring(
                0,
                charIndex
            );


        roleText.textContent =
            currentText;


        if (charIndex === 0) {

            isDeleting = false;


            currentIndex =
                (currentIndex + 1) %
                roles.length;


            setTimeout(
                typeEffect,
                pauseBetweenRoles
            );


            return;
        }


        setTimeout(
            typeEffect,
            deletingSpeed
        );

    }


    setTimeout(
        typeEffect,
        1000
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

function setupKeyboardControls() {

    document.addEventListener(
        "keydown",
        (event) => {


            /* ---------------------------------------------
               ESC
               Fecha aplicativo
            --------------------------------------------- */

            if (event.key === "Escape") {

                if (state.currentApp) {

                    closeApp();

                }

                return;

            }


            /* ---------------------------------------------
               ENTER
               Desbloqueia
            --------------------------------------------- */

            if (event.key === "Enter") {

                if (
                    state.phoneOn &&
                    !state.unlocked &&
                    !state.booting
                ) {

                    unlockPhone();

                }

            }


            /* ---------------------------------------------
               P
               Liga / desliga
            --------------------------------------------- */

            if (
                event.key.toLowerCase() === "p" &&
                !event.ctrlKey &&
                !event.altKey &&
                !event.metaKey
            ) {

                togglePower();

            }

        }
    );

}


/* =========================================================
   BUTTON FOCUS / TAP
========================================================= */

function setupButtonBehavior() {

    document.addEventListener(
        "mousedown",
        (event) => {

            const button =
                event.target.closest("button");


            if (!button) {
                return;
            }


            button.style.webkitTapHighlightColor =
                "transparent";

        }
    );

}


/* =========================================================
   INITIAL STATE
========================================================= */

function initializePhone() {

    state.phoneOn = false;

    state.unlocked = false;

    state.booting = false;

    state.currentApp = null;


    deactivate(elements.bootScreen);

    deactivate(elements.lockScreen);

    deactivate(elements.homeScreen);

    deactivate(elements.appWindow);


    show(elements.screenOff);


    if (elements.appBody) {

        elements.appBody.innerHTML = "";

    }


    if (elements.appTitle) {

        elements.appTitle.textContent =
            "App";

    }


    updateAllClocks();

}


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    initializePhone();

    setupPowerButton();
    setupUnlockButton();
    setupAppButtons();
    setupBackButton();
    setupHomeIndicator();
    setupGoogleSearch();
    setupKeyboardControls();
    setupButtonBehavior();

    startClock();

    startRoleAnimation();


    /* ---------------------------------------------
       MOBILE: liga o telefone automaticamente
       e remove a dependência da tela preta.
    --------------------------------------------- */

    if (isMobile()) {

        window.addEventListener("pageshow", () => {

            if (!state.phoneOn && !state.booting) {

                powerOn();

            }

        });

    }

}


/* =========================================================
   START APPLICATION
========================================================= */

initialize();

/* =========================================================
   PUBLIC API
========================================================= */
window.BRUNOSYS = {

    powerOn,
    powerOff,
    togglePower,
    unlockPhone,
    openApp,
    closeApp,
    goHome

};
