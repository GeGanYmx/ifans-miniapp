"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestApi_1 = require("../../testApi/TestApi");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        toplicList: []
    },

    // 添加

  bindViewHot: function () {
    wx.navigateTo({
      url: '../hot/hot',
      success: function () {
        wx.showToast({ title: '每日热点' });
      }
    });
  },
  // bindViewDetail: function () {
  //   wx.navigateTo({
  //     url: '../topic-detail/topic-detail',
  //     success: function () {
  //       wx.showToast({ title: '话题详情' });
  //     }
  //   });
  // },
  // bindViewPublisher: function () {
  //   wx.navigateTo({
  //     url: '../publisher/publisher',
  //     success: function () {
  //       wx.showToast({ title: '发布者详情' });
  //     }
  //   });
  // },
  // bindViewMy: function () {
  //   wx.navigateTo({
  //     url: '../my/my',
  //     success: function () {
  //       wx.showToast({ title: '我的首页' });
  //     }
  //   });
  // },





    onLoad: function () {
        var _this = this;
        console.log(this.data.toplicList);
        this.setData({
            toplicList: TestApi_1.TestApi.getTopList(),
        });
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLGlEQUFnRDtBQVFoRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFFRCxNQUFNO1FBQU4saUJBeUNDO1FBeENDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osVUFBVSxFQUFFLGlCQUFPLENBQUMsVUFBVSxFQUFFO1NBQ2pDLENBQUMsQ0FBQztRQVdILElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVyxZQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXHJcbi8v6I635Y+W5bqU55So5a6e5L6LXHJcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcclxuXHJcbi8v6LCD55So5ZCO5Y+wYXBpXHJcbi8q5a+85YWlaW5kZXg/Pz8gKi9cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9jb21tb24vYXBpJ1xyXG5pbXBvcnQgeyBJVG9waWNEZXRhaWxQYXJhbXMsIElUb3BpY0RldGFpbFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzL2h0dHBfbXNnJztcclxuaW1wb3J0IHsgVGVzdEFwaSB9IGZyb20gJy4uLy4uL3Rlc3RBcGkvVGVzdEFwaSc7XHJcblxyXG4vLyBsZXQgZ2V0VG9waWM9YXN5bmMgKG9iajpJVG9waWNEZXRhaWxQYXJhbXMpOlByb21pc2U8SVRvcGljRGV0YWlsUmVzcG9uc2U+PT57XHJcbi8vICAgICByZXR1cm4gYXdhaXQgYXBpLmdldFRvcGljKG9iaik7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB0b3BsaWNMaXN0OiBbXVxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS50b3BsaWNMaXN0KTtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB0b3BsaWNMaXN0OiBUZXN0QXBpLmdldFRvcExpc3QoKSxcclxuICAgIH0pO1xyXG4gICAgLy8gZ2V0VG9waWMoe2lkOjF9KS50aGVuKChkYXRhKT0+e1xyXG5cclxuICAgIC8vICBsZXQgY3JlYXRBdD1kYXRhLnRvcGljLmNyZWF0ZUF0LnRvTG9jYWxlU3RyaW5nKClcclxuXHJcbiAgICAvLyAgdGhpcy5zZXREYXRhISh7ZGF0YTpkYXRhLGNyZWF0QXQ6Y3JlYXRBdH0pXHJcbiAgICAvLyAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIH0pLmNhdGNoKCk7XHJcblxyXG5cclxuXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19