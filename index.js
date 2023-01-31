let colors = [
    'red', 'purple', 'yellow ' , 'orange' , 'green'
]



let ver = document.getElementById('nome')


let btn = document.getElementById('btn')


    btn.addEventListener('click', function() {
        const randombtn = randomColor()
        document.body.style.background = colors[randombtn]
        
        ver.textContent = colors[randombtn]


    })




function randomColor () {

    return  Math.floor(Math.random() * colors.length)
}