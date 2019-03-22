import mock from './mock'
import {
  IHomeTopicListParams,
  IHomeTopicListResponse,
  IPostDetailParams,
  IPostDetailResponse,
  IPostPublishParams,
  IPostPublishResponse,
  ITopicDetailParams,
  ITopicDetailResponse,
  IUserPageParams,
  IUserPageResponse,
} from './types/http_msg'

export default {
  /**
   * 获取首页话题列表
   */
  getHomeTopicList: async (params: IHomeTopicListParams): Promise<IHomeTopicListResponse> => {
    return {
      cursor: Math.random() > 0.3 ? (params.cursor || 0) + 10 : 0,
      posts: mock.repeat(10, mock.post),
    }
  },
  /**
   * 获取投稿详情
   */
  getPost: async (params: IPostDetailParams): Promise<IPostDetailResponse> => {
    return mock.post(params.id)
  },
  /**
   * 获取话题详情
   */
  getTopic: async (params: ITopicDetailParams): Promise<ITopicDetailResponse> => {
    return {
      hasMore: Math.random() > 0.5,
      posts: mock.repeat(10, mock.post),
      topic: mock.post(params.id),
    }
  },
  /**
   * 获取用户信息
   */
  getUser: async (params: IUserPageParams): Promise<IUserPageResponse> => {
    return {
      user: mock.user(params.id),
    }
  },
  /**
   * 发布话题/投稿
   */
  publishPost: async (params: IPostPublishParams): Promise<IPostPublishResponse> => {
    return mock.post()
  },
}