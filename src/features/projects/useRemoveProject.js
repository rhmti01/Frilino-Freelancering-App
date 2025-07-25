
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
    const queryClient = useQueryClient()
    const { mutate: removeProject , isPending : isDeleting} =  useMutation({mutationFn:removeProjectApi , 
    onSuccess:(data)=>{
        toast.success(data.message)
        queryClient.invalidateQueries({
            queryKey : ["owner-projects"]
        })
    } ,
    onError : (error)=>{
        toast.error(error?.response?.data?.message)
    }})
    return {removeProject , isDeleting}
}