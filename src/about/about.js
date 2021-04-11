'use strict';

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 120000

        if (c < target) {
            let text = `${Math.ceil(c + increment)}`

            counter.innerText = text;
            setTimeout(updateCounter, 3)
        }

        else {
            counter.innerText = target
        }
    }

    updateCounter()
})