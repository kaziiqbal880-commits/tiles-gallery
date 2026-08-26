import TileCard from "./shared/TileCard";

const TopTiles = ({ tiles }) => {
    return (
        <div >
            <h1 className='font-bold text-2xl my-3'>Top Four Tiles</h1>

            <div className="grid grid-cols-4 gap-4">
                {
                    tiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
                }
            </div>
        </div>
    );
};

export default TopTiles;