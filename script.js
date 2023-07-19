// elements
const smallGlass = document.querySelectorAll('.smallGlass');
const waterBottleElement = document.querySelector('.remaining-water-ltr');
const smallWaterBottleElement = document.querySelector('.water-filling');


// gv
let height = 0;

// functions starts here!!!
const updateHeight = function(){
  let smallWaterFilledLength = document.querySelectorAll('.smallGlass.waterFilled').length;
  let percentage = ((smallWaterFilledLength / 8) * 100);
  smallWaterBottleElement.style.height = `${height}rem`;
  (smallWaterFilledLength > 0 ) ?smallWaterBottleElement.innerHTML = `<h3>${percentage}%</h3>` : smallWaterBottleElement.innerHTML = '';
  waterBottleElement.style.height = `${(20 - height)}rem`;
}

const addWater = function(smallGlass){
  if(!(smallGlass.classList.contains('waterFilled'))){
    smallGlass.classList.add('waterFilled');
    height += 2.5;
    if(height === 20){
      waterBottleElement.style.display= 'none';
    }
  }
  updateHeight();
  smallGlass.addEventListener('click',()=>{removeWater(smallGlass)});
}

const removeWater = function(smallGlass){
  if(smallGlass.classList.contains('waterFilled')){
    smallGlass.classList.remove('waterFilled');
    height -= 2.5;
    if(height < 20){
      waterBottleElement.style.display= 'flex';
    }
  }
  updateHeight();
  smallGlass.addEventListener('click',()=>{addWater(smallGlass)});
}

// event listeners
for(let i=0;i<smallGlass.length;i++){
  smallGlass[i].addEventListener('click',()=>{addWater(smallGlass[i])})
}