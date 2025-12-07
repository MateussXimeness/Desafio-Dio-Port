// ==========================================
// 1. ANIMAÇÃO - Going Merry navegando
// ==========================================

const barquinhos = document.querySelectorAll('.icon');

for (let barco of barquinhos) {
    barco.style.animation = 'float 3s ease-in-out infinite';
}

// ==========================================
// 2. SCROLL SUAVE ao clicar nos links
// ==========================================

const linksDoMenu = document.querySelectorAll('.nav-link');

for (let link of linksDoMenu) {
    
    link.addEventListener('click', function(e) {
        
        e.preventDefault();
             
        const secao = document.querySelector(this.getAttribute('href'));

        if (secao) {
            secao.scrollIntoView(
                { behavior: 'smooth' }
            );
        }
    });
}