<template>
  <div>
    <!-- Form for the user to send a claim request -->
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <!-- Input field for the user to insert their first name -->
      <el-form-item label="First Name" prop="firstName">
        <el-input placeholder="John" v-model="form.firstName" clearable></el-input>
      </el-form-item>
      <!-- Input field for the user to insert their last name -->
      <el-form-item label="Last Name" prop="lastName">
        <el-input placeholder="Doe" v-model="form.lastName" clearable></el-input>
      </el-form-item>
      <!-- Input field for the user to insert their email -->
      <el-form-item label="Email" prop="email">
        <el-input placeholder="email@example.com" v-model="form.email" clearable></el-input>
      </el-form-item>
      <!-- Input field for the user to type down the subject of the message -->
      <el-form-item label="Subject" prop="subject">
        <el-input placeholder="Example" v-model="form.subject" clearable></el-input>
      </el-form-item>
      <!-- Text area for the user to type the message -->
      <el-form-item label="Content" prop="content">
        <el-input placeholder="Type here" type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <!-- Boolean checkbox for the user to agree to terms -->
      <el-form-item prop="agree">
        <el-checkbox label="I agree to the terms & conditions" v-model="form.agree"></el-checkbox>
      </el-form-item>
      <!-- Submit button triggers the boolean of the dialogVisibility data return -->
      <el-form-item>
        <el-button type="primary" @click="dialogVisible = true">Submit Form</el-button>
      </el-form-item>
    </el-form>
    <!-- Dialog box for confirmation of the submission -->
    <el-dialog title="Confirmation" :visible.sync="dialogVisible" width="30%">
      <span>Submit Request Form?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./PlayGround.js"></script>
<style src="./PlayGround.css" scoped></style>
