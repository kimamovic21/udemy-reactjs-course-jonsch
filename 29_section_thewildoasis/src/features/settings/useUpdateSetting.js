import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from 'react-hot-toast';

export const useUpdateSetting = () => {
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success('Setting successfully updated');
            queryClient.invalidateQueries({ 
                queryKey: ['settings'],
            });
        },
        onError: (error) => toast.error(error.message),
    })

    return { isUpdating, updateSetting };
};