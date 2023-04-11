// document.querySelectorAll('.accordion').forEach((el) => {
//     el.addEventListener('click', () => {
//          let content = el.nextElementSibling;
//          let lastEl = el.parentElement;
//          console.log(content);
//          console.log(lastEl);
//          console.log(el);
//             if(content.style.maxHeight == 0) {
//                 document.querySelectorAll('.drop-content').forEach((drop) => {
//                     drop.style.maxHeight = null;
//                  })                
//             content.style.maxHeight = content.scrollHeight + 'px';
//             lastEl.style.height = 'auto';
//             el.style.content = '-';
//             } else document.querySelectorAll('.drop-content').forEach((drop) => {
//                 drop.style.maxHeight = null;
//                 lastEl.style.height = 52 + 'px';
                
//              })
//      })
// })

// slider
// let slides = document.querySelectorAll('.slider-single');
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
//     slider[i] = slides[i].src;
//     slides[i].remove();
// }
// console.log(slider);

// let step = 0;
// let offset = 0;

// const draw = () => {
//     let img = document.createElement('img');
//     img.src = slider[step];
//     img.classList.add('slider-single');
//     img.style.left = offset*512 + 'px';
//     document.querySelector('.slider').appendChild(img);
//     step++;
//     if(step + 1 == slider.length) {
//         step = 0;
//     } else {
//         step++;
//     }
//     offset = 1;
// }

// const left = () => {
//     document.onclick = null;
//     let slides2 = document.querySelectorAll('.slider-single');
//     let offset2 = 0;
//     for (let i=0; i < slides2.length; i++) {
//         slides2[i].style.left = offset2*512 - 512 + 'px';
//         offset2++;
//     }
//     setTimeout(function() {
//         slides2[0].remove();
//         draw();
//     }, 1000);

// }
// const right = () => {
//     document.onclick = null;
//     let slides2 = document.querySelectorAll('.slider-single');
//     let offset2 = 0;
//     for (let i=0; i < slides2.length; i++) {
//         slides2[i].style.left = offset2*512 - 512 + 'px';
//         offset2--;
//     }
//     setTimeout(function() {
//         slides2[slides2.length-1].remove();
//         draw();
//     }, 1000);

// }
// draw();draw();draw();draw();draw();draw();draw();draw();
// let slide = document.querySelector('.last-button');
// slide.addEventListener ('click', () => {
//     left();
// })
// let slideRight = document.querySelector('.next-button');
// slide.addEventListener ('click', () => {
//     right();
// })

// // Slider

// let item = document.querySelectorAll('.item');
// const itemLength = item.length;
// console.log(itemLength);

// const rightArrow = document.querySelector(".rightArrow");
// const leftArrow = document.querySelector(".leftArrow");
// let slider = [];
// for (let i = 0; i<itemLength; i++) {
//   slider[i] = item[i];
  // console.log(slider[i]);
//   item[i].remove();
// }
// let step = 2;
// let offset = 2;

// function burgerSlider() {
//   let div = document.createElement('div');
//   div = slider[slider.length-1];
//   div.classList.add('item');
//   div.style.left = -100 + 'px';
  // console.log(div);
  // document.querySelector('.items').appendChild(div); 
  
  
  // div = slider[step];
  // div.classList.add('item');
  // div.style.left = offset*100 + 'px';
  // console.log(div);
  // document.querySelector('.items').appendChild(div); 
  // div = slider[step+1];
  // div.classList.add('item');
  // div.style.left = offset*100 + 100 + 'px';
  // console.log(div);
//   document.querySelector('.items').appendChild(div); 
//   offset = 1;

// }

// function burgerSliderL() {
//   console.log(step);
//   if (step == (slider.length-1)) {
//     step = 1;
//   } else {
//     if (step == (slider.length-2)) {
//       step = 0;
//     } else {
//       step = (step +2);
//     }
//   }
//   console.log(step);
//   let div = document.createElement('div');
//   div = slider[step];
//   div.classList.add('item');
//   div.style.left = offset*100 + 'px';
  // console.log(div);
//   document.querySelector('.items').appendChild(div); 
    
//   if (step == 0) {
//     step = (slider.length-1);
//   } else {
//     step = (step - 1);
//   }
//   console.log(step);
//   offset = 1;
// }

// function left() {
//   leftArrow.onclick = null;
//   // 
//   let slider2 = document.querySelectorAll('.item');
//   let offset2 = -1;
  // console.log(slider2.length);
//   for (let i = 0; i<slider2.length; i++) {
//     slider2[i].style.left = offset2*100 - 100 + 'px';
//     offset2 ++;
//   }
//   setTimeout(function() {
//     slider2[0].remove();
//     burgerSliderL();
//     leftArrow.onclick = left;
//   }, 600);
  
// }

// function burgerSliderR() {
//   console.log(step);
//   if (step == 0) {
//     step = (slider.length-2);
//   } else {
//     if (step == 1) {
//       step = (slider.length-1);
//     } else {
//       step = (step -2);
//     }
//   }
//   console.log(step);
//   let offset = -1;
//   let div = document.createElement('div');
//   div = slider[step];
//   div.classList.add('item');
//   div.style.left = offset*100 + 'px';
  // console.log(div);
//   document.querySelector('.items').insertBefore(div, items.firstElementChild);
//   if (step == (slider.length-1)) {
//       step = 0;
//    } else {
//      step = (step+1);
//    }
//   console.log(step);
//   offset = 1;
// }

// function right() {
//   rightArrow.onclick = null;
  
//   let slider2 = document.querySelectorAll('.item');
//   let offset2 = (slider2.length-1);
 
//   for (let i = (slider2.length-1); i>=0; i--) {
//     slider2[i].style.left = offset2*100 + 'px';
//     offset2 --;
//   }
//   setTimeout(function() {
//     slider2[(slider2.length-1)].remove();
//      burgerSliderR();
//     rightArrow.onclick = right;
//   }, 600);
// }


// burgerSlider();
// step = 0;

// document.querySelector('.leftArrow').addEventListener('click', () => {
//     left();
// })
// document.querySelector('.rightArrow').addEventListener('click', () => {
//     right();
// })




// бургер
// document.querySelector('.hamburger').addEventListener('click', () => {
//     if(document.querySelector('.header_menu').style.maxHeight == 0) {
//          document.querySelector('body').style.overflow = 'hidden'; 
//          document.querySelector('.header_menu').style.display = 'flex';
//          document.querySelector('.header_menu').style.height = 100 + '%';
//          document.querySelector('.header_menu').style.maxHeight = 100 + '%';
//          document.querySelector('.hamburger-line').style.background = 'transparent';
//          document.querySelector('.hamburger-line::before').style.transform = 'rotate("45deg")';
//          document.querySelector('.hamburger-line::after').style.transform = 'rotate("-45deg")'; 
//     } else {
//         document.querySelector('body').style.overflow = 'scroll';
//         document.querySelector('.header_menu').style.maxHeight = null;
//     }
// })

// document.querySelectorAll('.nav-link').forEach((link) => {
//     link.addEventListener('click', () => {
//         document.querySelector('.header_menu').style.maxHeight = null;
//         document.querySelector('.hamburger-line').style.background = '#6E38F7';
//         document.querySelector('.hamburger-line::before').style.transform = "rotate('45deg')";
//         document.querySelector('.hamburger-line::after').style.transform = "rotate('-45deg')";
//         document.querySelector('body').style.overflow = 'scroll';
//     })
// })

// document.querySelectorAll('.nav-link').forEach((el) => {
// el.addEventListener('click', () => {
//     if(document.querySelector('.header_menu').classList.contains('nav')){
//     document.querySelector('.header_menu').classList.remove('nav')
//     document.querySelector('body').style.overflow = 'scroll';
//     } else {
//         document.querySelector('.header_menu').classList.add('nav')
//         document.querySelector('body').style.overflow = 'hidden';
//     }
// })
// })
// document.querySelector('.hamburger').addEventListener('click', () => {
//     if(document.querySelector('.header_menu').classList.contains('nav')){
//         document.querySelector('.header_menu').classList.remove('nav')
//         document.querySelector('body').style.overflow = 'scroll';
//         } else {
//             document.querySelector('.header_menu').classList.add('nav')
//             document.querySelector('body').style.overflow = 'hidden';
//         }
// })

// бургер
document.querySelector('.hamburger').addEventListener('click', ()=> {
  let el = document.querySelector('.header-menu');
  if(el.classList.contains('active')){
    el.classList.remove('active')
  } else el.classList.add('active');
})
document.querySelectorAll('.nav-link').forEach((el) =>{
  el.addEventListener('click', () => {
    let headerMenu = document.querySelector('.header-menu');
    if(headerMenu.classList.contains('active')){
      headerMenu.classList.remove('active')
    } else headerMenu.classList.add('active');
  })
})

// Аккордеон
document.querySelectorAll('.accordion').forEach((el) => {
  let dropContent = el.nextElementSibling;
  el.addEventListener('click', () => {
    if(dropContent.classList.contains('active')){
      dropContent.classList.remove('active')
    } else {
      document.querySelectorAll('.drop-content').forEach((element) => {
        element.classList.remove('active');
      })
      dropContent.classList.add('active');
    }
    if(el.classList.contains('plus')){
      document.querySelectorAll('.accordion').forEach((elements) => {
        if(!(elements.classList.contains('plus'))) {
          elements.classList.remove('minus');
          elements.classList.add('plus');
        }
      })
      el.classList.remove('plus')
      el.classList.add('minus')
    } else {
      el.classList.remove('minus')
      el.classList.add('plus')
      }
  })
})

// Слайдер

let item = document.querySelectorAll('.item');
const itemLength = item.length;
console.log(itemLength);

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");
let slider = [];
for (let i = 0; i<itemLength; i++) {
  slider[i] = item[i];
  console.log(slider[i]);
  item[i].remove();
}
let step = 0;
let offset = 0;

function burgerSlider() {
  let div = document.createElement('div');
  div = slider[slider.length-1];
  div.classList.add('item');
  div.style.left = -140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  
  
  div = slider[step];
  div.classList.add('item');
  div.style.left = offset*140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  div = slider[step+1];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 1;
  div = slider[step+2];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 2;

  div = slider[step+3];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 3;

  div = slider[step+4];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 140 + 140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 4;

  div = slider[step+5];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 140 + 140 + 140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 5;

  div = slider[step+6];
  div.classList.add('item');
  div.style.left = offset*140 + 140 + 140 + 140 + 140 + 140 + 140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
  offset = 6;

}

function burgerSliderL() {
  console.log(step);
  if (step == (slider.length-1)) {
    step = 1;
  } else {
    if (step == (slider.length-2)) {
      step = 0;
    } else {
      step = (step +2);
    }
  }
  console.log(step);
  let div = document.createElement('div');
  div = slider[step];
  div.classList.add('item');
  div.style.left = offset*140 + 'px';
  console.log(div);
  document.querySelector('.items').appendChild(div); 
    
  if (step == 0) {
    step = (slider.length-1);
  } else {
    step = (step - 1);
  }
  console.log(step);
  offset = 1;
}

function left() {
  leftArrow.onclick = null;
  // 
  let slider2 = document.querySelectorAll('.item');
  let offset2 = -1;
  console.log(slider2.length);
  for (let i = 0; i<slider2.length; i++) {
    slider2[i].style.left = offset2*140 - 140 + 'px';
    offset2 ++;
  }
  setTimeout(function() {
    slider2[0].remove();
    burgerSliderL();
    leftArrow.onclick = left;
  }, 600);
  
}

function burgerSliderR() {
  console.log(step);
  if (step == 0) {
    step = (slider.length-2);
  } else {
    if (step == 1) {
      step = (slider.length-1);
    } else {
      step = (step -2);
    }
  }
  console.log(step);
  let offset = -1;
  let div = document.createElement('div');
  div = slider[step];
  div.classList.add('item');
  div.style.left = offset*140 + 'px';
  console.log(div);
  document.querySelector('.items').insertBefore(div, items.firstElementChild);
  if (step == (slider.length-1)) {
      step = 0;
   } else {
     step = (step+1);
   }
  console.log(step);
  offset = 1;
}

function right() {
  rightArrow.onclick = null;
  
  let slider2 = document.querySelectorAll('.item');
  let offset2 = (slider2.length-1);
 
  for (let i = (slider2.length-1); i>=0; i--) {
    slider2[i].style.left = offset2*140 + 'px';
    offset2 --;
  }
  setTimeout(function() {
    slider2[(slider2.length-1)].remove();
     burgerSliderR();
    rightArrow.onclick = right;
  }, 600);
}


burgerSlider();
step = 0;

document.querySelector('.leftArrow').addEventListener('click', () => {
    left();
})
document.querySelector('.rightArrow').addEventListener('click', () => {
    right();
})