import { useMutation, useQuery, useQueryClient } from 'react-query'

import { DirectoriosQuerys } from './directorios.keys'

import { DirectoriesServices } from '../../api'

const useCreateDirectorio = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [DirectoriosQuerys.createDirectorio],
    mutationFn: DirectoriesServices.createDirectorio,
    onSuccess: () => {
      queryClient.invalidateQueries(DirectoriosQuerys.getAllDirectorios)
    },
  })
}
const useDirectorioById = (id: number) => {
  const qc = useQueryClient()
  const query = useQuery({
    queryKey: DirectoriosQuerys.getDirectorioById(id),
    queryFn: () => DirectoriesServices.getDirectorioById(id),
    onSuccess: () => {
      qc.invalidateQueries(DirectoriosQuerys.getAllDirectorios)
    },
    enabled: !!id,
  })
  return query
}
const useDirectorios = () => {
  return useQuery({
    queryKey: [DirectoriosQuerys.getAllDirectorios],
    queryFn: DirectoriesServices.getAllDirectorio,
  })
}

export { useCreateDirectorio, useDirectorioById, useDirectorios }
