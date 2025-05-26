import {useMutation, useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import instance from "./axios-instance";

export const AUTH_LOGGED_USER_KEY = 'authLoggedUser';

export const AUTH_LOGIN_USER_KEY = "authLoginUser";

export const useGetAuthLoggedUser = () => useQuery({
    queryKey: [AUTH_LOGGED_USER_KEY],
    queryFn: () => instance.get<{ firstName: string, lastName: string }>('https://dummyjson.com/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    }),
    select: (data) => {
        return {
            firstName: data.data.firstName,
            lastName: data.data.lastName
        }
    },
    enabled: !!localStorage.getItem('token')
})

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: [AUTH_LOGIN_USER_KEY],
        mutationFn: (user: {
            username: string,
            password: string
        }) => instance.post('https://dummyjson.com/auth/login', user),
        onSuccess: (response) => {
            navigate("/serial-killers");
            localStorage.setItem('token', response.data.accessToken)
        }
    })
}