/*
 * @Description: Providers allow you get something from somewhere. We will get a todo list from a RESTful API.
 * @Author: Li Qingguo
 * @Date: 2019-11-16 19:47:07
 * @FilePath: \main\providers.js
 * @Environment: Google Chrome 78.0.3904.87 Node 10.15.3
 * @LastEditor: Li Qingguo
 * @LastEditedTime: 2019-11-17 00:52:24
 */

const API_URL = 'https://jsonplaceholder.typicode.com'

export default {
    myApi: {
        getTodos() {
            return fetch(`${API_URL}/todos`).then(res => res.json());
        }
    }
}