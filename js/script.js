document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <nav>
            <div class="nav-container">
                <img src="img/logo.png" alt="Bear Logo" class="logo">
                <ul class="nav-links">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Sobre Nosotros</a></li>
                    <li><a href="proyectos.html">Proyectos</a></li>
                </ul>
            </div>
        </nav>
    </header>`;
    
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    }
});