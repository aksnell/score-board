function handleClick(event) {

  for (section of document.querySelectorAll('section')) {
    if (section.classList.contains('winner')) {
      return;
    }
  }


  const button = event.target
  const score = event.currentTarget.querySelector('H3')

  let scoreContentInt = parseInt(score.textContent)

  switch(button.classList[0]) {
    case 'add':
      if (scoreContentInt > 19 && !event.currentTarget.classList.contains('winner')) {
        event.currentTarget.classList.add('winner')
        console.log(`${event.currentTarget.classList.contains('team1') ? 'Team 1' : 'Team 2' } won!`)
      }
      score.textContent = `${scoreContentInt + 1}`
      break
    case 'subtract':
      if (scoreContentInt > 0) {
        score.textContent = `${scoreContentInt - 1}`
      }
      break
  }
}

function handleInput(event) {
  const textBox = event.currentTarget.querySelector('input')
  event.currentTarget.querySelector('H2').textContent = textBox.value
}

function handleReset() {
  for (team of document.querySelectorAll('.team')) {
    team.classList.remove('winner')
    team.querySelector('H3').textContent = 0
  }
}

const main = () => {
  document.querySelectorAll('.team').forEach(team => {
    team.addEventListener('click', handleClick)
    team.addEventListener('input', handleInput)
  })
  document.querySelector('button').addEventListener('click', handleReset)
}
document.addEventListener('DOMContentLoaded', main)
