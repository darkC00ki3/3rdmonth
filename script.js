function showSurprise() {
    document.getElementById("hidden-message").classList.remove("hidden");

    // Create floating hearts animation
    let heartContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Heart styles (Add to CSS)
const style = document.createElement("style");
style.innerHTML = `
    .heart {
        position: absolute;
        bottom: 0;
        font-size: 24px;
        color: #ff4081;
        animation: floatUp 5s linear infinite;
    }

    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);




