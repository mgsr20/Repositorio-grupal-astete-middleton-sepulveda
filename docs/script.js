<!-- JS -->
<script>
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
</script>