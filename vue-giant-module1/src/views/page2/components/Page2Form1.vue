<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <ncform
          ref="ncForm"
          v-model="formSchema.value"
          :form-schema="formSchema"
          :form-name="formSchema.name"
        />
      </el-col>
      <el-col :span="12">
        <vue-json-editor
          v-model="formSchema.value"
          :expanded-on-start="true"
          :mode="'view'"
          copyable
          boxed
          sort
          :show-btns="false"
        ></vue-json-editor>
      </el-col>
    </el-row>
    <div class="a-layout-row">
      <SubmitButton @submit="submitForm">提交</SubmitButton>
      <el-button @click="resetForm">重置</el-button>
    </div>
  </div>
</template>

<script>
import VueJsonEditor from 'vue-json-editor'
import SubmitButton from '@/components/SubmitButton'
const ComponentName = 'Page2Form1'

export default {
  name: ComponentName,
  components: {VueJsonEditor, SubmitButton},
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
          },
          colors: {
            'type': 'array',
            'ui': {
              'widget': 'checkbox',
              'widgetConfig': {
                'enumSource': [
                  {
                    'value': 1,
                    'label': 'red'
                  },
                  {
                    'value': 2,
                    'label': 'green'
                  },
                  {
                    'value': 3,
                    'label': 'blue'
                  }
                ]
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
