/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Modificado com melhorias por ChatGPT
*/
window.addEventListener('DOMContentLoaded', event => {

    // ===== Função para reduzir a navbar ao rolar =====
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // ===== Ativar scrollspy do Bootstrap =====
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // ===== Fechar menu responsivo ao clicar em link =====
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map((navItem) => {
        navItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ===== Animação de rolagem suave =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });

    // ===== Comportamento do formulário de contato =====
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.querySelector('#name');
            const email = document.querySelector('#email');
            const phone = document.querySelector('#phone');
            const message = document.querySelector('#message');
            const successMsg = document.querySelector('#submitSuccessMessage');
            const errorMsg = document.querySelector('#submitErrorMessage');

            if (name.value && email.value && phone.value && message.value) {
                successMsg.classList.remove('d-none');
                errorMsg.classList.add('d-none');
                form.reset();
            } else {
                errorMsg.classList.remove('d-none');
                successMsg.classList.add('d-none');
            }
        });
    }

    // ===== Acessibilidade: alternar aria-expanded =====
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            navbarToggler.setAttribute('aria-expanded', !isExpanded);
        });
    }
});
