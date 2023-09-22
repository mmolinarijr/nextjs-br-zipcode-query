'use client';

import { useState } from 'react';
import handler from '@/app/zipcode';

export default function Zipcode() {
    const [zipcode, setZipcode] = useState('');
    const [data, setData] = useState([]) as any;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('ZIPCODE === ', zipcode);
        console.log('handler === ', await handler(zipcode));
        console.log('data === ', data);
        setData(await handler(zipcode));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="zipcode"
                    className="mr-2"
                >
                    CEP:
                </label>
                <input
                    name="zipcode"
                    className="py-3"
                    id="zipcode"
                    onChange={(event) => setZipcode(event.target.value)}
                    placeholder="00000-000"
                />
                <input
                    type="submit"
                    value="Buscar"
                    className="block w-full hover:bg-blue-500 hover:cursor-pointer rounded-md border-0 py-1.5 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
            </form>

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
                        <strong>UF:</strong> {data.uf}
                    </h2>
                </div>
            )}
        </div>
    );
}
