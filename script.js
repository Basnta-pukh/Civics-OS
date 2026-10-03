/* =========================================
   CIVICS OS — GLOBAL JAVASCRIPT
   ========================================= */


/* =========================================
   PAGE LOAD
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Civics OS initialized.");

    updateNetworkStatus();

});


/* =========================================
   NETWORK STATUS
   ========================================= */

function updateNetworkStatus() {

    const status = document.querySelector(".network-status");

    if (!status) {
        return;
    }

    if (navigator.onLine) {

        status.innerHTML = `
            <span class="status-dot"></span>
            Civic Network
        `;

    } else {

        status.innerHTML = `
            <span class="status-dot"></span>
            Offline Mode
        `;

    }

}


/* =========================================
   ONLINE / OFFLINE DETECTION
   ========================================= */

window.addEventListener("online", () => {

    updateNetworkStatus();

});


window.addEventListener("offline", () => {

    updateNetworkStatus();

});


/* =========================================
   PAGE NAVIGATION
   ========================================= */

function navigateTo(page) {

    window.location.href = page;

}


/* =========================================
   SCROLL TO TOP
   ========================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   CIVIS OS CONSOLE MESSAGE
   ========================================= */

console.log(
    "%c CIVIS OS ",
    "font-size:22px;font-weight:bold;"
);

console.log(
    "Report. Connect. Resolve."
);
