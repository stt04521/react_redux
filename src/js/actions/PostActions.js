/**
 * Created by shitengteng on 2016/12/30.
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    DELETE_DATA,
    SELECT_SUBREDDIT
} from './actionsTypes'

export const onRequestPosts = (url,data) => ({type: REQUEST_POSTS,url,data})
export const onDeleteData = (id,source) => ({
    type: DELETE_DATA,
    id,
    source
})
