/*
 * @Description: An cerebral app which contains states, sequences and providers. When you import module 'main', it will import this file by default.
 * @Author: Li Qingguo
 * @Date: 2019-11-16 19:43:22
 * @FilePath: \main\index.js
 * @Environment: Google Chrome 78.0.3904.87 Node 10.15.3
 * @LastEditor: Li Qingguo
 * @LastEditedTime: 2019-11-17 00:52:31
 */
import providers from './providers'
import sequences from './sequences'
import state from './state'

export default {
    state,
    sequences,
    providers
}