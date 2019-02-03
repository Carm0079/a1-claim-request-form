export default {
  name: 'PlayGround',
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
        firstName: [{
          required: true,
          message: 'Your first name is required',
          trigger: 'blur'
        }],
        lastName: [{
          required: true,
          message: 'Your last name is required',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Your email is required',
          trigger: 'blur'
        }],
        subject: [{
          required: true,
          message: 'A subject is required',
          trigger: 'blur'
        }],
        content: [{
          required: true,
          message: 'Some content is required',
          trigger: 'blur'
        }],
        agree: [{
          required: true,
          message: 'You have to agree to the terms & conditions',
          trigger: 'change'
        }]
      },
      // The default visibility of the dialog box.
      dialogVisible: false
    }
  }
}