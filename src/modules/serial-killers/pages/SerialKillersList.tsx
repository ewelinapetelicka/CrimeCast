import { useState } from 'react';
import { PageContainer } from '../../../components/page-container/PageContainer.tsx';
import { Pagination } from '../../../components/pagination/Pagination.tsx';
import { KillersTable } from '../components/killers-table/KillersTable.tsx';
import { Search } from '../../../components/search/Search.tsx';
import { useNavigate } from 'react-router-dom';
import { useGetSerialKillerList } from '../api/serial-kiler.query.ts';

export function SerialKillersList() {
  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 10;
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { data, isSuccess } = useGetSerialKillerList({
    q: query,
    _page: currentPage + 1,
    _per_page: elementsPerPage,
  });

  if (!isSuccess) {
    return;
  }

  return (
    <PageContainer class={'flex flex-col justify-between items-center'} scroll={false}>
      <Search
        onChange={(query) => setQuery(query)}
        value={query}
        onClick={() => setQuery('')}
      ></Search>
      <KillersTable
        killers={data?.killerList}
        onClick={(killerId) => navigate('/serial-killers/' + killerId)}
      ></KillersTable>
      <Pagination
        prev={() => setCurrentPage(currentPage - 1)}
        disabledPrev={currentPage === 0}
        next={() => setCurrentPage(currentPage + 1)}
        disabledNext={Math.ceil(data?.totalElements / elementsPerPage) === currentPage}
        currentPage={currentPage}
        totalPages={Math.ceil(data?.totalElements / elementsPerPage) - 1}
      />
    </PageContainer>
  );
}
