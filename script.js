const a = prompt('товар 1')
const b = prompt('товар 2')
const c = prompt('товар 3')

const products = []

products.push(a)
products.push(b)
products.push(c)


const ul = document.querySelector('ul')

products.forEach((product,index) => {
    const li = document.createElement('li')
    li.innerText = product
    li.classList.add(`color${index}`)
    ul.append(li)
    li.onclick = () => {
        li.innerText = 'куплено!'
        li.classList.add('green')
    }
})