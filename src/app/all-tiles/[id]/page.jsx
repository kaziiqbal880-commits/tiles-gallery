import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdGeneratingTokens } from 'react-icons/md';

const DetailsPage = async ({ params }) => {
    const { id } = await params
    console.log(id)
    const res = await fetch("https://tiles-server-4-korg.onrender.com/tiles")
    const tiles = await res.json();
    console.log(tiles)
    const tile = tiles.find(til => til.id == id)
    console.log(tile)

    return (
        <div className='my-3'>
            <Card className='border rounded-2xl'>
                <div className='relative w-full aspect-square'>

                    <Image className='object-cover rounded-xl'
                        alt={tile.title}
                        fill
                        src={tile.image} />
                    <Chip className='relative top-2 left-2'>{tile.category}</Chip>
                </div>
                <div className='space-y-3'>

                    <h1 className='font-semibold'>{tile.title}</h1>
                    <p>{tile.description}</p>
                    <div className='flex gap-2 items-center'>
                        <MdGeneratingTokens />
                        <p>{tile.rating}</p>
                    </div>
                    <p className='font-semibold'>${tile.price}</p>

                </div>
            </Card>

        </div>
    );
};

export default DetailsPage;