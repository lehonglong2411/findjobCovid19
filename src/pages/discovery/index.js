Page({

  onReady() {
    const video = my.createAudioContext('video');
    video.pause();
  },

  onShow() {
    this.videoContext = my.createVideoContext('video');
  },

  onPause(){
    this.setData({title: 'onPause'})
  },
  
   pause() {
    this.videoContext.pause()
  }

})