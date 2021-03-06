const app = getApp()

Component({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    setting: app.globalData.setting,
    userInfo: {},
    scroll: 0
  },
  methods: {
    onLoad: function () {
      this.setData({
        setting: app.globalData.setting,
        userInfo: app.globalData.userInfo
      })
    },
    onShow:function(){
      this.setData({
        setting: app.globalData.setting,
        userInfo: app.globalData.userInfo
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://blog.ibilidi.cn/images/wechat.jpg'],
        current: 'https://blog.ibilidi.cn/images/wechat.jpg'   
      })
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    scrollSteps() {
      this.setData({
        scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
      })
    },
    onShareAppMessage() {
      return {
        title: '一起加入WakeUp俱乐部吧~',
        imageUrl: 'https://blog.ibilidi.cn/images/welcome.jpg',
        path: 'pages/index/index/index'
      }
    },
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2,
          setting:app.globalData.setting
        })
      }
    }
  }
})