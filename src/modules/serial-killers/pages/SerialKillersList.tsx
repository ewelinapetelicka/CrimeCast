import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from "react";
import {SerialKiller} from "../../../models/serial-killer.ts";
import {PageContainer} from "../../../components/page-container/PageContainer.tsx";

export function SerialKillersList() {
    const [serialKillersList, setSerialKillersList] = useState<SerialKiller[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/serialKillers')
            .then(function (response: AxiosResponse<SerialKiller[]>) {
                return setSerialKillersList(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    return (
        <PageContainer>
            {serialKillersList.slice(0, 9).map((killer) => {
                return (
                    <p>{killer.name}</p>
                )
            })}
        </PageContainer>
    )
}