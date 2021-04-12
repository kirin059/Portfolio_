'use strict';


// button ripple effect
const buttons = document.querySelectorAll('#contact_btn')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        console.log(e.target)

        const x = e.clientX
        console.log(x)  // 현재 찍은 마우스 x값(상대값)
        const y = e.clientY
        console.log(y)  // 현재 찍은 마우스 y값(상대값)

        const buttonTop = e.target.offsetTop
        console.log(buttonTop)  // 228(고정값)
        const buttonLeft = e.target.offsetLeft
        console.log(buttonLeft) // 199(고정값)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

// modal
const btn = document.getElementById('contact_btn');
const modal = document.querySelector('.modal_bg')

btn.addEventListener('click', function () {
    setTimeout(function () {
        modal.style.display = 'block';
    }, 500)
})


const closeBtn = document.querySelector('.close_btn')

closeBtn.addEventListener('click', e => {
    modal.style.display = 'none'
})