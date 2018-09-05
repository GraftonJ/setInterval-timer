document.addEventListener('DOMContentLoaded', function() {
  var count = 0
  var timer
  var startBtn = document.querySelector('button.btn-success')
  var stopBtn = document.querySelector('button.btn-danger')

  startBtn.addEventListener('click', function() {
    console.log('Function started');
    timer = setInterval(function() {
      count++
      document.querySelector('span').innerHTML = count
      // Replace the `span` with the current count
    }, 1000)
  })
  stopBtn.addEventListener('click', function() {
    clearInterval(timer)
  })
})
