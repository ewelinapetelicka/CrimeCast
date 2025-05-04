import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {PageContainer} from "../components/page-container/PageContainer.tsx";
import axios from "axios";

export function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');

    const handleLogin = () => {
        axios.post('https://dummyjson.com/auth/login', {
            username: username,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response.data);
                navigate("/serial-killers");
                localStorage.setItem('token', response.data.accessToken)

            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <PageContainer class={"flex  justify-center items-center text-white"} scroll={false}>
            <div className="p-8 w-3/5 h-4/5 flex  justify-center items-center flex-col gap-4">
                <p className="text-2xl font-bold mb-4">Login</p>
                <input
                    className="border p-2 mb-2 w-full shadow-inner shadow-neutral-50 bg-white bg-opacity-30 rounded-3xl placeholder-zinc-50"
                    placeholder="Login"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="border p-2 mb-4 w-full shadow-inner shadow-neutral-50 bg-white bg-opacity-30 rounded-3xl placeholder-zinc-50"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-white bg-opacity-20 rounded-3xl p-3 shadow-inner shadow-neutral-50 w-1/6"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>
        </PageContainer>
    )
}