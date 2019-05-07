// tslint:disable max-line-length
import { IDisLikeParams, IDisLikeResponse, IHomeTopicListParams, IHomeTopicListResponse, ILikeParams, ILikeResponse, IPostDetailParams, IPostsDetailResponse, IUserPageParams, IUserPageResponse, IGetAnswerListParams, IGetAnswerListResponse } from "./types/http_msg";

class Api {
  /**
   * 获取首页话题列表
   */
  getHomeTopicList = this.makeApi<IHomeTopicListParams, IHomeTopicListResponse>('GET', '/v1/post/home-list')


  /**
   * 
   * 根据参与id获取参与的列表
   */
  getRefPostList = this.makeApi<IGetAnswerListParams, IGetAnswerListResponse>('GET', '/v1/post/answer-list')

  /**
   * 获取投稿详情
   */
  getPost = this.makeApi<IPostDetailParams, IPostsDetailResponse>('GET', '/v1/post/detail')

  /**
   * 获取用户信息
   */
  getUser = this.makeApi<IUserPageParams, IUserPageResponse>('GET', '/v1/user/detail')

  /**
   * 点赞
   */
  giveLike = this.makeApi<ILikeParams, ILikeResponse>('POST', '/v1/post/like')

  /**
   * 取消点赞
   */
  disLike = this.makeApi<IDisLikeParams, IDisLikeResponse>('POST', '/v1/post/dislike')

  private host: string
  private token: string

  constructor(host: string) {
    this.host = host
    this.token = wx.getStorageSync('token');
  }

  init(host: string) {
    this.host = host
    this.token = wx.getStorageSync('token');
  }

  setToken(token: string) {
    wx.setStorageSync('token', token)
    this.token = token
  }

  /**
   * 为了方便的迁移 wx.requset，修改位 api.request
   */
  request(option: wx.RequestOption): wx.RequestTask {
    if (option.url[0] !== '/') {
      throw new Error('api.request: url 需要以 "/" 开头')
    }
    option.url = this.host + option.url
    option.header = option.header || {}
    const header = this.getHeader()
    for (const h in header) {
      option.header[h] = header[h]
    }
    return wx.request(option)
  }

  async httpRequest(method: 'GET' | 'POST', path: string, data: object) {
    return new Promise<wx.RequestSuccessCallbackResult>((resolve, reject) => {
      wx.request({
        method,
        url: this.host + path,
        data,
        header: this.getHeader(),
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
        }
      })
    })
  }

  httpGet(path: string, data: object = {}) {
    return this.httpRequest('GET', path, data)
  }

  httpPost(path: string, data: object = {}) {
    return this.httpRequest('POST', path, data)
  }

  private makeApi<Q extends object, R>(method: 'GET' | 'POST', path: string): (params: Q) => Promise<R> {
    return (params: Q): Promise<R> => {
      return this.httpRequest(method, path, params).then(res => res.data as R)
    }
  }

  private getHeader(): any {
    if (this.token) {
      return { Authorization: this.token }
    }
    return {}
  }

}
const api = new Api('')

export default api