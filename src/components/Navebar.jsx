"use client"
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";


const Navebar = () => {
    const signOutHandle = async () => {
        await authClient.signOut();
    }
    const { data: session, isPending } = authClient.useSession()
    if (isPending) {
        <span className="flex justify-center items-center text-2xl">Loading....</span>
    }
    const user = session?.user

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <Image className="flex justify-center items-center"
                        alt="logo"
                        height={70}
                        width={70}
                        src={'/logo.png'} />
                    <p className="font-bold text-xl">Tessera</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/all-tiles">All Tiles</NavLink></li>
                    <li><NavLink href="/profile">My Profile</NavLink></li>
                </ul>
                {user ? <div className="flex gap-2 justify-center items-center">
                    <Link href={'/signin'}>
                        <Button onClick={signOutHandle}>Log Out</Button>
                    </Link>
                    <Avatar> <Image
                        src='/hero.jpg'
                        alt={user.name}
                        width={40}
                        height={50}
                        className="rounded-full"
                    /></Avatar>
                </div> : <div>
                    <Link href={'/signup'}><Button variant="outline" className="mr-2">Sign Up</Button></Link>
                    <Link href={'/signin'}><Button variant="outline" className="mr-2">Sign In</Button></Link>
                </div>}
            </header>
        </nav>
    );
};

export default Navebar;