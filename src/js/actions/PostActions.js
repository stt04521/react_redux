/**
 * Created by shitengteng on 2016/12/30.
 */

import {
    REQUEST_POSTS,
    DELETE_DATA,
    ACCESS_TO_LOISTICS,
    CHANGE_NOTES
} from './actionsTypes'

export const onRequestPosts = (url,data) => ({type: REQUEST_POSTS,url,data})

export const onLoisticsPosts = (url,data) => ({type: ACCESS_TO_LOISTICS,url,data})

export const onChangeNotes = (value,index) => ({type: CHANGE_NOTES,value,index})