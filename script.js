const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

        if (!action) {
            console.log('number key!')
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
              } else {
                display.textContent = displayedNum + keyContent
              }
          }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            ) {
            console.log('operator key!')
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            }

        if (action === 'decimal') {
            console.log('decimal key!')
            display.textContent = displayedNum + '.'
            }
              
        if (action === 'clear') {
            console.log('clear key!')
            display.textContent = "0"
            }
              
        if (action === 'calculate') {
            console.log('equal key!')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            const calculate = (n1, operator, n2) => {
                let result = ''
                
                if (operator === 'add') {
                  result = n1 + n2
                } else if (operator === 'subtract') {
                  result = n1 - n2
                } else if (operator === 'multiply') {
                  result = n1 * n2
                } else if (operator === 'divide') {
                  result = n1 / n2
                }
                
                return result
              }
            }

            // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))       
    }
   })