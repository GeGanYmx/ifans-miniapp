import { IMyApp } from './../../app';
const app: IMyApp = getApp();
/*待初始化的缓存和草稿 */
let topicCache:any
let draft:any
Component({
    properties: {
        text: {
            type: String,
            value: 'Wechat'
        },
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        },
        gear: {
            type: Boolean,
            value: false
        }
    },
    attached() {
      this.setData({
        share: app.globalData.share
      })
    },
    data: {
        statusBarHeight: app.statusBarHeight + 'px',
        navigationBarHeight: (app.statusBarHeight + 44) + 'px'
    },
    methods: {
        backHome() {
            app.globalData.share = false
            wx.redirectTo({
              url: '/pages/index/index',
            });
        },
        back() {
           topicCache=wx.getStorageSync('topic');
           draft=wx.getStorageSync('draft');
           //回退时，如果缓存有话题和草稿，则清除
           if(topicCache) wx.removeStorageSync('topic')
           if(draft) wx.removeStorageSync('draft')
            wx.navigateBack({
                delta: 1
            });
        },
        backGear() {
            wx.showActionSheet({
                itemList: ['我的首页'],
                success(res) {
                    switch (res.tapIndex) {
                        case 0:
                        let token = wx.getStorageSync('token');
                        if(token){
                            //获取用户Id
                            let userId=wx.getStorageSync('userId');
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url: '../user/detail/detail?userId='+userId,
                                    success() {
                                       
                                    }
                                });
                            },100)
                            
                        }else{
                            wx.showToast({title:'请先登录！'});
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url:'../login/login'
                                });
                            },100)
                        }
                            break;

                    }
                },
                fail(res) {
                    console.log(res.errMsg);
                }
            });
        }
    }
});
