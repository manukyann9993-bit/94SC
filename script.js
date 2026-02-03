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
            <a href="projects.html" class="wiki-item">
                <div class="wiki-info">
                    <h3>${p.title}</h3>
                    <span class="wiki-meta">${p.author} | ${p.year}</span>
                </div>
                <div class="wiki-arrow">→</div>
            </a>
        `).join('') + `</div>`;
}

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

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    populateStreams();
    populateProjects();
    populateNews();
});
