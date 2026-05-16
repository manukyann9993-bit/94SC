const streamsData = [
    {
        id: 'hum',
        url: 'streams/humanitarian.html',
        title: 'Հումանիտար',
        summary: 'Լեզուների և բանասիրության խորացված ուսուցում',
        img: 'images/stream_humanitarian.png'
    },
    {
        id: 'hist',
        url: 'streams/history.html',
        title: 'Պատմագիտական',
        summary: 'Պատմության և հասարակագիտության խորացված ուսումնասիրություն',
        img: 'images/stream_history.png'
    },
    {
        id: 'econ',
        url: 'streams/economics.html',
        title: 'Տնտեսագիտական',
        summary: 'Տնտեսագիտության և մաթեմատիկայի ուսուցում',
        img: 'images/stream_economics.png'
    },
    {
        id: 'ict',
        url: 'streams/ict.html',
        title: 'ՏՀՏ',
        summary: 'Ծրագրավորման և թվային տեխնոլոգիաների ուսուցում',
        img: 'images/stream_ict.png'
    },
    {
        id: 'phys',
        url: 'streams/physmath.html',
        title: 'Ֆիզմաթ',
        summary: 'Ֆիզիկայի և մաթեմատիկայի խորացված ուսուցում',
        img: 'images/stream_physmath.png'
    },
    {
        id: 'bio',
        url: 'streams/biochem.html',
        title: 'Կենսաքիմիա',
        summary: 'Կենսաբանության և քիմիայի ուսումնասիրություն',
        img: 'images/stream_biochem.png'
    },
    {
        id: 'art',
        url: 'streams/art.html',
        title: 'Դիզայն',
        summary: 'Ստեղծագործական հմտությունների և դիզայնի զարգացում',
        img: 'images/stream_art.png'
    }
];


const newsData = [
    {
        id: 3,
        author: "Գրադարանավար",
        date: "01 Մարտ, 2024",
        image: "images/stream_history.png",
        content: "Գրադարանը համալրվել է նոր մասնագիտական գրականությամբ...",
        fullContent: "Ուրախությամբ տեղեկացնում ենք, որ մեր գրադարանը համալրվել է նոր մասնագիտական և գեղարվեստական գրականությամբ: Բոլոր ցանկացողները կարող են այցելել և ծանոթանալ նոր գրքերին:"
    },
    {
        id: 2,
        author: "Աշակերտական Խորհուրդ",
        date: "15 Փետրվար, 2024",
        image: "images/stream_ict.png",
        content: "Մեր դպրոցի թիմը հաղթանակ տարավ ինտելեկտուալ խաղում...",
        fullContent: "Մեր դպրոցի թիմը փայլուն հաղթանակ տարավ քաղաքային ինտելեկտուալ խաղում՝ գրավելով առաջին պատվավոր տեղը: Շնորհավորում ենք թիմի անդամներին և մաղթում նորանոր հաջողություններ:"
    }
];

// POPULATE STREAMS (SIMPLE BLOCK LAYOUT)
function populateStreams() {
    const list = document.getElementById('streams-simple-list');
    if (!list) return;

    list.innerHTML = streamsData.map(s => `
        <div class="block-card">
            <div class="block-visual">
                <img src="${s.img}" alt="${s.title}">
            </div>
            <div class="block-content">
                <h3 class="block-title serif">${s.title} Հոսք</h3>
                <p class="block-desc">${s.summary}</p>
                <a href="${s.url}" class="btn-classic">Կարդալ Ավելին</a>
            </div>
        </div>
    `).join('');
}

// Removed populateProjects function as per instruction.

// Removed openWiki and closeWiki functions as per instruction to link to separate pages.

// POPULATE NEWS (ARTICLE LAYOUT)
function populateNews() {
    const grid = document.getElementById('news-grid');
    if (!grid) return;

    grid.innerHTML = newsData.map(n => `
        <article class="news-article">
            <img src="${n.image}" class="news-img" alt="News Image">
            <div class="news-details">
                <div class="news-header-meta">
                    <span>${n.author}</span>
                    <span>${n.date}</span>
                </div>
                <h3 class="serif">${n.content}</h3>
                <a href="news.html" class="btn-classic">Կարդալ Ամբողջը</a>
            </div>
        </article>
    `).join('');
}

// Removed openNews and closeNews functions as per instruction to link to separate pages.

// POPULATE LATEST NEWS (for home page)
function populateLatestNews() {
    const list = document.getElementById('latest-news-list');
    if (!list) return;

    // Show only last 2 news items
    const latest = newsData.slice(0, 2);

    list.innerHTML = latest.map(n => `
        <article class="news-article">
            <img src="${n.image}" class="news-img" alt="News Image">
            <div class="news-details">
                <div class="news-header-meta">
                    <span>${n.author}</span>
                    <span>${n.date}</span>
                </div>
                <h3 class="serif">${n.content}</h3>
                <a href="news.html" class="btn-classic">Կարդալ Ամբողջը</a>
            </div>
        </article>
    `).join('');
}

// SCROLL REVEAL ANIMATION
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove the class when it leaves the viewport to allow re-triggering
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

// COUNTER ANIMATION (Decelerating Reel Style)
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const animateShuffle = (el) => {
        if (el.classList.contains('animating')) return;
        el.classList.add('animating');

        const target = +el.getAttribute('data-target');
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000; // Slightly faster for re-triggers
        const startTime = performance.now();

        const run = () => {
            const now = performance.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const randomness = Math.pow(1 - progress, 2);
            const deviation = (Math.random() - 0.5) * 2 * (target * randomness);
            let currentDisplay = Math.floor(target + deviation);

            if (progress < 1) {
                if (currentDisplay < 0) currentDisplay = 0;
                el.innerText = currentDisplay + suffix;

                const delay = 20 + (Math.pow(progress, 2) * 150);
                setTimeout(run, delay);
            } else {
                el.innerText = target + suffix;
                el.classList.remove('animating');
            }
        };

        run();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateShuffle(entry.target);
            } else {
                // Reset counter to 0 so it's ready to shuffle again when it returns
                const suffix = entry.target.getAttribute('data-suffix') || '';
                entry.target.innerText = '0' + suffix;
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    populateStreams();
    populateNews();
    populateLatestNews();
    initScrollReveal();
    initCounters();

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.academy-links');
    const dropdowns = document.querySelectorAll('.academy-dropdown');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.academy-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});
