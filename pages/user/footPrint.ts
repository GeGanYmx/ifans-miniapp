//index.js
//获取应用实例
import { IMyApp } from '../../app';
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';

const app = getApp<IMyApp>()
let cursor: number = 0;
Page({
  data: {
    topic: null,
    postArr: [],
    title: '',
    userId: null,
    //当页面正常时
    notErr:true,
    res:[
      {
        title:'樱花季节到了，你想和谁一起去赏花呢?',
        createAt:'2019/05/03'
      },
      {
        title:'如果你要写一本书，书名会是什么？',
        createAt:'2019/05/03'
      },
      {
        title:'樱花季节到了，你想和谁一起去赏花呢?',
        createAt:'2019/05/03'
      },
      {
        title:'如果你要写一本书，书名会是什么？',
        createAt:'2019/05/03'
      },
      {
        title:'抗日英雄！',
        createAt:'2019/05/03'
      },
      {
        title:'众多人物最喜欢的动漫以及以前的童话世界，包括喜爱的人物和神兽',
        createAt:'2019/05/03'
      }
    ]
  },
  async onLoad(options: any) {

    const id = options.userId
    console.log('footPrint.ts', options.userId)

    const that = this;

    //todo 获取缓存的路由------>
    const data = await api.getFootPrint({  })
    console.table(data)
    if (data.posts.length !== 0) {
      that.setData!({
        postArr: that.data.postArr.concat(data.posts)
      });
      console.log('输入的postArr------',that.data.postArr);
      cursor = data.cursor
      wx.hideLoading({});
    } else {
      wx.hideLoading({});
      wx.showToast({
        icon: 'none',
        title: '已经到底了！'
      })
    }

  },
   /*跳转到话题社区 */
   findOldIndex(){
    smartGotoPage({
      url:'../oldindex'
    });
  }

})