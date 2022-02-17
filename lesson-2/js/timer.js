//Timer fields
const secondEl = document.querySelector('#seconds');
const minuteEl = document.querySelector('#minutes')

//Buttons
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');

//Notification
const audio = document.getElementById('audio');
const timerErr = document.getElementById('timerErr');

//Listeners
export const startFilder = start.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
    timerErr.innerHTML = ''
})

export const stopFilder = stop.addEventListener('click', () => {
    clearInterval(interval)
    audio.innerHTML = ''
})

export const clearFilder = clear.addEventListener('click', () => {
    if (secondEl.value > 0 || minuteEl.value > 0){
        minuteEl.value = 0;
        secondEl.value = 0;
    }
})
    
//Variables
minuteEl.value = 0;
secondEl.value = 0;
let interval

function startTimer(){
    if(secondEl.value > 0 || minuteEl.value > 0){
        secondEl.value--
        console.log(secondEl.value)        
    }
    if(secondEl.value == 0 && minuteEl.value > 0){
        minuteEl.value--
        secondEl.value = 59
        console.log(minuteEl.value)        
    }
    if (secondEl.value == 0 && minuteEl.value == 0){
        clearInterval(interval)
        timerErr.innerHTML = 'Время вышло'
        audio.innerHTML = '<audio src="audio/05447.mp3" autoplay = true></audio>'
    }  
}
// function soundClick() {
// var audio = new Audio(); // Создаём новый элемент Audio
// audio.src = '05447.mp3'; // Указываем путь к звуку "клика"
// audio.autoplay = true; // Автоматически запускаем
// }


