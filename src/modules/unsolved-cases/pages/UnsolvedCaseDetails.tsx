import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {UnsolvedCase} from "../../../models/unsolved-case.ts";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";

export function UnsolvedCaseDetails() {
    const [unsolvedCase, setUnsolvedCase] = useState<UnsolvedCase>();
    const {id} = useParams();


    useEffect(() => {
        axios.get("http://localhost:8080/unsolvedCases/" + id)
            .then(function (response: AxiosResponse<UnsolvedCase>) {
                setUnsolvedCase(response.data)
            })
    }, []);

    if (!unsolvedCase) {
        return;
    }

    return (
        <PageContainer class={''} scroll={true}>
            <p>{unsolvedCase.caseName}</p>
        </PageContainer>
    )
}