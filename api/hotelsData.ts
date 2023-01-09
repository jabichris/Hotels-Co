import {
    useQuery,
    QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const HotelsData = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
        fetch('https://63bc4643fa38d30d85c2c373.mockapi.io/api/v1/hotels').then(
            (res) => res.json(),
        ),
})

export default HotelsData;