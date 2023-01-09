import Head from 'next/head'
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import Header from "../components/Header";
import MediumCard from "../components/MediumCard";

const Home = (): any => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://63bc4643fa38d30d85c2c373.mockapi.io/api/v1/hotels').then(
                (res) => res.json(),
            ),
    })

    return (isLoading) ? 'Loading...' : (error) ? 'An error has occurred: ' : (
        <div>
            <Head>
                <title>Hotel & Co Booking</title>
            </Head>
            <body>
                <Header />
                <div className="grid grid-cols-4 gap-8 m-8">
                    {data.map((data: any) => (<MediumCard key={data.title} data={data} />)
                    )}
                </div>
            </body>
        </div>
    )
}

export default Home
