import { axiosInstance } from "@/libs/axios"
import { useQuery } from "@tanstack/react-query"
export const usePosts = () => useQuery({
    queryKey: ["post"],
    queryFn: async () => {
        const { data } = await axiosInstance.get('/posts')
        return data
    }
})