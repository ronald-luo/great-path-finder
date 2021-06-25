let grid = document.querySelector('.node-container')
let data = {
    kill: 0,
}

for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
        let temp = document.createElement('div')
        temp.classList.add('node')
        temp.setAttribute('y', i)
        temp.setAttribute('x', j)
        grid.appendChild(temp)
    }
}

let nodes = document.querySelectorAll('.node')

nodes.forEach((node) => {
    node.addEventListener('click', (e) => {
        node.classList.toggle('applied')
        console.log(node.getAttribute('x'), node.getAttribute('y'))
    })
})

// module pattern
let colorMe = (() => {
    let i = 0
    
    function continueColor () {
        let nodes = document.querySelectorAll('.node')
        nodes[i].classList.toggle('applied')
        if (i >= (nodes.length - 1) ) {
            clearInterval(data.kill)
        }
        else {
            i++
        }
    }

    return {
        continueColor,
    }
})()

document.querySelectorAll('.visualizer').forEach((node) => {
    node.addEventListener('click', (e) => {
        console.log(e.target.id)
        setTimeout(nextThing, 500)
    })
})

function nextThing () {
    const container = document.querySelector('.menu-page')
    container.classList.add('invisible')
    data.kill = setInterval(colorMe.continueColor, 0.01)
}