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
        title: 'Արվեստ',
        summary: 'Ստեղծագործական հմտությունների զարգացում',
        img: 'images/stream_art.png'
    }
];

const projectsData = [
    {
        id: 3,
        title: "Ռոբոտաշինություն և AI",
        author: "12-րդ դասարան",
        year: "2024",
        summary: "Արհեստական բանականությամբ աշխատող ինքնավար ռոբոտի նախագծում:",
        content: `
            <h1>Ռոբոտաշինություն և AI</h1>
            <p><strong>Հեղինակ՝</strong> 12-րդ դասարան | <strong>Տարեթիվ՝</strong> 2024</p>
            <hr>
            <h2>Ներածություն</h2>
            <p>Այս նախագիծը նպատակ ուներ ստեղծել ռոբոտ, որը կարող է ինքնուրույն կողմնորոշվել տարածության մեջ...</p>
        `
    },
    {
        id: 2,
        title: "Էկոլոգիական Մաքրում",
        author: "11-րդ դասարան",
        year: "2023",
        summary: "Դպրոցամերձ տարածքի կանաչապատման և մաքրման ծրագիր:",
        content: `
            <h1>Էկոլոգիական Մաքրում</h1>
            <p><strong>Հեղինակ՝</strong> 11-րդ դասարան | <strong>Տարեթիվ՝</strong> 2023</p>
            <hr>
            <h2>Նպատակը</h2>
            <p>Բարձրացնել էկոլոգիական գիտակցությունը աշակերտների շրջանում...</p>
        `
    },
    {
        id: 1,
        title: "Հայոց Պատմության Ուղիներով",
        author: "10-րդ դասարան",
        year: "2023",
        summary: "Ինտերակտիվ քարտեզի ստեղծում պատմական իրադարձություններով:",
        content: `
            <h1>Հայոց Պատմության Ուղիներով</h1>
            <p><strong>Հեղինակ՝</strong> 10-րդ դասարան | <strong>Տարեթիվ՝</strong> 2023</p>
            <hr>
            <h2>Նկարագրություն</h2>
            <p>Ստեղծվել է թվային քարտեզ, որը ցույց է տալիս հայոց պատմության կարևորագույն ճակատամարտերը...</p>
        `
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

// POPULATE PROJECTS (LIST LAYOUT)
function populateProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = `<div class="wiki-list">` +
        projectsData.map(p => `
            <div class="wiki-item" onclick="openWiki(${p.id})">
                <div class="wiki-info">
                    <h3>${p.title}</h3>
                    <span class="wiki-meta">${p.author} | ${p.year}</span>
                </div>
                <div class="wiki-arrow">→</div>
            </div>
        `).join('') + `</div>`;
}

function openWiki(id) {
    const p = projectsData.find(p => p.id === id);
    const modal = document.getElementById('wiki-modal');
    const body = document.getElementById('wiki-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <button class="close-btn-classic" onclick="closeWiki()">ՓԱԿԵԼ</button>
        <h1 class="serif" style="color: var(--primary-navy); border-bottom: 2px solid var(--accent-gold); padding-bottom: 10px; margin-bottom: 20px;">${p.title}</h1>
        <div class="classic-content">${p.content}</div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWiki() {
    document.getElementById('wiki-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

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
                <button class="btn-classic" onclick="openNews(${n.id})">Կարդալ Ամբողջը</button>
            </div>
        </article>
    `).join('');
}

function openNews(id) {
    const n = newsData.find(n => n.id === id);
    const modal = document.getElementById('news-modal');
    const body = document.getElementById('news-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <button class="close-btn-classic" onclick="closeNews()">ՓԱԿԵԼ</button>
        <h1 class="serif" style="color: var(--primary-navy); margin-bottom: 20px;">${n.author}</h1>
        <p style="color: var(--accent-gold); font-weight: 700; margin-bottom: 20px;">${n.date}</p>
        <div class="classic-content">${n.fullContent}</div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNews() {
    document.getElementById('news-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    populateStreams();
    populateProjects();
    populateNews();
});

