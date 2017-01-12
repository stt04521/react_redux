/**
 * Created by Administrator on 2017/1/3.
 */
import {
    OPEN_THE_WINDOW,
    CLOSE_THE_WINDOW
} from './actionsTypes'


export  const  openPrompt=(message)=>({
  type:OPEN_THE_WINDOW,message
})

export  const  closPrompt=()=>({
    type:CLOSE_THE_WINDOW
})