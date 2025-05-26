import { SerialKiller } from '../../../../models/serial-killer.ts';

interface KillersTableProps {
  killers: SerialKiller[];
  onClick: (killerId: number) => void;
}

export function KillersTable(props: KillersTableProps) {
  return (
    <div className={'h-5/6 w-full p-6 text-amber-50'}>
      <table className={'w-full'}>
        <thead
          className={
            'w-full text-left rounded-2xl bg-white bg-opacity-20 shadow-inner shadow-neutral-50 text-lg'
          }
        >
          <tr>
            <th className={'pl-4 p-2'}>Name</th>
            <th>Alias</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {props.killers.map((killer) => {
            return (
              <tr key={killer.id}>
                <td
                  className={'text-neutral-50 hover:underline cursor-pointer pt-1 pb-3 pl-4  '}
                  onClick={() => props.onClick(killer.id)}
                >
                  {killer.name}
                </td>
                <td className={'text-neutral-300'}>{killer.alias}</td>
                <td className={'text-neutral-300'}>{killer.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
