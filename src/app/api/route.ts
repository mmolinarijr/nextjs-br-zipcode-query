import { NextRequest } from 'next/server';

export async function GET(req: Request) {
    console.clear();

    const queryParams = new URL(req.url).searchParams;
    const id = queryParams.get('id');

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id || 1}`);

        const data = await res.json();
        console.log('data', data);

        return new Response(JSON.stringify(data), {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        });
    } catch (error) {
        console.error('GET error', error);
        return Response.error();
    }
}
