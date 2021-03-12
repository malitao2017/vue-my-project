<template>
  <div>
    <h1>{{ msg }}</h1>
    <a @click="indexView" >
    返回主页面
    </a>
    <h2>贵州算法运算结果</h2>
    <ul>
      <li>
        <a
          @click="cacheOutFlowAndLevel"
          target="_blank"
        >
          获得一次
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// axios:
// 脚手架的安装：
// cd /d D:\work\IDEA\IdeaTest\VUE\vue-my-project
// npm install axios
// 常见用法1：
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
// 常见用法2：
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

export default {
  name: 'Test1CORS',
  data () {
    return {
      msg: '测试：跨域资源共享 CORS 详解'
    }
  },
  methods: {
    // 贵州算法：预测水位，使用缓存
    indexView () {
      this.$router.push('/')
    },
    cacheOutFlowAndLevel () {
      // let URL = 'http://127.0.0.1:8888/cache/outFlowAndLevel'
      let URL = 'http://172.16.95.235:8888/cache/outFlowAndLevel'
      let data = null
      let msg = '成功'
      axios.request({
        url: URL,
        method: 'get', // get post put delete patch head
        data: data
      }).then(response => {
        let rev = response
        console.log('返回值为：')
        console.log(rev)
        alert(msg)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  /*定义文本下的一条线*/
  text-decoration:underline;
  /*变成小手*/
  cursor:pointer;
}
</style>
