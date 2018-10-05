$(function(){
  var
    $player = $('#player'),
    $play = $('#play'),
    $stop = $('#stop'),
    $volume = $('#volume'),
    $expand = $('#expand'),
    $upload = $('#upload')

  var player = $player[0]

  var $timer = $('#timer'),
      $file = $('#file')

  var $innerBar = $('#innerBar'),
      $volumeControl = $('#volume-control'),
      $volumeInner = $('#volume-inner'),
      $progressBar = $('#progressBar')

  $play
    .on('click', function () {
      if (player.paused) {
        player.play()
        $(this).removeClass('icon-play').addClass('icon-pause')
      } else {
        player.pause()
        $(this).removeClass('icon-pause').addClass('icon-play')
      }
    })

  $stop
    .on('click', function () {
      player.currentTime = 0
      $innerBar.css('width', 0 + 'px')
      player.pause()
      $play.removeClass('icon-pause').addClass('icon-play')
    })

  $volume
    .on('click', function () {
      if (player.muted) {
        player.muted = false
        $(this).removeClass('icon-volume-mute').addClass('icon-volume')
        $volumeInner.css('width', 100 + '%')
      } else {
        player.muted = true
        $(this).removeClass('icon-volume').addClass('icon-volume-mute')
        $volumeInner.css('width', 0)
      }
    })

  $volumeControl
    .on('click', function (e) {
      var w = $(this).width(),
          x = e.offsetX

      window.vol = (x / w).toFixed(1) //全局变量

      player.volume = window.vol
      $volumeInner.css('width', x + 'px')
    })

  $progressBar
    .on('click', function (e) {
      var w = $(this).width(),
          x = e.offsetX
      window.per = (x / w).toFixed(3) //全局变量

      var duration = player.duration
      player.currentTime = (duration * window.per).toFixed(0)

      $innerBar.css('width', x + 'px')
    })

  $player
    .on('timeupdate', function () {
      // 秒数转换
      var time = player.currentTime.toFixed(1),
          minutes = Math.floor((time/60) % 60),
          seconds = Math.floor(time % 60)
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      $timer.text(minutes + ':' + seconds)

      var w = $progressBar.width()
      if (player.duration) {
        var per = (player.currentTime / player.duration).toFixed(3)
        window.per = per
      } else {
        per = 0
      }
      $innerBar.css('width', (w * per).toFixed(0) + 'px')

      if (player.ended) { //播放完毕
        $play.removeClass('icon-pause').addClass('icon-play')
      }
    })

  $expand
    .on('click', function () {
      if (!document.webkitIsFullScreen) {
        player.webkitRequestFullScreen() //全屏
        $(this).removeClass('icon-expand').addClass('icon-contract')
      } else {
        document.webkitCancelFullScreen() //退出全屏
        $(this).removeClass('icon-contract').addClass('icon-expand')
      }
    })

  $upload
    .on('click', function () {
      $file.trigger('click')
    })

  $file
    .on('change', function (e) {
      var file = e.target.files[0],
          canPlayType = player.canPlayType(file.type)

      if (canPlayType === 'maybe' || canPlayType === 'probably') {
        var src = window.URL.createObjectURL(file)
        player.src = src
        $play.removeClass('icon-pause').addClass('icon-play')
        player.onload = function () {
          window.URL.revokeObjectURL(src)
        }
      } else {
        alert('浏览器不支持您选择的视频格式')
      }
    })
})
