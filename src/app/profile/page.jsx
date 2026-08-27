"use client";

import UpdateForm from "@/components/UpdateForm";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    // 1. While session is loading
    if (isPending) {
        return <div>Loading...</div>;
    }

    // 2. If there is no logged-in user
    if (!user) {
        router.push("/login");
        return <div>Redirecting...</div>;
    }

    // 3. Now user definitely exists
    return (
        <div className="my-3">
            <Card className="max-w-96 mx-auto flex justify-center items-center">
                <Avatar className="h-20 w-20">
                    <Avatar.Image
                        alt={user.name || "User"}
                        src={user.image || "/hero.jpg"}
                        referrerPolicy="no-referrer"
                    />

                    <Avatar.Fallback>
                        {user.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                </Avatar>

                <h1 className="font-bold">{user.name}</h1>

                <p>{user.email}</p>

                <UpdateForm />
            </Card>
        </div>
    );
};

export default ProfilePage;