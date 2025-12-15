// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            
            // Adicionar estilo para o menu mobile
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.backgroundColor = 'var(--branco)';
                navMenu.style.padding = '1.5rem';
                navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                navMenu.style.zIndex = '99';
                
                // Estilizar os itens do menu
                const navItems = navMenu.querySelectorAll('li');
                navItems.forEach(item => {
                    item.style.margin = '0.8rem 0';
                    item.style.textAlign = 'center';
                });
            }
        });
    }
    
    // Fechar menu ao clicar em um link (para mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                navMenu.style.display = 'none';
            }
        });
    });
    
    // Ajustar menu ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.backgroundColor = 'transparent';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
            
            const navItems = navMenu.querySelectorAll('li');
            navItems.forEach(item => {
                item.style.margin = '0 0 0 1.5rem';
                item.style.textAlign = 'left';
            });
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    // Suavizar scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simular carregamento de imagens (placeholder)
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        // Em um site real, aqui seria carregada uma imagem real
        // Para demonstração, mantemos os placeholders com ícones
    });
});