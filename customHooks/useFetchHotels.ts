import {
    useQuery,
    // QueryClient,
} from "@tanstack/react-query";

// const queryClient = new QueryClient();

const useFetchHotels = () => {
    const {isLoading, error, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
        fetch('https://63bc4643fa38d30d85c2c373.mockapi.io/api/v1/hotels').then(
            (res) => res.json(),
        ),
})
return { isLoading, error, data}
}

export default useFetchHotels;