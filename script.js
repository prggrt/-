    // 1. Увеличение изображения в портфолио
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';

            const image = document.createElement('img');
            image.src = item.src;
            image.style.maxWidth = '90%';
            image.style.maxHeight = '90%';
            image.style.borderRadius = '10px';

            modal.appendChild(image);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => document.body.removeChild(modal));
        });
    });

    // 2. Сворачивание и разворачивание секций
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const header = section.querySelector('h2');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    });

    // 3. Плавная прокрутка при переходе по якорным ссылкам
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
