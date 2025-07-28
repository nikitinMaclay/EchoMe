document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.from('header', { y: -100, opacity: 0, duration: 1, ease: 'power2.out' });
    gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
    gsap.fromTo('.work-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.9, ease: 'back.out(1.7)' }
    );

    // Parallax effect for hero background
    gsap.to('.parallax-bg', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            scrub: true
        }
    });

    // Portfolio item animations
    gsap.utils.toArray('.portfolio-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Portfolio data
    const portfolioData = {
        1: [
            {
                type: 'text',
                content: '<h3>Cat Energy</h3><p>Адаптивный сайт для продажи питания для кошек.<br><strong>Стэк:</strong> HTML, CSS, JavaScript, gulp, LESS<br><strong>Описание:</strong> Разработал адаптивный интерфейс с акцентом на UX/UI. Использовал лучшие методики написания адаптива: препроцессоры, сборщик, БЭМ-методология.<br>Проект некоммерческий, так что реализована только часть функционала для демонстрирования навыков</p>'
            },
            { type: 'image', src: '../static/images/cat_energy/carousel/img.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_1.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_2.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_3.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_4.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_5.png' },
            { type: 'image', src: '../static/images/cat_energy/carousel/img_6.png' },
            {
                type: 'text',
                content: '<h3>Cat Energy</h3><p>Детальнее в видео на следующем слайде</p>'
            },
            { type: 'video', src: '../static/images/cat_energy/carousel/cat_energy_vid.mp4' },
            {
                type: 'text',
                content: '<h3>Cat Energy</h3><p>Посмотреть код: <a target="_blank" href="https://github.com/nikitinMaclay/1593231-cat-energy-23" class="links-on-modals">Тык</a></p>'
            },
        ],
        2: [
            {
                type: 'text',
                content: '<h3>Technomart</h3><p>Сайт по продаже инструментов.<br><strong>Стэк:</strong> HTML, CSS, JavaScript, Python, Flask, SqLite<br><strong>Описание:</strong> Похожий на Cat Energy проект, созданный с желанием показать, что умею в верстке и бэкенде. Это объединенный выпускной проект двух академий: Html Academy и Yandex Lyceum. В нем уже работали с командой, сделали backend. <br> Чем занимался: верстка вся моя, писал поиск, частично фильтры, пагинацию, формочки, регистрацию + авторизацию</p>'
            },
            { type: 'image', src: '../static/images/technomart/carousel/img.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_1.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_2.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_3.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_4.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_5.png' },
            { type: 'image', src: '../static/images/technomart/carousel/img_6.png' },
            {
                type: 'text',
                content: '<h3>Technomart</h3><p>Детальнее в видео на следующем слайде</p>'
            },
            { type: 'video', src: '../static/images/technomart/carousel/technomart_vid.mp4' },
            {
                type: 'text',
                content: '<h3>Technomart</h3><p>Посмотреть код: <a target="_blank" href="https://github.com/nikitinMaclay/techomart1" class="links-on-modals">Тык</a></p>'
            },
        ],
        3: [
            {
                type: 'text',
                content: '<h3>NFT Automatization Bot</h3><p>Бот для автоматической покупки NFT.<br><strong>Стэк:</strong> Python, Selenium, DrissionPage, JavaScript, MySql, SMTP, Logging<br><strong>Описание:</strong> Полноценный коммерческий проект по выгодной покупке NFT. <br> Чем занимался: разработка полностью моя, спроектировал базу данных, написал основные скрипты для парсинга и сбора БД, интегрировал скрипт для обхода CloudFlare, написал скрипт для перехватывания Xhr/Fetch запросов, добавил логгирование, интегрировал отправку уведомлений о покупках по smpt протоколу на почту, развернул на сервере</p>'
            },
            { type: 'video', src: '../static/images/nft_automatization_bot/carousel/nft_vid.mp4' },
             {
                type: 'text',
                content: '<h3>NFT Automatization Bot</h3><p>Посмотреть код, к сожалению, нельзя, так как проект монетизирован. Либо при личной встрече. Зато можно посмотреть как работает скрипт с обходом CloudFlare на следующем слайде)</p>'
            },
            { type: 'video', src: '../static/images/nft_automatization_bot/carousel/nft_vid_1.mp4' },
        ],
        4: [
            {
                type: 'text',
                content: '<h3>Instagram Parser</h3><p>Сайт для просмотра данных после парсинга<br><strong>Стэк:</strong> Python, Flask, JavaScript, Sockets, Html, Css, AWS, MySql<br><strong>Описание:</strong> Полноценный коммерческий проект по парсингу данных из Instagram. <br> Чем занимался: разработка полностью моя, спроектировал базу данных, написал Frontend и Backend, написал асинхрон и многопоток для парсинга, интегрировал AWS хранище (>300гб данных в пике), дабы собирать и хранить медиа, интегрировал API для парсинга, настроил обновление страницы по сокетам, добавил возможность скачивания данных в формате .csv</p>'
            },
            {
                type: 'text',
                content: '<h3>Instagram Parser</h3><p>На следующем слайде видео с весьма примерным содержанием. Проект еще сильно был видоизменен, однако заказчик прекратил его поддержку, поэтому запустить его не представляется возможным, только со всем новыми доступами</p>'
            },
            { type: 'video', src: '../static/images/insta_parser/carousel/inst_vid.mp4' },
           {
                type: 'text',
                content: '<h3>Instagram Parser</h3><p>Посмотреть код: <a target="_blank" href="https://github.com/nikitinMaclay/instagram_parser" class="links-on-modals">Тык</a></p>'
            },
        ],
        5: [
            {
                type: 'text',
                content: '<h3>Uefa Register</h3><p>Проект для авторегистрации на сайте, где проводятся розыгрыши билетов на спортивные мероприятия<br><strong>Стэк:</strong> Python, SqLite, Selenium<br><strong>Описание:</strong> Полноценный коммерческий проект авторегистрации аккаунтов. <br> Чем занимался: разработка полностью моя, спроектировал базу данных, написал скрипты для создания почт на определенном домене, затем скрипты для регистрации аккаунта для самом сайте</p>'
            },
            { type: 'video', src: '../static/images/uefa/carousel/uefa_vid_1.mp4' },
            { type: 'video', src: '../static/images/uefa/carousel/uefa_vid_2.mp4' },
           {
                type: 'text',
                content: '<h3>Uefa Register</h3><p>Посмотреть код: <a target="_blank" href="https://github.com/nikitinMaclay/AutoRegist_Uefa.com" class="links-on-modals">Тык</a></p>'
            },
        ],
    };

    // Initialize Swiper function
    let swiper = null;
    const initSwiper = () => {
        swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true }
        });
        swiper.update(); // Ensure Swiper updates after initialization
    };

    // Portfolio item click handler
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.project;
            const slides = portfolioData[projectId];
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            const modal = document.getElementById('portfolioModal');

            // Clear previous slides
            swiperWrapper.innerHTML = '';

            // Populate new slides
            slides.forEach(slide => {
                const slideElement = document.createElement('div');
                slideElement.classList.add('swiper-slide');
                if (slide.type === 'image') {
    slideElement.innerHTML = `
        <div class="flex justify-center items-center h-full">
            <img src="${slide.src}" alt="Portfolio image" class="rounded-lg shadow-lg max-h-[80vh] object-contain" />
        </div>
    `;
} else if (slide.type === 'video') {
    slideElement.innerHTML = `
        <div class="flex justify-center items-center h-full">
            <video src="${slide.src}" controls class="rounded-lg shadow-lg max-h-[80vh] w-full object-contain"></video>
        </div>
    `;
} else if (slide.type === 'text') {
    slideElement.innerHTML = `
        <div class="text-slide max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg space-y-4 leading-relaxed">
            ${slide.content}
        </div>
    `;
}
                swiperWrapper.appendChild(slideElement);
            });

            // Destroy previous Swiper instance if exists
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;
            }
            // Initialize new Swiper instance
            initSwiper();

            // Reset modal styles and show it
            modal.removeAttribute('style'); // Clear previous GSAP styles
            modal.classList.remove('hidden');
            gsap.fromTo('#portfolioModal',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
            );
        });
    });

    // Close modal
    document.getElementById('closeModal').addEventListener('click', () => {
        gsap.to('#portfolioModal', {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'back.in(1.7)',
            onComplete: () => {
                const modal = document.getElementById('portfolioModal');
                modal.classList.add('hidden');
                modal.removeAttribute('style'); // Clear GSAP styles
                // Destroy Swiper to prevent conflicts
                if (swiper) {
                    swiper.destroy(true, true);
                    swiper = null;
                }
            }
        });
    });

});