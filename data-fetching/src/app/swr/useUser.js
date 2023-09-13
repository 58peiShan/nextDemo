import useSWR from "swr";
export function useUser(id) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`/myApi/${id}`, fetcher)
    return {
      user: data,
      isLoading,
      isError: error,
    }
  }