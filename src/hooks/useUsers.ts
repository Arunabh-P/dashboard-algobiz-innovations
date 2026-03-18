import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api/userApi"
import type { UsersResponse } from "@/types/user"

export const useUsers = (page: number, search: string) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ["users", page, search],
    queryFn: () => getUsers({ page, search }),
    placeholderData: (previousData) => previousData,
    retry: 1,
  })
}
