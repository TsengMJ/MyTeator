<script>
export default {
  name: "Mixin",
  methods: {
    showDuplicatedAccountEmail() {
      this.alert = this.alerts.duplicate_email
      this.showAlert()
    },

    showWrongFormatAlert() {
      this.alert = this.alerts.wrong_format
      this.showAlert()
    },

    showInvalidLoginAlert() {
      this.alert= this.alerts.invalid_login
      this.showAlert()
    },

    showAlert() {
      this.isAlertVisible = true
      setTimeout(() => this.isAlertVisible = false, 5000)
    },
  },
  computed: {
    visible: () => ({visibility: 'initial'}),
    invisible: () => ({visibility: 'hidden'})
  },
  data() {
    return {
      input_rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        password_length: value => value.length > 6 || 'Password Should more than 6 words',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      alerts: {
        wrong_format: {
          type: 'error',
          text: '輸入格式錯誤'
        },
        duplicate_email: {
          type: 'error',
          text: '此信箱已經申請過'
        },
        invalid_login: {
          type: 'error',
          text: '錯誤帳號或密碼'
        }
      },
      alert: {
        type: 'error',
        text: '',
      },
      isAlertVisible: false
    }
  }
}
</script>


