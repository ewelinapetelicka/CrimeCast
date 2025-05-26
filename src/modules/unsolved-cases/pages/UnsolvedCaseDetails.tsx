import { PageContainer } from '../../../components/page-container/PageContainer.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUnsolvedCaseDetails } from '../api/unresolved-case.query.ts';

export function UnsolvedCaseDetails() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUnsolvedCaseDetails(id!);
  const navigate = useNavigate();

  if (!isSuccess) {
    return;
  }

  return (
    <PageContainer class={'text-neutral-50  flex flex-col justify-between'} scroll={true}>
      <h2
        className={
          'text-2xl font-bold mb-2 bg-white bg-opacity-20 rounded-3xl shadow-inner shadow-neutral-50 cursor-pointer p-2 pl-3'
        }
      >
        {data.caseName}
      </h2>
      <section className={'pl-4'}>
        <div className={'mb-6 mt-5'}>
          <h3 className={'font-semibold'}>Date & Location:</h3>
          <span>{data.date}</span> | <span>{data.location}</span>
        </div>
        <div className={'mb-6 mt-5'}>
          <h3 className={'font-semibold'}>Description:</h3>
          <p className={'mb-4'}>{data.description}</p>
        </div>
        <div className={'mb-6'}>
          <h3 className={'font-semibold'}>Last Known Activity:</h3>
          {data?.lastKnownActivity !== null ? <p>{data.lastKnownActivity}</p> : <p>Unknown</p>}
        </div>
        <div className={'mb-6'}>
          <h3 className={'font-semibold'}>Key Evidence:</h3>
          <ul className={'list-disc list-inside'}>
            {data.keyEvidence.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={'mb-6'}>
          <h3 className={'font-semibold'}>Suspects:</h3>
          {data.suspects.length > 0 ? (
            <ul className={'list-disc list-inside'}>
              {data.suspects.map((suspect, index) => (
                <li key={index}>{suspect}</li>
              ))}
            </ul>
          ) : (
            <p>No known suspects.</p>
          )}
        </div>
        <div className={'mb-6'}>
          <h3 className={'font-semibold'}>Investigator Notes:</h3>
          <p>{data.notes}</p>
        </div>
      </section>
      <div className={'mb-4'}>
        <button
          className={
            'w-2/12 mb-2 bg-white bg-opacity-20 rounded-3xl shadow-inner shadow-neutral-50 p-2 uppercase'
          }
          onClick={() => navigate('/unsolved-cases')}
        >
          back
        </button>
      </div>
    </PageContainer>
  );
}
