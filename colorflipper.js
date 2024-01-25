const colors =['red', 'green','rgba(133,122,200)','#f15025']
const btn =document.getElementById('btn')
const color =document.querySelector('.color')
btn.addEventListener('click',function(){
    const randomNum= getRandomNumb();
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum];
})
function getRandomNumb(){
    return Math.floor(Math.random()*colors.length);
}
