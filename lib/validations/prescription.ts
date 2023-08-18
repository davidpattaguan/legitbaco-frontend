import { z } from "zod"

export const PrescriptionSchema = z.object({
  id: z.string().optional(),
  dateOfPrescription: z.coerce
    .date()
    .default(() => new Date())
    .optional(),
  medicine: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.coerce
    .date()
    .default(() => new Date())
    .optional(),
  updatedAt: z.coerce.date().optional(),
  patient: z.string().optional(),
  doctor: z.string().optional(),
  patientId: z.string().optional(),
})

export type Prescription = z.infer<typeof PrescriptionSchema>
