export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center py-2">
            <p className="text-lg">
                All rights reserved &reg;{' '}
                <a
                    className="text-blue-500 font-bold hover:text-blue-700"
                    target="_blank"
                    href="https://github.com/mmolinarijr"
                >
                    mmolinarijr
                </a>
            </p>
            <p>{getCurrentYear()} - v.0.2.1</p>
        </footer>
    );
}
