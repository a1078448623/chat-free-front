<template >
<!--  <img alt="Vue logo" src="./assets/logo.png">-->

<!--&lt;!&ndash;  <HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
<!--  <Message v-for="item in messages" :body="item"></Message>-->
<!--  <el-upload-->
<!--      class="upload-demo"-->
<!--      action="http://localhost:8081/img/upload"-->
<!--      :show-file-list="false"-->
<!--      :on-success="handleAvatarSuccess"-->
<!--      :before-upload="beforeAvatarUpload"-->
<!--  >-->
<!--    <el-button type="primary">Click to upload</el-button>-->
<!--  </el-upload>-->
  <ChatRoom></ChatRoom>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {RSAEnc,RSADec} from "@/utils/RsaUtil";
import {post,get} from "@/utils/Network";
import Message from "@/components/Message";
import ChatRoom from "@/views/ChatRoom";

export default {
  name: 'App',
  data() {
    return {
      wsUrl: 'ws://localhost:8081/api/pushMessage/2', // ws地址
      websock: null, // ws实例
      msg:"",
      messages:[]
    }
  },
  components: {
    ChatRoom,
    Message,
    HelloWorld
  },
  mounted() {
    let pk="-----BEGIN PUBLIC KEY-----"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtZ3uXfLovLh0NrqbKm8HGxygH8JeLHcX7+6liPip/8UmY6xbGgN8lIu+rZyJ++kdU4wF82Fj7YLKecrDeO6Iz25fvirUxzecNJpyAqsyDfbcnialgpGzg7EYCu9AHI/Hjv6Uk/2CtSVdcfBtMFtVAPrM2NSHPSDKy0covJTThHQIDAQAB"+"-----END PUBLIC KEY-----";
    let sk="-----BEGIN RSA PRIVATE KEY-----"+"MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAK1ne5d8ui8uHQ2upsqbwcbHKAfwl4sdxfv7qWI+Kn/xSZjrFsaA3yUi76tnIn76R1TjAXzYWPtgsp5ysN47ojPbl++KtTHN5w0mnICqzIN9tyeJqWCkbODsRgK70Acj8eO/pST/YK1JV1x8G0wW1UA+szY1Ic9IMrLRyi8lNOEdAgMBAAECgYA7Oc0MwJ0W4DksIyr0qJ5Wtk8F5zbbXR/yINKJq5H4gQESKbltszaECJqzgFZX6EPUynQHoB1EPpLDa4jdXqDXY3VSLgHGlnEh3ceTIdu/IiPPVTUCfFWKxXvDx5v/Ww/Ti715rxNuc5eMJubKAhyY20zelYBgtmRp0QJUTf0IQQJBAPnKV5f/248N0a7ENcZUildDxhW+ieOZqGIVTpWSTYHdLCfILIG75Q0WYYfLza+BBQp29IFq6aQNqAyUmrov6ncCQQCxtwWFDarf+PonZ76dqkiXUg9fAc6vtyR30RP/FZI1wvABEcrIhMmecx80I7/PvVLm8vLOoCKuhDGAcy+WjiILAkEA0lGxsTToHCpJi/p/QK/8D3/sMHDPT0kYwwUntr6J7jdYr2JXPyECuiNHGXzbgdODeA0y0ClB8jThcz5IjU48/wJAXFRrQLpeGakgRlLHHOD4f+25YLHusSokfz+X9QI/CUFzMgsNYOpkWbcT8iHUqNiC9swoTCO0gRjbIxI1GjJUCw" +
        "JAAewKM4TvwZNXPUqDPju76KsZc0CYdsLKLsC9zDFYSUrhSBxD2uA5X5AzwA+nIol+QybnU8FlkBnD+5XvsTTnZA=="+"-----END RSA PRIVATE KEY-----";
    let rsaEnc = RSAEnc(pk,"message");
    let rsaDec = RSADec(sk,rsaEnc);
    console.log(rsaEnc)
    console.log(rsaDec)
  },
  methods: {

  },
}
</script>

<style>
body,#app {
  height: 100vh;
  margin: 0 !important;
  padding: 0!important;
}
</style>
