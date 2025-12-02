// navegación suave
document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// botones navegación
document.getElementById('btn-vitrinear').addEventListener('click', () => {
    document.getElementById('datos')
        .scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-probador').addEventListener('click', () => {
    document.getElementById('hipotesis')
        .scrollIntoView({ behavior: 'smooth' });
});

// checkout
document.getElementById('btn-checkout').addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.hidden = false;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        toast.hidden = true;
        document.getElementById('inicio')
            .scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

<script>
/* ========= LLUVIA DE GIFS AL ELEGIR VESTUARIO ========= */

function startGifRain() {
    for (let i = 0; i < 18; i++) {
        const gif = document.createElement("img");
        gif.src = "resources/9.gif";   // tu GIF
        gif.className = "rain-gif";

        gif.style.left = Math.random() * 100 + "vw";
        gif.style.animationDuration = (2 + Math.random() * 3) + "s";
        gif.style.transform = `scale(${0.6 + Math.random() * 0.7})`;

        document.body.appendChild(gif);

        setTimeout(() => gif.remove(), 5000);
    }
}

document.querySelectorAll("input[name='capricho']").forEach(option => {
    option.addEventListener("change", () => {
        if (option.value === "vestuario") {
            startGifRain();
        }
    });
});
</script>
