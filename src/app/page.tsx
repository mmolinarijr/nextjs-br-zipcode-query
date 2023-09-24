import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Zipcode from '@/components/Zipcode';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <Zipcode />
            <Footer />
        </div>
    );
}
