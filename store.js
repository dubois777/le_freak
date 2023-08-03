const bg = document.querySelectorAll(".bg")

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
   bg.forEach(element =>{
  let speed = element.dataset.speed;
  element.computedStyleMap.transform = `translateY${scroll * speed}px)`
    })
})