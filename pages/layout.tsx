import Head from 'next/head'
import useFetchHotels from "../customHooks/useFetchHotels";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";

const Home = (): any => {
    const { isLoading, error, data } = useFetchHotels()
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
