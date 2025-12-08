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


(function markFirstParagraphs(){
    // contenedores donde queremos que haya 1 drop-cap por sección
    const containers = document.querySelectorAll('section, .main-content, .main-content-datos, .main-content-porque, .bajada-magazine, .datos-intro-magazine, .magazine-dynamic');

    // limpia marcas previas (por si se ejecuta varias veces)
    document.querySelectorAll('.first-paragraph').forEach(el => el.classList.remove('first-paragraph'));

    containers.forEach(container => {
        // Encuentra el primer <p> descendiente visible
        const p = container.querySelector('p');
        if (p) p.classList.add('first-paragraph');
    });
})();

const cursor = document.getElementById("gif-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll("a, button, .polaroid-option").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
  });
});

