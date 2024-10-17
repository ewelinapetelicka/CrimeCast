import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from "react";
import {SerialKiller} from "../../../models/serial-killer.ts";

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
        <div className={"flex flex-col bg-zinc-900"}>{serialKillersList.map((killer) => {
            return (
                <p>{killer.name}</p>
            )
        })}</div>
    )
}