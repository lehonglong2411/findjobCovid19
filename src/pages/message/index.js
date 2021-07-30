
Page({
  data: {
    scrollTop: 50,
    width: 250,
    height: 150,
    defaultUrl:
        "https://i.pinimg.com/originals/be/db/24/bedb24ba858e23224d6d73ced078d4f2.jpg",
    defaultUrl1:
        "https://i.pinimg.com/originals/bf/b0/c6/bfb0c6fcc29e5ad5bb49a09402fb638b.jpg",
    defaultUrl2:
        "https://i.pinimg.com/originals/3d/6b/3d/3d6b3d96f20d7e7b7c4c210af34a547a.jpg",
    defaultUrl3:
        "https://i.pinimg.com/originals/69/21/b1/6921b11da6f5b6ff7af6a21286a001c8.jpg",
    defaultUrl4:
        "https://i.pinimg.com/originals/a5/38/e5/a538e5b946e636a00946ead2c27b4c68.jpg",   
    defaultUrl5:
        "https://i.pinimg.com/originals/b3/2f/cf/b32fcfd74ac750bc4d3f5d79cddad782.jpg", 
  },
   onLoad() {
    my.getSystemInfo({
      success: (systemInfo) => {
        console.log('width :>> ', width);
        console.log('height :>> ', height);
        // this.setData({ width, height });
      },
    });
  },

  scroll(e) {
    console.log('scroll', e);
     this.setData({
     scrollTop: e.detail.scrollTop,
     });
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
});