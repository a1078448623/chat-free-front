<template>
  <div v-if="body.type===1||body.type===3" id="msg_other" style="margin-left: 10px;padding-top: 10px">
    <div id="avatar_other">
      <el-avatar v-if="body.avatar===''" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-avatar v-else :src="body.avatar"></el-avatar>
    </div>
    <div id="right_part_other" style="margin-right: 30px">
      <div id="show_name_other">{{body.name}}</div>
      <div id="content_other">
        <div v-if="body.type===1||body.type===2" style="margin: 15px;font-size:18px;max-width: 500px;word-wrap: break-word;word-break: break-all;">
          {{body.content}}</div>
        <img v-else :src="body.content">
      </div>
    </div>
  </div>
  <div v-else id="msg_my" style="margin-right: 10px;padding-top: 10px">
    <div id="avatar_my">
      <el-avatar v-if="body.avatar===''" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-avatar v-else :src="body.avatar"></el-avatar>
    </div>
    <div id="right_part_my">
      <div id="show_name_my">{{body.name}}</div>
      <div id="content_my" style="margin-left:30px;">
        <div v-if="body.type===1||body.type===2"
             style="margin: 15px;font-size:18px;max-width: 500px;word-wrap: break-word;word-break: break-all;color: white;text-align: left">
          {{body.content}}</div>
        <img v-else :src="body.content">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Message",
  props:{
    body:Object
  }
}
</script>

<style scoped>
#avatar_other{
  float: left;
  margin-top: 15px;
}
#avatar_my{
  float: right;
  margin-top: 15px;
}
#right_part_other{
  margin-left: 50px;
}
#right_part_my{
  text-align: right;
  margin-right: 50px;
}
#show_name_other{
  margin-left: 5px;
}
#show_name_my{
  text-align: right;
  margin-right: 5px;
}
#content_other{
  position: relative;
  display: inline-block;
  min-height: 50px;
  width: auto;
  border-radius: 10px ;
  background-color:  white;

}
#content_other:before{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  left: -20px;
  top: 10px;
  border: 10px solid #000;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color:  white;
}
#content_my{
  position: relative;
  display: inline-block;
  min-height: 50px;
  width: auto;
  border-radius: 10px ;
  background-color:   #79bbff;

}
#content_my:before{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  right: -20px;
  top: 10px;
  border: 10px solid #000;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color:  #79bbff;
  border-right-color:  transparent;
}
</style>