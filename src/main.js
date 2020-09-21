import Vue from 'vue'
import App from './App.vue'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './css/myDialog.less'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('my-dialog1', {
  render: function (createElement) {
    const c = createElement
    const display = this.visible ? 'block' : 'none'
    return c(
      'div',
      {
        class:'my-dialog-container',
        style: {
          display: display,
        }
      },
      [
        c('div', {
          class:'mask',
          on:{
            click:()=>{
              this.$emit('update:visible')
            }
          }
        }),
        c('div', {
          class:'dialog-content'
        }, [
          c('div', {
            class:'header'
            }, [
            c('span', '提示'),
            c('span', [c('i', {
              class: 'el-icon-close',
              on:{
                click:()=>{
                  this.$confirm('确认关闭').then(()=>{
                    this.$emit('update:visible')
                    }
                  )
                }
              }
            })])
          ]),
          c('div', {
            class:'body'
          }, [c('p',{
          }, '这是一段信息')]),
          c('div', {
            class:'footer'
          }, [
            c(
              'el-button',
              {
                props:{
                  size:'small',
                },
                on: {
                  click: () => {
                    this.$emit('update:visible', false)
                  }
                }
              },
              '取消'
            ),
            c(
              'el-button',
              {
                props:{
                  size:'small',
                  type:'primary'
                },
                on: {
                  click: () => {
                    this.$emit('update:visible', false)
                  }
                }
              },
              '确定'
            )
          ])
        ])
      ]
    )
  },
  props: ['visible']
})

new Vue({
  render: h => h(App)
}).$mount('#app')
