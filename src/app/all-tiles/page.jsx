import Catergory from "@/components/Catergori";
import TileCard from "@/components/shared/TileCard";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdGeneratingTokens } from "react-icons/md";

const AllTiles = async ({ searchParams }) => {
    const res = await fetch("https://tiles-server-4-korg.onrender.com/tiles")
    const tiles = await res.json();

    const { category } = await searchParams
    console.log(category)
    const filterTiles = category ? tiles.filter(tile => tile.category == category) : tiles
    console.log(filterTiles)

    return (
        <div>
            <h1 className="font-bold text-2xl my-3">All Categories Tiles</h1>
            <Catergory></Catergory>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">

                {
                    filterTiles.length > 0 ? (
                        filterTiles.map((tile) => (
                            <div key={tile.id}>
                                <Card className="border rounded-2xl">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            className="object-cover rounded-xl"
                                            alt={tile.title}
                                            fill
                                            src={tile.image}
                                        />

                                        <Chip className="absolute top-2 left-2">
                                            {tile.category}
                                        </Chip>
                                    </div>

                                    <div className="space-y-3">
                                        <h1 className="font-semibold">{tile.title}</h1>

                                        <p>{tile.description}</p>

                                        <div className="flex gap-2 items-center">
                                            <MdGeneratingTokens />
                                            <p>{tile.rating}</p>
                                        </div>

                                        <p className="font-semibold">${tile.price}</p>
                                    </div>

                                    <Link href={`/all-tiles/${tile.id}`}>
                                        <Button variant="outline" className="flex w-full">
                                            View Details
                                        </Button>
                                    </Link>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="bg-gray-300 h-[50vh] col-span-full flex items-center justify-center">
                            <h1 className="font-bold text-2xl">
                                There are no Tiles Under This Category
                            </h1>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default AllTiles;