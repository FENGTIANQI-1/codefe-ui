<template>
  <div id="app">
    <!-- <cf-button type="success">按钮</cf-button>
    <cf-button type="info" disabled>删除</cf-button>
    <cf-button plain type="info">删除</cf-button>
    <cf-button plain round type="info">删除</cf-button>
    <cf-button plain circle type="info">除</cf-button>

    <cf-button icon="icon-auto" type="success">你好</cf-button>
    <cf-button icon="icon-auto" type="info"></cf-button>
    <cf-button icon="icon-auto" plain type="info"></cf-button>
    <cf-button icon="icon-auto" plain round type="info"></cf-button>
    <cf-button icon="icon-auto" disabled plain circle type="info"></cf-button> -->
    <!-- <cf-dialog title="提示" :visible.sync="visible">
      <template v-slot:footer>
        <cf-button>确定</cf-button>
      </template>
    </cf-dialog>
    <cf-button @click="visible = true">确定</cf-button> !-->

    <!-- <cf-input
      placeholder="请输入内容"
      v-model="username"
      clearable
      id="cf-inputs"
    ></cf-input>

    <cf-input
      placeholder="请输入内容"
      v-model="username"
      id="cf-inputs"
      showPassword
    ></cf-input> -->

    <!-- <cf-switch
      activeColor="red"
      inactiveColor="green"
      v-model="active"
    ></cf-switch> -->

    <!-- <cf-radio label="0" v-model="active">男</cf-radio>
    <cf-radio label="1" v-model="active">女</cf-radio>

    <cf-radio-group v-model="active">
      <cf-radio label="0">男</cf-radio>
      <cf-radio label="1">女</cf-radio>
    </cf-radio-group> -->
    <!-- 
    <cf-checkbox v-model="active"></cf-checkbox>

    <cf-checkbox-group v-model="hoby">
      <cf-checkbox label="打球"></cf-checkbox>
      <cf-checkbox label="洗澡"></cf-checkbox>
      <cf-checkbox label="打麻将"></cf-checkbox>
    </cf-checkbox-group> -->

    <cf-link href="https://element.eleme.io">默认链接</cf-link>

    <!-- <cf-page-header @back="goBack" content="详情页面"></cf-page-header> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "21",
      active: false,
      hoby: ["打球", "洗澡"],
    };
  },
  methods: {
    goBack() {
      console.log("go back");
    },
  },
};
</script>

<style lang="scss" scope>
#cf-inputs {
  width: 30%;
}
</style>
