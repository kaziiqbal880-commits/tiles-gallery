"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = href === pathName
    // console.log(isActive)
    return (
        <div>
            <Link href={href} className={isActive ? "font-bold text-purple-400" : ""}>

                {children}

            </Link>

        </div>
    );
};

export default NavLink;