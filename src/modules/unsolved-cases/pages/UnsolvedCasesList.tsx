import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {useState} from "react";
import {SkeletonCardsList} from "../components/skeleton-cards-list/SkeletonCardsList.tsx";
import {UnsolvedCaseCard} from "../components/unsolved-case-card/UnsolvedCaseCard.tsx";
import {NoResultsFoundPage} from "../../../pages/NoResultsFoundPage.tsx";
import button from "../../../styles/Button.ts";
import {UnsolvedCaseForm} from "../components/unsolved-case-form/UnsolvedCaseForm.tsx";
import {useGetUnsolvedCasesList} from "../api/unresolved-case.query.ts";
import {useNavigate} from "react-router-dom";

export function UnsolvedCasesList() {
    const [isAddCaseFormOpen, setIsAddCaseFormOpen] = useState(false);
    const {data, isSuccess} = useGetUnsolvedCasesList();
    const navigate = useNavigate();

    return (
        <PageContainer scroll={true} class={"flex flex-col justify-evenly items-center"}>
            {!isSuccess && (
                <SkeletonCardsList/>
            )}
            {(isSuccess && !data.length) && (
                <NoResultsFoundPage/>
            )}
            {isSuccess && !!data.length && !isAddCaseFormOpen && (
                <article>
                    <section className={'flex justify-between pr-3'}>
                        <p className={'font-medium text-xl text-neutral-50 uppercase pb-4'}>Unsolved Cases List</p>
                        <button className={button.text} onClick={() => setIsAddCaseFormOpen(true)}>ADD CASE</button>
                    </section>
                    <section className={'h-[90%] gap-7 grid grid-cols-4 justify-evenly'}>
                        {data.map((el) => {
                            return (
                                <UnsolvedCaseCard unsolvedCase={el}
                                                  onClick={() => navigate('/unsolved-cases/' + el.id)}
                                                  key={el.id}/>
                            )
                        })}
                    </section>
                </article>
            )}
            {isAddCaseFormOpen && (
                <UnsolvedCaseForm onBackClicked={() => setIsAddCaseFormOpen(false)}/>
            )}
        </PageContainer>
    )
}
