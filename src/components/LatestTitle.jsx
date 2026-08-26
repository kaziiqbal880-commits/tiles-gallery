import { Button } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const LatestTitle = async () => {
    const res = fetch("https://tiles-server-4-korg.onrender.com/marquee")
    const latest = await (await res).json()
    // console.log(latest)


    return (
        <div className="bg-gray-200 py-3 max-w-7xl mx-auto mt-2 flex items-center px-2 overflow-hidden">
            <Button className="rounded-none bg-red-500 px-6 shrink-0">
                Latest
            </Button>

            <Marquee pauseOnHover={true}>
                {latest.map((n, index) => (
                    <React.Fragment key={n.id}>
                        <span className="mx-4">
                            {n.text}
                        </span>

                        {index < latest.length - 1 && (
                            <span className="text-gray-500 font-bold">
                                ||
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestTitle;