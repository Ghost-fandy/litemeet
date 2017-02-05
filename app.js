//app.js
App({
  data: {
    systemInfo: {}
  },
  onLaunch: function () {
    var systemInfo = wx.getSystemInfoSync()
    this.globalData.windowHeight = systemInfo.windowHeight
    this.data.systemInfo = systemInfo
  },
  getLocationInfo: function(cb){
    var that = this;
    if(this.globalData.locationInfo){
        cb(this.globalData.locationInfo)
    }else{
        wx.getLocation({
          type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function(res){
            that.globalData.locationInfo = res;
            cb(that.globalData.locationInfo)
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
  },
  globalData:{
    imgPath: "https://cdn.fandypeng.com/vraxueche/",
    windowHeight: 0,
    locationInfo: null
  }
})