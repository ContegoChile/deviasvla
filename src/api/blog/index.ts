import type { Post } from 'src/types/blog';
import { deepCopy } from 'src/utils/deep-copy';

import { lawyers, posts } from './data';

type GetPostsRequest = object;

type GetPostsResponse = Promise<Post[]>;

type GetPostRequest = object;

type GetPostResponse = Promise<Post>;

class BlogApi {
  getPosts(request: GetPostsRequest = {}): GetPostsResponse {
    return Promise.resolve(deepCopy(posts));
  }

  getPost(request?: GetPostRequest): GetPostResponse {
    return Promise.resolve(deepCopy(lawyers));
  }
}

export const blogApi = new BlogApi();
