import { PageContainer } from '../../../components/page-container/PageContainer.tsx';
import { useState } from 'react';
import { SkeletonCardsList } from '../components/skeleton-cards-list/SkeletonCardsList.tsx';
import { UnsolvedCaseCard } from '../components/unsolved-case-card/UnsolvedCaseCard.tsx';
import { NoResultsFoundPage } from '../../../pages/NoResultsFoundPage.tsx';
import button from '../../../styles/Button.ts';
import { UnsolvedCaseForm } from '../components/unsolved-case-form/UnsolvedCaseForm.tsx';
import { useGetUnsolvedCasesList } from '../api/unresolved-case.query.ts';
import { useNavigate } from 'react-router-dom';

export function UnsolvedCasesList() {
  const [isAddCaseFormOpen, setIsAddCaseFormOpen] = useState(false);
  const { data, isSuccess } = useGetUnsolvedCasesList();
  const navigate = useNavigate();

  return (
    <PageContainer
      scroll={true}
      class={'flex flex-col justify-evenly items-center overflow-y-auto overflow-x-hidden'}
    >
      {!isSuccess && <SkeletonCardsList />}

      {isSuccess && !data.length && <NoResultsFoundPage />}

      {isSuccess && !!data.length && !isAddCaseFormOpen && (
        <article className="w-full px-2">
          <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <p className="font-medium text-xl text-neutral-50 uppercase">Unsolved Cases List</p>
            <button className={button.text} onClick={() => setIsAddCaseFormOpen(true)}>
              ADD CASE
            </button>
          </section>
          <section
            className="
                    grid gap-6
                    grid-cols-1
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    2xl:grid-cols-4
                "
          >
            {data.map((el) => (
              <UnsolvedCaseCard
                unsolvedCase={el}
                onClick={() => navigate('/unsolved-cases/' + el.id)}
                key={el.id}
              />
            ))}
          </section>
        </article>
      )}

      {isAddCaseFormOpen && <UnsolvedCaseForm onBackClicked={() => setIsAddCaseFormOpen(false)} />}
    </PageContainer>
  );
}
