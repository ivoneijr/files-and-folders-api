import { FileTypeEnum } from '@prisma/client'
import { z } from 'zod'

export const createFileSchema = z.object({
  type: z.enum([FileTypeEnum.NONE, FileTypeEnum.PLAIN_TEXT]),
  title: z.string({
    required_error: 'The title is required',
    invalid_type_error: 'invalid title',
  }),
  createdById: z.string(),
  folderId: z.string(),
})

export type CreateFilePayload = z.infer<typeof createFileSchema>
