import { printError, printREsult } from './printResult.js';
import getDateDiff from './getDateDiff.js';
import './switch.js';
import { clearFilder, startFilder, stopFilder } from './timer.js';
import '../styles/main.css';
import '../sass/main.scss';
import '../audio/05447.mp3';


const form = document.getElementById('datecalc')


form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}