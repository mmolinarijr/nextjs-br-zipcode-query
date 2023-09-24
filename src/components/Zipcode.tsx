'use client';

import { useState } from 'react';
import handler from '@/app/zipcode';
import Loading from './helpers/Loading';

export default function Zipcode() {
    const [zipcode, setZipcode] = useState('');
    const [data, setData] = useState([]) as any;
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsLoading(true);
            const res = await handler(zipcode);
            setData(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipcode(event.target.value);
    };

    const handleReset = () => {
        setZipcode('');
        setData([]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {!isLoading && (
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="zipcode"
                        className="mr-2"
                    >
                        <strong>CEP:</strong>
                    </label>
                    <input
                        name="zipcode"
                        className="py-3"
                        id="zipcode"
                        value={zipcode}
                        onChange={handleInputChange}
                        placeholder="00000-000"
                    />
                    <input
                        type="submit"
                        value="Buscar"
                        // disabled={!zipcode}
                        className={`block w-full hover:bg-blue-500 hover:cursor-pointer rounded-md border-0 py-1.5 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 
                    ${!zipcode ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
                    />
                    {data?.cep && (
                        <button
                            onClick={handleReset}
                            className="block w-full hover:bg-blue-300 hover:cursor-pointer rounded-md border-0 py-1.5 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                        >
                            Limpar
                        </button>
                    )}
                </form>
            )}

            {isLoading && <Loading />}
            {data?.cep && (
                <div className="flex flex-col py-5">
                    <h2>
                        <strong>Logradouro:</strong> {data.logradouro}
                    </h2>
                    <h2>
                        <strong>Bairro:</strong> {data.bairro}
                    </h2>
                    <h2>
                        <strong>Localidade:</strong> {data.localidade}
                    </h2>
                    <h2>
                        <strong>DDD:</strong> {data.ddd}
                    </h2>
                    <h2>
                        <strong>UF:</strong> {data.uf}
                    </h2>
                </div>
            )}
        </div>
    );
}
