/**
 * Created by shitengteng on 2016/12/30.
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actionsTypes'

export const onRequestPosts = (url,data) => ({type: REQUEST_POSTS,url,data})
export const onReceivePosts = (post) => ({
    type: RECEIVE_POSTS,
    posts
})