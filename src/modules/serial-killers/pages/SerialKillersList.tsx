import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from "react";
import {SerialKiller} from "../../../models/serial-killer.ts";
import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {Pagination} from "../../../components/pagination/Pagination.tsx";
import {Paginated} from "../../../models/paginated.ts";
import {KillersTable} from "../../../components/killers-table/KillersTable.tsx";

export function SerialKillersList() {
    const [serialKillersList, setSerialKillersList] = useState<SerialKiller[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const elementsPerPage = 10
    const [totalElements, setTotalElements] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/serialKillers?_page=' + (currentPage + 1) + "&_per_page=" + elementsPerPage)
            .then(function (response: AxiosResponse<Paginated<SerialKiller>>) {
                setSerialKillersList(response.data.data);
                setTotalElements(response.data.items)
            })
    }, [currentPage]);

    return (
        <PageContainer>
            <KillersTable killers={serialKillersList}></KillersTable>
            <Pagination prev={() => setCurrentPage(currentPage - 1)} disabledPrev={currentPage === 0}
                        next={() => setCurrentPage(currentPage + 1)}
                        disabledNext={Math.ceil(totalElements / elementsPerPage) === currentPage}
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalElements / elementsPerPage) - 1}/>
        </PageContainer>
    )
}