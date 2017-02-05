// page/index/index.js
var app = getApp();
Page({
  data: {
    controls: [{
      id: 1,
      iconPath: '/image/yuanwei@3x.png',
      position: {
        left: 10,
        top: app.data.systemInfo.windowHeight - 50,
        width: 40,
        height: 40
      },
      clickable: true
    },{
      id: 2,
      iconPath: '/image/sacn.png',
      position: {
        left: app.data.systemInfo.windowWidth/2 - 46,
        top: app.data.systemInfo.windowHeight - 50,
        width: 94,
        height: 36
      },
      clickable: true
    },{
      id: 3,
      iconPath: '/image/status.png',
      position: {
        left: app.data.systemInfo.windowWidth - 90,
        top: 10,
        width: 78,
        height: 58
      },
      clickable: true
    }],
    longitude: 0,
    latitude: 0,
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    //点击地图上的按钮
    switch(e.controlId) {
      case 1:
        wx.getLocation({
          type: 'wgs84',
          success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            console.log(res);
          }
        })
        break;
      case 2:
        wx.scanCode({
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
        break;
    }
  },
  onLoad:function(options){
    
    var that = this
    var markers = []
    app.getLocationInfo(function(locationInfo){
      console.log(locationInfo)
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude
      })
      markers.push({
        iconPath: "/image/located@3x.png",
        id: 0,
        latitude: locationInfo.latitude,
        longitude: locationInfo.longitude,
        width: 21,
        height: 38
      })

      //请求所有的学车点


      that.setData({
        markers: markers,
      })

    })
    console.log("页面加载")
  },
  onReady:function(){
    // 页面渲染完成
    console.log("页面渲染完成")
  },
  onShow:function(){
    // 页面显示
    console.log("页面显示")
  },
  onHide:function(){
    // 页面隐藏
    console.log("页面隐藏")
  },
  onUnload:function(){
    // 页面关闭
    console.log("页面关闭")
  }
})