import ncformCommon from '@ncform/ncform-common'
import {checkIdNumberValid} from '@/components/CusFormRules/idValidator'

class IdValidatorRule extends ncformCommon.ValidationRule {
  constructor(props) {
    super(props)
    this.name = 'idValidator' // your rule name
    this.defaultErrMsg = 'yeah, show my custom rule message' // you rule default error message tips
  }

  validateLogic(val, ruleVal) {
    // val: the input value for validating
    // ruleVal: rule's value. example: {maxLength: {value: 1}}, the ruleVal's value here is 1
    // You can change the error message programmatically by setting this.errMsg. (e.g. this.errMsg = 'There are some errors')
    // You can use this.$http to make some http request (this.$http is the same as axios)
    return checkIdNumberValid(val)
    // or return new Promise(resolve => resolve(true))
  }
}

export default IdValidatorRule
