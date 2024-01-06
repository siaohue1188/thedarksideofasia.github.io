
// Mainpage parallax scroll
let backmountain = document.getElementById('backmountain');
            let moon = document.getElementById('moon');
            let text = document.getElementById('text');
            let btn = document.getElementById('btn');
            let mountain = document.getElementById('mountain');

            window.addEventListener('scroll',function(){
                let value = window.scrollY;
                backmountain.style.top = value * 0.55 + 'px';
                moon.style.left = value * 1.05 + 'px';
                mountain.style.top = value * 0 + 'px';
                text.style.marginTop = value * 0.55 + 'px';
                btn.style.marginTop = value * 1.5 + 'px';
            })

/* horizontal scroll*/
const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    'img/1.png', 
    'img/2.png',
    'img/3.png', 
    'img/4.png',
    'img/5.png', 
    'img/6.png',
    'img/7.png', 
    'img/8.png',
    'img/9.png', 
    'img/10.png'
];

let links = [
    'https://www.thedailystar.net/backpage/news/morgue-asst-arrested-charges-necrophilia-1998557',
    'https://www.bbc.com/news/world-asia-39414820',
    'https://www.bbc.com/news/world-asia-china-37103447',
    'https://www.thestandard.com.hk/section-news/section/11/245063/HK-victim-tells-of-misery-in-Myanmar-hellholes',
    'https://edition.cnn.com/2023/10/03/asia/pakistan-kidney-trafficking-ring-intl-hnk/index.html',
    'https://www.koreaboo.com/news/nth-room-telegram-underage-girls-details-sexual-assault/',
    'https://www.ucanews.com/news/the-ordeals-of-myanmars-child-soldiers/92821',
    'https://youtu.be/bo35uvxPXPw?si=57_JTyO4E58ODarl',
    'https://www.aljazeera.com/features/2016/11/14/sold-like-cows-and-goats-indias-slave-brides',
    'https://www.bbc.com/news/world-asia-34268572'
];


images.forEach((img, index) => {
    stickySections.forEach(section => {
        let image = document.createElement('img')
        image.src = img; 
        section.querySelector('.scroll_section').appendChild(image);
        image.addEventListener('click', () => openLinkInNewTab(links[index]));
        image.addEventListener('mouseenter', handleMouseEnter);
        image.addEventListener('mouseleave', handleMouseLeave);
    });
});

function handleMouseEnter() {
    this.style.transition = 'transform 0.3s ease-in-out';
    this.style.transform = 'scale(1.1)'; 
}

function handleMouseLeave() {
    this.style.transition = 'transform 0.3s ease-in-out';
    this.style.transform = 'scale(1)'; 
}
function openLinkInNewTab(link) {
    window.open(link, '_blank');
}

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
});

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')

    let percentage = ((window.scrollY - offsetTop)/ window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}




