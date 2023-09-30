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
  path: z.string().optional(),
})

export const uploadFileSchema = z.object({
  file: z.any({
    required_error: 'The file is required',
    invalid_type_error: 'invalid file',
  }),
  createdById: z.string({
    required_error: 'The createdById is required',
    invalid_type_error: 'invalid createdById',
  }),
  folderId: z.string({
    required_error: 'The folderId is required',
    invalid_type_error: 'invalid folderId',
  }),
})

export type CreateFilePayload = z.infer<typeof createFileSchema>
