import CfButton from "./Button.vue";
import CfDialog from "./Dialog.vue";
import CfInput from "./Input.vue";
import CfSwitch from "./Switch.vue";
import CfRadio from "./Radio.vue";
import CfRadioGroup from "./RadioGroup.vue";
import CfCheckbox from "./Checkbox.vue";
import CfCheckboxGroup from "./CheckboxGroup.vue";
import CfForm from "./Form.vue";
import CfFormItem from "./FormItem.vue";
import CfLink from "./Link.vue";
import CfPageHeader from "./PageHeader.vue";
import './fonts/iconfont.css'

const components = [
  CfButton,
  CfDialog,
  CfInput,
  CfSwitch,
  CfRadio,
  CfRadioGroup,
  CfCheckbox,
  CfCheckboxGroup,
  CfForm,
  CfFormItem,
  CfLink,
  CfPageHeader
]
const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name,item)
  })
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {install}