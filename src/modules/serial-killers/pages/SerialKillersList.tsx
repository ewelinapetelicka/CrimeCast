import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from "react";
import {SerialKiller} from "../../../models/serial-killer.ts";
import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {Pagination} from "../../../components/pagination/Pagination.tsx";
import {KillersTable} from "../../../components/killers-table/KillersTable.tsx";
import {Search} from "../../../components/search/Search.tsx";

export function SerialKillersList() {
    const [serialKillersList, setSerialKillersList] = useState<SerialKiller[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const elementsPerPage = 10
    const [totalElements, setTotalElements] = useState(0);
    const [query, setQuery] = useState("")
    

    useEffect(() => {
        axios.get('http://localhost:8000/serialKillers?q=' + query + '&_page=' + (currentPage + 1) + "&_per_page=" + elementsPerPage)
            .then(function (response: AxiosResponse<SerialKiller[]>) {
                setSerialKillersList(response.data);
                setTotalElements(parseInt(response.headers['x-total-count']))
            })
    }, [query, currentPage]);

    return (
        <PageContainer>
            <Search onChange={(query) => setQuery(query)} value={query} onClick={() => setQuery("")}></Search>
            <KillersTable killers={serialKillersList}></KillersTable>
            <Pagination prev={() => setCurrentPage(currentPage - 1)} disabledPrev={currentPage === 0}
                        next={() => setCurrentPage(currentPage + 1)}
                        disabledNext={Math.ceil(totalElements / elementsPerPage) === currentPage}
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalElements / elementsPerPage) - 1}/>
        </PageContainer>
    )
}