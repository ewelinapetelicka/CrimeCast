import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from "react";
import {SerialKiller} from "../../../models/serial-killer.ts";
import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {Pagination} from "../../../components/pagination/Pagination.tsx";
import {KillersTable} from "../components/killers-table/KillersTable.tsx";
import {Search} from "../../../components/search/Search.tsx";
import {createURLWithQueryParams} from "../../../utils/http.utils.tsx";
import {useNavigate} from "react-router-dom";

export function SerialKillersList() {
    const [serialKillersList, setSerialKillersList] = useState<SerialKiller[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const elementsPerPage = 10;
    const [totalElements, setTotalElements] = useState(0);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(createURLWithQueryParams("http://localhost:8000/serialKillers", {
            q: query,
            _page: currentPage + 1,
            _per_page: elementsPerPage
        }))
            .then(function (response: AxiosResponse<SerialKiller[]>) {
                setSerialKillersList(response.data);
                setTotalElements(parseInt(response.headers['x-total-count']))
            })
    }, [query, currentPage]);

    return (
        <PageContainer class={"flex flex-col justify-between items-center"} scroll={false}>
            <Search onChange={(query) => setQuery(query)} value={query} onClick={() => setQuery("")}></Search>
            <KillersTable killers={serialKillersList}
                          onClick={(killerId) => navigate("/serial-killers/" + killerId)}></KillersTable>
            <Pagination prev={() => setCurrentPage(currentPage - 1)} disabledPrev={currentPage === 0}
                        next={() => setCurrentPage(currentPage + 1)}
                        disabledNext={Math.ceil(totalElements / elementsPerPage) === currentPage}
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalElements / elementsPerPage) - 1}/>
        </PageContainer>
    )
}