export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-center py-2">
            <p className="text-lg font-bold">
                All rights reserved - {getCurrentYear()} &reg;{' '}
                <a
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    href="https://github.com/mmolinarijr"
                >
                    mmolinarijr
                </a>
            </p>
        </footer>
    );
}
