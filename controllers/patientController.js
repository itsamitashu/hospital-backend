const Patient = require("../models/patientModel")

exports.createPatient = async(req,res)=>{

 try{

  const patient = new Patient(req.body)

  await patient.save()

  res.status(201).json(patient)

 }

 catch(err){

  res.status(400).json({error:err.message})

 }

}

exports.getPatients = async(req,res)=>{

 const patients = await Patient.find()

 res.status(200).json(patients)

}

exports.getPatientById = async(req,res)=>{

 const patient = await Patient.findById(req.params.id)

 if(!patient)
 return res.status(404).json({msg:"Not found"})

 res.json(patient)

}

exports.updatePatient = async(req,res)=>{

 const patient = await Patient.findByIdAndUpdate(
 req.params.id,
 req.body,
 {new:true}
 )

 res.json(patient)

}

exports.deletePatient = async(req,res)=>{

 await Patient.findByIdAndDelete(req.params.id)

 res.json({msg:"Patient deleted"})

}

exports.searchPatient = async(req,res)=>{

 const name = req.query.name

 const patients = await Patient.find({
 fullName:{$regex:name,$options:"i"}
 })

 res.json(patients)

}