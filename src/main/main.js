const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))


const textEl = document.getElementById('text')
const text = 'I always ❤ challenging new things!'

let idx = 1;

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, 200)
}
writeText()