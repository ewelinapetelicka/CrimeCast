import {TabButton} from "../tab-button/TabButton.tsx";
import {IoMenuOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function Header() {
    const navigate = useNavigate();
    const isLogged = !!localStorage.getItem('token');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        if (isLogged) {
            axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'), // Pass JWT via Authorization header
                },
            })
                .then(response => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                });

        }
    }, [isLogged]);

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <section className={"flex h-full items-center justify-center"}>
            <article
                className={"flex bg-white bg-opacity-20 h-[80%] w-[99%] text-amber-50 items-center justify-between rounded-3xl shadow-inner shadow-neutral-50"}>
                <section className={"flex items-end gap-5"}>
                    <h1 className={"text-2xl font-bold pl-6 pr-20"}>CrimeCast</h1>
                    <TabButton label={"Serial killers"} onClick={() => navigate('/serial-killers')}></TabButton>
                    <TabButton label={"Unsolved cases"} onClick={() => navigate('/unsolved-cases')}></TabButton>
                </section>
                {isLogged ? (
                    <>
                        <section>
                            <span>{firstName}</span>
                            <span>{lastName}</span>
                        </section>
                        <button className={"text-2xl font-bold pr-6"} onClick={() => logOut()}>
                            <IoMenuOutline/>
                        </button>
                    </>
                ) : (<></>)}

            </article>
        </section>
    )
}