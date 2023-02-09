//console.log("%cHello, World", "color: blue; font-size: 40px");

const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
  new bootstrap.Tooltip(t)
})
