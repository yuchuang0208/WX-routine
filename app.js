//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
// App({

//   /**
//    * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
//    */
//   onLaunch: function (e) {
//     console.log(e);
//     console.log(e.scene)
//     console.log("监听小程序初始化");
//   },

//   /**
//    * 当小程序启动，或从后台进入前台显示，会触发 onShow
//    */
//   onShow: function (options) {
//     console.log("监听小程序显示,用户点击了关闭按钮或按了home键,就进入了后台,再次打开微信,又从后台进入了前台,就会被调用一次.");
//   },

//   /**
//    * 当小程序从前台进入后台，会触发 onHide
//    */
//   onHide: function () {
//     console.log("监听小程序的隐藏!!从前台进入后台,就会被调用一次");
//   },

//   /**
//    * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
//    */
//   onError: function (msg) {
//     console.log("当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息");
//   },
//   name: '于闯'
// })
