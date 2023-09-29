import { z } from 'zod'

export const createUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name should have at least 3 characters' })
    .max(60, { message: 'The name should have max of 60 characters' }),
  email: z
    .string({
      required_error: 'The email should be a valid email',
      invalid_type_error: 'The email should be a valid email',
    })
    .email({ message: 'The email should be a valid email' }),
  password: z
    .string({
      required_error: 'The password is required',
      invalid_type_error: 'invalid password',
    })
    .min(8, { message: 'The password should have at least 8 characters' })
    .max(60, { message: 'The password should have max of 60 characters' }),
})

export type CreateUserPayload = z.infer<typeof createUserSchema>
