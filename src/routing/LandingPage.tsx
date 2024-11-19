import Arrivals from '../components/arrivals/Arrivals';
import Home from '../components/home/Home';
import Inspo from '../components/inspo/Inspo';
import RecentlyBought from '../components/recently-bought/RecentlyBought';
import Trending from '../components/trending/Trending';

const LandingPage = () => {
    return (
        <>
            <Home />
            <Trending />
            <RecentlyBought />
            <Arrivals />
            <Inspo />
        </>
    )
}

export default LandingPage