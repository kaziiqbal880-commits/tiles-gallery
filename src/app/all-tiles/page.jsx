import TileCard from "@/components/shared/TileCard";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdGeneratingTokens } from "react-icons/md";

const AllTiles = async () => {
    const res = await fetch("https://tiles-server-4-korg.onrender.com/tiles")
    const tiles = await res.json();

    return (
        <div>
            <h1 className="font-bold text-2xl my-3">All Categories Tiles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                {
                    tiles.map(tile => <div key={tile.id}>
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


                            <Link href={`/all-tiles/${tile.id}`}>
                                <Button variant='outline' className='flex w-full'>View Details</Button>
                            </Link>



                        </Card>

                    </div>)
                }
            </div>

        </div>
    );
};

export default AllTiles;