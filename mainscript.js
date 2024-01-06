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
                mountain.style.top = value * 0+ 'px';
                text.style.marginTop = value * 0.55 + 'px';
                btn.style.marginTop = value * 1.5 + 'px';
            })

// 4 container menu hover effect
const chapter = document.querySelector('.chapter'),
    chapterContainer = chapter.querySelector('.chapter_container'),
    chapterCol = chapter.querySelectorAll('.chapter_col'),
    chapterCaptions = chapter.querySelectorAll('.chapter_col_caption');

const isDesktop = window.matchMedia('(min-width:768px)');

const init = () => {
    if(isDesktop.matches) 
    {
        addEventListener();
    }
};

const addEventListener =() => {
    chapterCol[0].classList.add('active');

    chapterCol.forEach((col,index) =>{
        col.addEventListener('mouseenter', () => {
            chapterCol.forEach((el) => el.classList.remove('active'));
            col.classList.add('active');

            if(index === col.length -1) col.classList.add('active');
        });
    });

};

init();
