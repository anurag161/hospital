import mongoose from "mongoose";
const { Schema, models } = mongoose;

const hospitalSchema = new Schema(
  {
    hospitalName: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    registrationDate: {
      type: String,
    },
    numberOfAmbulances: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,

      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    hospitalRegistrationNumber: {
      type: String,
      required: true,
      unique: true,
      default: "null",
    },
    emergencyWardNumber: {
      type: String,
      required: true,
      default: "000",
    },
    registrationCertificationPortal: {
      type: String,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
  },
  { timestamps: true }
);

const Hospital = models.Hospital || mongoose.model("Hospital", hospitalSchema);

export default Hospital;
