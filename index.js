let grid = document.querySelector('.node-container')

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
    
    function colorMeExtended () {
        let nodes = document.querySelectorAll('.node')
        nodes[i].classList.toggle('applied')
        i++
    }

    return {
        colorMeExtended,
    }
})()

setInterval(colorMe.colorMeExtended, 1000)
