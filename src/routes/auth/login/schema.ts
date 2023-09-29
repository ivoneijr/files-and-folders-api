import { z } from 'zod'

export const loginSchema = z.object({
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
})

export type LoginPayload = z.infer<typeof loginSchema>
