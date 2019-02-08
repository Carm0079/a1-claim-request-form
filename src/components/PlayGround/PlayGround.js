export default {
  name: 'PlayGround',
  methods: {
    confirm(formName) {
      this.$refs[formName].validate(valid => {
        if (false) {
          return false
        } else if (valid) {
          // This is where user says yes or no
          this.$confirm('Are you sure?', 'Confirm', {
            distinguishCancelAndClose: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          })
            .then(() => {
              this.$message({
                type: 'info',
                message: 'Your claim request has been sent!'
              })
            })
            .catch(action => {
              this.$message({
                type: 'info',
                message: action === 'cancel' ? 'Oh okay...' : 'Moving on.'
              })
            })
        }
      })
    }
  },
  data() {
    return {
      // Form data. Holds all content written by the user.
      form: {
        firstname: '',
        lastName: '',
        email: '',
        subject: '',
        content: '',
        // Checkbox starts off unchecked because we need the confirmation form the user.
        agree: false
      },
      rules: {
        firstName: [
          {
            required: true,
            message: 'Your first name is required',
            trigger: 'blur'
          }
        ],
        lastName: [
          {
            required: true,
            message: 'Your last name is required',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: 'Your email is required',
            trigger: 'blur'
          }
        ],
        subject: [
          {
            required: true,
            message: 'A subject is required',
            trigger: 'blur'
          }
        ],
        content: [
          {
            required: true,
            message: 'Some content is required',
            trigger: 'blur'
          }
        ],
        agree: [
          {
            required: true,
            message: 'You have to agree to the terms & conditions',
            trigger: 'blur'
          }
        ]
      },
      // The default visibility of the dialog box.
      dialogVisible: false
    }
  }
}
