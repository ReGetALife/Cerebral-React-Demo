/*
 * @Description: Action can change state or props. when you return an object, it will be automatically merged into props. Actions can be created by factories.
 * @Author: Li Qingguo
 * @Date: 2019-11-16 19:54:10
 * @FilePath: \main\actions.js
 * @Environment: Google Chrome 78.0.3904.87 Node 10.15.3
 * @LastEditor: Li Qingguo
 * @LastEditedTime: 2019-11-17 00:56:58
 */


export const getTodos = ({ myApi }) => {
    return myApi.getTodos().then(todos => {
        return { todos }
    })
}