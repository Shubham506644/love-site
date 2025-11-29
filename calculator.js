const heartsBg = document.getElementById("bgHearts");

/* Floating background hearts */
setInterval(() => {
    const h = document.createElement("div");
    h.className = "float-heart";
    h.innerText = ["❤️", "💖", "💕", "💘"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (16 + Math.random() * 20) + "px";
    h.style.animationDuration = (4 + Math.random() * 3) + "s";
    heartsBg.appendChild(h);
    setTimeout(() => h.remove(), 7000);
}, 400);

/* Burst hearts for 100% */
function heartBurst() {
    for (let i = 0; i < 22; i++) {
        const h = document.createElement("div");
        h.className = "burst-heart";
        h.innerText = ["❤️", "💖", "💕", "💘"][Math.floor(Math.random() * 4)];
        h.style.left = "50vw";
        h.style.top = "50vh";
        h.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
        h.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1800);
    }
}

function calculateLove() {
    const d1 = document.getElementById("d1").value;
    const d2 = document.getElementById("d2").value;

    if (!d1 || !d2) {
        alert("Please select both dates 💕");
        return;
    }

    const special =
        (d1 === "2006-05-05" && d2 === "2004-09-01") ||
        (d1 === "2004-09-01" && d2 === "2006-05-05");

    let lovePercent;
    let message;

    if (special) {
        lovePercent = 100;
        message = "Perfect soulmates ❤️ This love is written forever.";
        heartBurst();
    } else {
        lovePercent = Math.floor(Math.random() * 91) + 10;

        if (lovePercent >= 90)
            message = "Unbreakable bond 💖 Truly meant to be.";
        else if (lovePercent >= 75)
            message = "Strong connection 💕 Love is very deep.";
        else if (lovePercent >= 60)
            message = "Beautiful chemistry ✨ With care, it will last forever.";
        else if (lovePercent >= 40)
            message = "Cute love 💗 Give it time to bloom.";
        else
            message = "Interesting match 💌 Love grows slowly.";
    }

    const resultBox = document.getElementById("result");

    resultBox.innerHTML = `
        Your Love Compatibility is <br>
        <span>${lovePercent}% ❤️</span><br><br>
        ${message}
        <div style="margin-top:18px">
            <button onclick="shareResult(${lovePercent})">Share ❤️</button>
            <button onclick="resetCalc()">Re-Calculate</button>
        </div>
    `;
}

/* Reset calculator */
function resetCalc() {
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";
    document.getElementById("result").innerHTML = "";
}

/* Share result */
function shareResult(percent) {
    const text = `Our Love Compatibility is ${percent}% ❤️`;

    if (navigator.share) {
        navigator.share({
            title: "Love Calculator ❤️",
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert("Result copied. Share it with love 💕");
    }
}
/* Heart flow like other pages */
const flowContainer = document.querySelector(".floating-hearts");

setInterval(() => {
    if (!flowContainer) return;

    const h = document.createElement("div");
    h.className = "flow-heart";
    h.innerText = ["❤️","💖","💕","💘"][Math.floor(Math.random()*4)];

    h.style.left = Math.random() * 95 + "vw";
    h.style.fontSize = (16 + Math.random() * 18) + "px";

    const dur = 4500 + Math.random() * 2500;
    h.style.animationDuration = dur + "ms";

    flowContainer.appendChild(h);
    setTimeout(() => h.remove(), dur + 300);
}, 380);
