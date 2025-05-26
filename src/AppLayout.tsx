import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header.tsx';

export function AppLayout() {
  return (
    <div
      className={'h-screen'}
      style={{
        backgroundColor: 'hsla(60,0%,0%,1)',
        backgroundImage: `
radial-gradient(at 40% 20%, hsla(93,8%,31%,1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(32,7%,23%,1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(42,12%,44%,1) 0px, transparent 50%),
radial-gradient(at 80% 50%, hsla(47,10%,37%,1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(82,5%,44%,1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(101,6%,56%,1) 0px, transparent 50%),
radial-gradient(at 0% 0%, hsla(37,1%,24%,1) 0px, transparent 50%)   `,
      }}
    >
      <div className={'h-[10%]'}>
        <Header></Header>
      </div>
      <div className={'h-[90%] overflow-auto'}>
        <Outlet />
      </div>
    </div>
  );
}
