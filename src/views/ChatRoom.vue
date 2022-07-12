<template>
<div id="room" style="height: 100%;width: 100%">
  <el-row style="height: 100%">
    <el-col :xs="0" :sm="0" :md="4" :lg="4" :xl="5"></el-col>
    <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="14">
      <div id="main" style="background-color:#e9e9eb;height: 100%" >
        <Message v-for="item in messages" :body="item"></Message>
      </div>
    </el-col>
    <el-col :xs="0" :sm="0" :md="4" :lg="4" :xl="5"></el-col>

  </el-row>

</div>
</template>

<script>
import Message from "@/components/Message";
export default {
  name: "ChatRoom",
  data(){
    return{
      wsUrl: 'ws://localhost:8081/api/pushMessage/2', // ws地址
      websock: null, // ws实例
      messages:[{type:2,avatar:"",name:"test",content:"埃松离合发动四对此进行了子女喀什酱豆腐深刻搭街坊不和你说了肯定就方便"}
      ,{type:2,avatar:"",name:"test",content:"safsdfsdfasfsdfsdaf"}
      ,{type:1,avatar:"",name:"test",content:"受到了返回南京临时卡技能从零开始搭建你腊斯克和南非的离开技术的"}
      ,{type:1,avatar:"",name:"test",content:"阿萨打破电视剧old妇女程序i可接受的和v哦呜士大夫士大夫士大夫士大夫"}
      ,{type:2,avatar:"",name:"test",content:"阿斯顿士大夫色戒麦当劳反馈你说的李开复你说的李开复"}
      ,{type:1,avatar:"",name:"test",content:"阿三弗兰克是的子女old反收购i骚扰电话送i的哈佛收到了符合你说的发生的"}
      ,{type:1,avatar:"",name:"test",content:"；啊商家动力撒低级能否哦阿姐跑程序将哦i是哦i地方山东金佛山到了内发生的"}
      ,{type:1,avatar:"",name:"test",content:"ldskhfnlsdjmnlvsdg165sf4vsd31v6es8ed4g65sdv1"}]
    }
  },
  components: {
    Message,
  },
  mounted() {
    this.initWebSocket()
  },
  destroyed() {
    // 离开路由之后断开websocket连接
    this.websock.close()
  },
  methods:{
    handleAvatarSuccess(res, file) {
      let mes={type:"2",msg:res,time:"2022.7.12",name:"my",avatar:"aa"};
      this.messages.push(mes)
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 20;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    // 初始化weosocket
    sednMsg(){
      let message={msg:this.msg,toUserId:'22'}
      this.websocketsend(JSON.stringify(message))
    },
    initWebSocket() {
      if (typeof WebSocket === 'undefined')
        return console.log('您的浏览器不支持websocket')
      this.websock = new WebSocket(this.wsUrl)

      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonopen() {
      // 连接建立之后执行send方法发送数据
      // let actions = { test: 'test' }
      // this.websocketsend(JSON.stringify(actions))
    },
    websocketonerror() {
      // 连接建立失败重连
      this.initWebSocket()
    },
    websocketonmessage(e) {
      // 数据接收
      console.log(e)
      const redata = e.data
      console.log('接收的数据', redata)
    },
    websocketsend(Data) {
      // 数据发送
      this.websock.send(Data)
    },
    websocketclose(e) {
      // 关闭
      console.log('断开连接', e)
    },
  }
}
</script>

<style scoped>

</style>