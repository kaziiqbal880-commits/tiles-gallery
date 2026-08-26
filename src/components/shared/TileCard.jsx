import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdGeneratingTokens } from 'react-icons/md';

const TileCard = ({ tile }) => {
    return (
        <div>
            <Card className='border rounded-2xl'>
                <div className='relative w-full aspect-square'>

                    <Image className='object-cover rounded-xl'
                        alt={tile.name}
                        fill
                        src={tile.image} />
                    <Chip className='relative top-2 left-2'>{tile.category}</Chip>
                </div>
                <div className='space-y-3'>
                    <h1 className='font-semibold'>{tile.name}</h1>
                    <p className='text-gray-400'>{tile.description}</p>
                </div>

                <Link href={'/all-tiles'}>
                    <Button variant='outline' className='flex w-full'>View Details</Button>
                </Link>


            </Card>

        </div>
    );
};

export default TileCard;