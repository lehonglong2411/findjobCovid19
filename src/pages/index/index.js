Page({

  data: {
    fixedHeader: false,
    items: Array.from(Array(100).keys()),
    width: 300,
    height: 270,
    location: undefined
  },
  onPageScroll(event) {
    this.setData({ fixedHeader: event.scrollTop > 20 });
  },
  onTapCart() {
    console.log('onTapCart');
  },
  onLoad() {
    my.getSystemInfo({
      success: (systemInfo) => {
         this.setData({ width, height });
      },
    });
  },
  onGetLocation() {
    my.getLocation({
      cacheTimeout: 1,
      success: (res) => {
        this.setData({ location: res });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  onLoad(query) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  }

  
});