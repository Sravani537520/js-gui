const Max = (x, y) => { return Math.max(x.length, y.length) }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithMax = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#input1').checkValidity() && document.querySelector('#input2').checkValidity()) {
    
    const s1 = document.querySelector('#input1').value
    const s2 = document.querySelector('#input2').value
    const ans = ` longest length is ${Max(s1, s2)}.`
    document.querySelector('#result').innerHTML = ans
  }
}

/*const updateWithJoke = async (event) => {
  document.querySelector('#result').innerHTML = ''
  const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
  const response = await fetch(url)
  const obj = await response.json()
  const joke = obj.value.joke || 'No joke for you.'
  document.querySelector('#result').innerHTML = joke
}
*/
// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'input1') ||
    (event.target && event.target.id === 'input2')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'findButton') { updateWithMax(event) }
})

/*document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})*/
