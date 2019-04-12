//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from '../../common/api';


const app = getApp<IMyApp>()
let tId:number;
Page({
  data: {
    topic: null,
    pushText:'',
    refPostId: null,
    inputText:'390rpx'
  },
  /*textarea输入时触发该函数-微信框架无双向绑定 */
  textAreaInput(event: any) {
    this.setData!({
      pushText: event.detail.value
    })
  },

  tapConfirm(event: any) {
    console.log('点击完成被触发');
    wx.showToast({ title: '点击完成被触发' });
  },

  /*发布话题 */
  titleParti(event: any) {
    var that = this;
    //获取缓存中的token，同步方式
    let token = wx.getStorageSync('token');
    if (!token) {
      //用户未登录或者token过期
      wx.showToast({ title: '请先登录！' });
      
      if(this.data.pushText!=''){
  
    }
      setTimeout(() => {
        wx.navigateTo({
          url: '../login/login',
          success() {

          }
        });
      }, 300);

    } else {
      if (!this.data.pushText) {
        wx.showToast({
          icon:'none',
          title: '内容不能为空！'
        });
      }else if(this.data.pushText.length<5){
        wx.showToast({
          icon:'none',
          title:'抱歉客官，参与投稿不得低于五个字呦'
        });
      }else {
        wx.showLoading({
          title: '投稿中...',
          success() {
          }
        });
        let userId = wx.getStorageSync('userId');
        api.request({
          url: '/v1/post/create',
          data: {
            text: that.data.pushText,
            type: 2,
            userid: userId,
            refPostId: this.data.refPostId
          },
          method: 'POST',
          success(res) {
            let cId=res.data.id;
        
            setTimeout(() => {
              wx.hideLoading({
                success() {
                  wx.showToast({
                    title: '投稿成功！'
                  });
                  //投稿成功则清除缓存中的话题和草稿
                  wx.removeStorageSync('topic');
                  wx.removeStorageSync('draft');
                  setTimeout(() => {
                    wx.redirectTo({
                      url: `../publisher/publisher?tid=${tId}&cid=${cId}`
                    });
                  }, 200);
                }
              });

            }, 200);

          },
          fail(res) {
            console.log(res.errMsg);
          }
        });

      }
    }
  },
  
onEditText(event:any){
  // console.log(event);
  this.setData!({
    inputText:'370rpx'
  });
},
onEndEditor(event:any){
 
  this.setData!({
    inputText:'890rpx'
  });
}
,
  onLoad(options: any) {

    tId = options.tid;
    this.data.refPostId = options.tid;
   
    var that = this;
    api.request({
      url: '/v1/post/detail',
      data: {
        id: tId
      },
      method: 'GET',
      success(res) {

        that.setData!({
          topic: res.data
        });

        //缓存话题
        wx.setStorage({
          key:'topic',
          data:res.data,
          success(){
          }
        });
      },
      fail(err) {
      
      }
    });
 
  }
})
