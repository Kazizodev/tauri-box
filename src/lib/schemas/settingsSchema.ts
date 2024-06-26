import { z } from 'zod'

const settingsSchema = z.object({
    port: z.number(),
    id: z.number().optional(),
    ip: z.string().min(7, 'IP must be at least 7 characters long.'),
})

export default settingsSchema
