import { useMutation, useQuery } from 'react-query'

import { MicrositiosQuerys } from './micrositios.keys'

import { MicrositesServices } from '../../api'

const useMicrositio = (id: number) => {
  return useQuery({
    queryKey: MicrositiosQuerys.getMicrositioById(id),
    queryFn: () => MicrositesServices.getMicrositioById(id),
  })
}

const useMicrositios = (
  p?: Parameters<typeof MicrositesServices.getAllMicrositios>[0],
) => {
  return useQuery({
    queryKey: MicrositiosQuerys.getMicrositios,
    queryFn: () => MicrositesServices.getAllMicrositios(p),
  })
}

const useCreateMicrositio = () => {
  return useMutation({
    mutationFn: MicrositesServices.createMicrositio,
    mutationKey: MicrositiosQuerys.createMicrositio,
  })
}

export { useCreateMicrositio, useMicrositio, useMicrositios }
