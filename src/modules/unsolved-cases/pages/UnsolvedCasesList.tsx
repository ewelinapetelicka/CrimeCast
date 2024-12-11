import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {useEffect, useState} from "react";
import {UnsolvedCase} from "../../../models/unsolved-case.ts";
import axios, {AxiosResponse} from "axios";
import {SkeletonCardsList} from "../components/skeleton-cards-list/SkeletonCardsList.tsx";
import {UnsolvedCaseCard} from "../components/unsolved-case-card/UnsolvedCaseCard.tsx";
import {NoResultsFoundPage} from "../../../pages/NoResultsFoundPage.tsx";

export function UnsolvedCasesList() {
    const [unsolvedCases, setUnsolvedCases] = useState<UnsolvedCase[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/unsolvedCases")
            .then(function (response: AxiosResponse<UnsolvedCase[]>) {
                setUnsolvedCases(response.data);
                setLoading(false);
            })

    }, []);

    return (
        <PageContainer scroll={true} class={"flex flex-col justify-evenly items-center"}>
            <p className={'font-medium text-xl text-neutral-50 pb-4'}>UnsolvedCasesList</p>
            {loading && (
                <SkeletonCardsList/>
            )}
            {(!loading && !unsolvedCases.length) && (
                <NoResultsFoundPage/>
            )}
            {!!unsolvedCases.length && (
                <section className={'h-[90%] gap-7 grid grid-cols-4 justify-evenly'}>
                    {unsolvedCases.map((el) => {
                        return (
                            <UnsolvedCaseCard unsolvedCase={el}/>
                        )
                    })}
                </section>
            )}
        </PageContainer>
    )
}
