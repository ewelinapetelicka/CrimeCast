import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {SerialKiller} from "../../../models/serial-killer.ts";
import {useParams} from "react-router-dom";
import {Profile} from "../components/profile/Profile.tsx";

export function SerialKillerDetails() {
    const [killer, setKiller] = useState<SerialKiller>();
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/serialKillers/" + id)
            .then(function (response: AxiosResponse<SerialKiller>) {
                setKiller(response.data);
            })
    }, []);

    if (!killer) {
        return;
    }

    return (
        <PageContainer class={"flex flex-col justify-between items-center overflow-auto"} scroll={true}>
            <Profile killer={killer}></Profile>
        </PageContainer>
    )
}