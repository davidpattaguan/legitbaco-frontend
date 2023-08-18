import * as z from "zod"

export const UserSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(2),
  lastName: z.string(),
  age: z.string().optional(),
  gender: z.string().optional(),
  birthDate: z.string().optional(),
  address: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  role: z.enum(["PATIENT", "ADMIN", "STAFF", "DENTIST"]),
  emailVerified: z.date().optional(),
  isAccountVerified: z.boolean().optional(),
  image: z.string(),
  password: z.string().optional(),
  hashedPassword: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  patient: z.unknown().optional(),
  doctor: z.unknown().optional(),
  Account: z.unknown().array().optional(),
})

export const PatientSchema = z.object({
  id: z.string().optional(),
  notes: z.string().optional(),
  userId: z.string().optional(),
  branchIDs: z.array(z.string()).optional(),
  branches: z.unknown().optional(),
})

export const DoctorSchema = z.object({
  id: z.string().optional(),
  specialization: z.string(),
  userId: z.string().optional(),
  branchIDs: z.array(z.string()).optional(),
  branches: z.unknown().optional(),
})

export const DoctorUserSchema = z.object({
  doctor: DoctorSchema,
  user: UserSchema,
})

export const PatientUserSchema = z.object({
  patient: PatientSchema,
  user: UserSchema,
})
