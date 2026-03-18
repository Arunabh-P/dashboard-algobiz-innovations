import axios, { AxiosError } from "axios"
import type { UsersResponse } from "@/types/user"

const BASE_URL = "https://dummyjson.com/users"

export const getUsers = async ({
  page,
  search,
}: {
  page: number
  search: string
}): Promise<UsersResponse> => {
  const limit = 10
  const skip = (page - 1) * limit
  const url = search.trim() ? `${BASE_URL}/search` : BASE_URL

  try {
    const res = await axios.get<UsersResponse>(url, {
      params: {
        limit,
        skip,
        ...(search.trim() && { q: search }),
      },
    })
    return res.data
  } catch (err) {
    const error = err as AxiosError
    if (!error.response)
      throw new Error("Network error. Please check your connection.")
    if (error.response.status === 404) throw new Error("Users not found.")
    if (error.response.status >= 500)
      throw new Error("Server error. Please try again later.")
    throw new Error("Something went wrong. Please try again.")
  }
}
