// nav toggle
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// auto-text

// const textEl = document.getElementById('text')
// const text = 'I always ❤ challenging new things !'

// let idx = 1;

// function writeText() {
//     textEl.innerText = text.slice(0, idx);

//     idx++


//     if (idx > text.length) {
//         idx = 1
//     }

//     setTimeout(writeText, 200)
// }
// writeText()


const textEl = document.getElementById('text')
const text = 'I always challenging new things !'
const heart = '&nbsp<i class="fas fa-heart" style="color:red"></i>&nbsp';

let idx = 0;
let container = '';

writeText();

function writeText() {
    if (idx === text.length) {
        container = '';
        idx = 0;
    } else if (idx === 8) {
        container += heart;
        idx++;
    } else {
        container += text[idx];
        idx++;
    }
    textEl.innerHTML = container;

    setTimeout(writeText, 200);
}