const timer = document.querySelector('.timer');
const datecalc = document.querySelector('.datecalc');
const buttonsEl = document.querySelectorAll('.switch');


function initSwitch() {
    
    buttonsEl.forEach(function (buttonEl) {
        buttonEl.addEventListener('click', cangeActivClass)
        timer.classList.add('invisible');
    })

    function cangeActivClass(event) {
        if (event.target.dataset.type == 'timer') {
            datecalc.classList.add('invisible')
            timer.classList.remove('invisible')
        } else {
            timer.classList.add('invisible');
            datecalc.classList.remove('invisible')
        }
    }
}

initSwitch()