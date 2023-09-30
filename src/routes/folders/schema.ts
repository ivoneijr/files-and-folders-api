import { z } from 'zod'

export const createFolderSchema = z.object({
  title: z
    .string({
      required_error: 'The title is required',
      invalid_type_error: 'invalid title',
    })
    .min(3, { message: 'The title should have at least 3 characters' })
    .max(20, { message: 'The title should have max of 20 characters' }),
  userId: z.string().optional(),
  parentId: z.string().optional(),
})

export type CreateFolderPayload = z.infer<typeof createFolderSchema>
