import {useMutation, useQuery} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";
import {UnsolvedCase, UnsolvedCaseDTO} from "../../../models/unsolved-case.ts";

export const UNRESOLVED_CASES_KEY = 'unresolvedCases';

export const useGetUnsolvedCasesList = () => useQuery({
    queryKey: [UNRESOLVED_CASES_KEY],
    queryFn: () => axios.get("http://localhost:8000/unsolvedCases"),
    select: (data: AxiosResponse<UnsolvedCase[]>) => data.data
})

export const useGetUnsolvedCaseDetails = (id: string) => useQuery({
    queryKey: [UNRESOLVED_CASES_KEY, id],
    queryFn: () => axios.get<UnsolvedCase>("http://localhost:8000/unsolvedCases/" + id),
    select: (data: AxiosResponse<UnsolvedCase>) => data.data
})

export const usePostUnresolvedCase = () => useMutation({
    mutationKey: [UNRESOLVED_CASES_KEY],
    mutationFn: (unsolvedCase: UnsolvedCaseDTO) => axios.post('http://localhost:8000/unsolvedCases', unsolvedCase)

})