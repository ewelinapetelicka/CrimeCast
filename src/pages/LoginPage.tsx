import { useState } from 'react';
import { useLogin } from '../api/auth.query.ts';

export function LoginPage() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const loginMutation = useLogin();

  return (
    <section className={'flex justify-evenly items-center w-full h-full text-neutral-50 '}>
      <div
        className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 min-w-[500px] max-w-[900px]
               h-auto bg-white bg-opacity-20 rounded-3xl p-6 shadow-inner
               shadow-neutral-50 flex flex-col justify-center items-center"
      >
        <p className="text-2xl font-bold mb-8">Login</p>
        <input
          className="w-full sm:w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2 min-w-[320px] max-w-[800px]
               border p-2 mb-4 shadow-inner shadow-neutral-50
               bg-white bg-opacity-30 rounded-3xl placeholder-zinc-50"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full sm:w-11/12 md:w-5/6 lg:w-2/3 xl:w-1/2 min-w-[320px] max-w-[800px]
               border p-2 mb-8 shadow-inner shadow-neutral-50
               bg-white bg-opacity-30 rounded-3xl placeholder-zinc-50"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/12 min-w-[120px] mb-2 bg-white bg-opacity-20 rounded-3xl shadow-inner shadow-neutral-50 p-2  uppercase text-center"
          onClick={() =>
            loginMutation.mutate({
              username,
              password,
            })
          }
        >
          LogIn
        </button>
      </div>
    </section>
  );
}
