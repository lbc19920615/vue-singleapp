<template>
  <div>
    <ncform
      ref="ncForm"
      v-model="formSchema.value"
      :form-schema="formSchema"
      :form-name="formSchema.name"
    />
    <div class="a-layout-row">
      <SubmitButton @submit="submitForm">提交</SubmitButton>
      <el-button @click="resetForm">重置</el-button>
    </div>
  </div>
</template>

<script>
import SubmitButton from '@/components/SubmitButton'
const ComponentName = 'Page2Form1'

export default {
  name: ComponentName,
  components: {SubmitButton},
  data() {
    return {
      formSchema: {
        value: {},
        name: ComponentName + 'Form',
        type: 'object',
        properties: {
          propString: {
            type: 'string',
            ui: {
              label: 'String'
            },
            rules: {
              required: {
                value: true,
                errMsg: '必填'
              }
            }
          },
          propIdCard: {
            type: 'string',
            ui: {
              label: '身份证'
            },
            rules: {
              idValidator: {
                value: true,
                errMsg: '身份证号输入错误'
              }
            }
          }
        }
      }
    }
  },
  methods: {
    submitForm() {
      this.$ncformValidate(this.formSchema.name, function(data) {
        this.$log.info(data)
      })
    },
    resetForm() {
      this.$ncformReset(this.formSchema.name)
    }
  }
}
</script>

<style scoped>

</style>
