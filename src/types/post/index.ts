import z from "zod"

export const postScheme = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string()
})

export type Post = z.infer<typeof postScheme>