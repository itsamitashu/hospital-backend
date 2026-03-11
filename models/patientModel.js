const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({

 fullName:{
  type:String,
  required:true
 },

 email:{
  type:String,
  required:true,
  unique:true
 },

 phone:{
  type:String,
  required:true
 },

 age:{
  type:Number,
  min:1
 },

 gender:String,

 disease:{
  type:String,
  required:true
 },

 doctorAssigned:{
  type:String,
  required:true
 },

 admissionDate:Date,

 roomNumber:String,

 patientType:String,

 status:{
  type:String,
  default:"Admitted"
 }

})

module.exports = mongoose.model("Patient",patientSchema)