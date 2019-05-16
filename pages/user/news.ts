//index.js
//获取应用实例
import { IMyApp } from '../../app';
import api from '../../common/api';
import { smartGotoPage } from '../../common/helper';
import { FontNotice } from '../../common/types/font_notice';
import { INoticeListResponese } from '../../common/types/http_msg';
import { ENoticeType, ETableType, INoticeReply } from '../../common/types/notice_reply';
import { EPostStatus } from '../../common/types/posts';

const app = getApp<IMyApp>()

Page({
  data: {
    notices: [],
    //当页面正常时
    notErr: true,
  },
  httpDataProcessing(iNotice: INoticeReply[]): FontNotice[] {
    return iNotice.map(notice => this.getFontNotice(notice))
  },
  getFontNotice(notice: INoticeReply) {
    const userId = notice.fromUsers[0].id
    const nickname = notice.fromUsers[0].nickname
    const avatar = notice.fromUsers[0].avatar
    let noticeMessage = '' //等2人赞了你的作品 || 评论了你的作品
    let title = ''
    let text = ''
    const userCount = notice.fromUsers.length
    const status = notice.status

    if (status === EPostStatus.Published) {

      //判断传入的类型是否为Post类型,post类型包含作品和话题。该判断逻辑有三种：1.点赞作品 2.评论作品 3.参与话题
      if (notice.ttype === ETableType.Post) {
        //判断是否为Post点赞
        if (notice.type === ENoticeType.Like) {
          // TODO:没有设置点赞人数,待完成--服务端 noticeservice 中的bus.on监听事件也待完成
          noticeMessage = '等' + userCount + '人赞了你的作品'
          title = notice.title
        }

        //判断是否评论了某一条作品
        if (notice.type === ENoticeType.Comment) {
          noticeMessage = '评论了你的作品'
          title = notice.title
          text = notice.text
        }

        //判断是否参与了某一个作品
        if (notice.type === ENoticeType.Attend) {
          noticeMessage = '参与了你的话题'
          title = notice.title
          text = notice.text
        }
      }

      //判断传入的类型是否为Comment评论类型,该判断逻辑目前有两种：1. 点赞评论 2.回复评论(TODO)
      if (notice.ttype === ETableType.Comment) {
        if (notice.type === ENoticeType.Like) {
          // TODO:没有设置点赞人数,待完成--服务端 noticeservice 中的bus.on监听事件也待完成
          noticeMessage = '等' + userCount + '人赞了你的评论'
          text = notice.text
        }

        if (notice.type === ENoticeType.Reply) {

        }
      }
    }

    return {
      tid: notice.tid,
      userId,
      nickname,
      avatar,
      noticeMessage,
      title,
      text,
      createAt: notice.createAt,
      userCount,
    } as FontNotice
  },

  async onLoad() {
    const token = wx.getStorageSync('token');
    const that = this
    if (token) {
      //获取用户Id
      const userId = wx.getStorageSync('userId')
      console.log({ userId })

      const data = await api.getUserNotice({})

      const notices = this.httpDataProcessing(data.notices)
      console.log('---notices----')
      console.table({ notices })

      this.setData!({
        notices,
      });
      console.log('获取notice------------------',this.data.notices);
    } else {
      wx.showToast({ title: '请先登录！' });
      setTimeout(() => {
        smartGotoPage({
          url: './../login'
        });
      }, 100)
    }

  },
  /*跳转到话题详情 */
  findTopicDetail(event: any) {
    console.log(event.target.dataset);
    const tId = event.target.dataset.tid;
    smartGotoPage({
      url: `/pages/post/topic-detail?id=${tId}`
    })
  },
  /*跳转到话题社区 */
  findOldIndex() {
    smartGotoPage({
      url: '/pages/oldindex'
    });
  },
  findUserDeail(event: any) {
    console.log('notice------------------', this.data.notices);
    const uId = event.target.dataset.uid;
    smartGotoPage({
      url: `/pages/user/detail?userId=${uId}`
    });
  }
})
