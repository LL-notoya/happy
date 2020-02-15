const items = document.querySelectorAll('img')//0~2
const itemCount = items.length
console.log(itemCount);//3
const nextItem = document.querySelector('.next')//button 右
const prevItem = document.querySelector('.prev')//button 左
let count = 0

console.log(items);//[img.active, img, img]
console.log(items[count]);//<img class="active" src="./img/happy1.jpg" alt>

function showNextItem() {
    items[count].classList.remove(`active`)

    if (count < itemCount - 1) {//0<3
        count++
    } else {
        count = 0
    }
    items[count].classList.add('active')
    console.log(count);
}

function showPrevItem() {
    items[count].classList.remove('active')

    if (count > 0) {
        count--
    } else {
        count = itemCount -1
    }
    items[count].classList.add('active')
    console.log(count);
}

function keyPress(e) {  //keydown 
    e = e || window.event

    if (e.keyCode === '37') {
        showPrevItem()
    } else if (e.keyCode === '39') {
        showNextItem()
    }
}

nextItem.addEventListener('click', showNextItem)
prevItem.addEventListener('click', showPrevItem)
document.addEventListener('keydown', keyPress)