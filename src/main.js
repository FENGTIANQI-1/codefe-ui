import Vue from 'vue'
import App from './App.vue'
import store from './store'
import codeFe from './components'
// import CfButton from './components/Button.vue'
// import CfDialog from './components/Dialog.vue'
// import CfInput from './components/Input'
// import CfSwitch from './components/Switch'
// import CfRadio from './components/Radio'
// import CfRadioGroup from './components/RadioGroup'
// import CfCheckbox from './components/Checkbox'
// import CfCheckboxGroup from './components/CheckboxGroup'
// import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.use(codeFe)

// Vue.component(CfButton.name, CfButton)
// Vue.component(CfDialog.name, CfDialog)
// Vue.component(CfInput.name, CfInput)
// Vue.component(CfSwitch.name, CfSwitch)
// Vue.component(CfRadio.name, CfRadio)
// Vue.component(CfRadioGroup.name, CfRadioGroup)
// Vue.component(CfCheckbox.name, CfCheckbox)
// Vue.component(CfCheckboxGroup.name, CfCheckboxGroup)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
