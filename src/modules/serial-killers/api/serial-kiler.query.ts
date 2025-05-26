import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { SerialKiller } from '../../../models/serial-killer.ts';
import { createURLWithQueryParams } from '../../../utils/http.utils.tsx';

export const SERIAL_KILLERS_KEY = 'serialKillers';

export const useGetSerialKillerList = (paginated: {
  q: string;
  _page: number;
  _per_page: number;
}) =>
  useQuery({
    queryKey: [SERIAL_KILLERS_KEY, paginated],
    queryFn: () =>
      axios.get(createURLWithQueryParams('http://localhost:8000/serialKillers', paginated)),
    select: (data: AxiosResponse<SerialKiller[]>) => {
      return {
        totalElements: data.headers['x-total-count'],
        killerList: data.data,
      };
    },
  });

export const useGetSerialKillerDetails = (id: string) =>
  useQuery({
    queryKey: [SERIAL_KILLERS_KEY, id],
    queryFn: () => axios.get<SerialKiller>('http://localhost:8000/serialKillers/' + id),
    select: (data: AxiosResponse<SerialKiller>) => data.data,
  });
