import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {useParams} from "react-router-dom";
import {useGetUnsolvedCaseDetails} from "../api/unresolved-case.query.ts";

export function UnsolvedCaseDetails() {
    const {id} = useParams();
    const {data, isSuccess} = useGetUnsolvedCaseDetails(id!);
    
    if (!isSuccess) {
        return;
    }

    return (
        <PageContainer class={''} scroll={true}>
            <p>{data.caseName}</p>
        </PageContainer>
    )
}