let grid = document.querySelector('.node-container')
for (let i = 0; i < 80*40; i++) {
    let temp = document.createElement('div')
    temp.classList.add('node')
    grid.appendChild(temp)
}

let nodes = document.querySelectorAll('.node')
nodes.forEach((node) => {
    node.addEventListener('click', (e) => {
        node.classList.toggle('applied')
    })
})