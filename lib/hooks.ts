// builing custom hooks here
import useSWR from "swr";
import fetcher from "./fetcher";

//useSWR fetch data and store it in local storage 
export const useMe = () => {
    const {data, error} = useSWR('/me', fetcher)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    }
}

//basically useMe hooks makes it easy this way
// there's user or, isLoading or isError, no inbetween

export const usePlaylist = () => {
    const {data, error} = useSWR('/playlist', fetcher)
    return{
        playlists: (data as any) || [],
        isLoading: !data && !error,
        isError: error,
    }    
}

