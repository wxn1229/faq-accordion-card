const item = document.querySelectorAll('.item')

const items = Array.from(item)


items.forEach(function(btn) {
  let title = btn.querySelector('h2')
  let p = btn.querySelector('p')
  let arrow = btn.querySelector('.icon img')
  btn.dataset.isHide = "false"

  title.addEventListener('click', function() {

    let isHide = (btn.dataset.isHide === "true")
    isHide = !isHide
    btn.dataset.isHide = isHide.toString()

    if (isHide) {
      //p.style.display = "block"
      p.style.opacity = '1'
      p.style.maxHeight = '300px'
      arrow.style.transform = 'rotate(0deg)'
      title.style.fontWeight = '700'
    }
    else {
      //p.style.display = "none"
      p.style.opacity = '0'

      p.style.maxHeight = '0'
      arrow.style.transform = 'rotate(180deg)'
      title.style.fontWeight = '100'
    }

  })

})
