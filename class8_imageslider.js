let array_img = ['a.jpg', 'b.jpg', 'c.jpg', 'laptop2.jpg', 'laptop4.jpg']

let i = 0
let img_length = array_img.length

const demoFunction = ()=>{
    if(i>img_length-1){
        i=0
    }
    // i%img_length
   
    document.getElementById('img').src = `img/${array_img[i]}`
    i++
}
let set = setInterval(demoFunction, 3000)

document.getElementById('right').addEventListener('click', demoFunction)

document.getElementById('left').addEventListener('click', ()=>{
    if(i<0){
        i= img_length-1
    }
    document.getElementById('img').src = `img/${array_img[i]}`
    i--
})

document.querySelector('.container').addEventListener('mouseover', ()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout', ()=>{
    set = setInterval(demoFunction, 3000)
})