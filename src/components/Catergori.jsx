import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Catergory = async () => {
    const res = await fetch("https://tiles-server-4-korg.onrender.com/categories")
    const allCategories = await res.json();

    return (
        <div className=' my-3'>
            {
                allCategories.map(category => <Link href={`?category=${category.slug}`} key={category.id}><Button variant='outline' className='mr-2'>{category.name}</Button></Link>)
            }
        </div>
    );
};

export default Catergory;