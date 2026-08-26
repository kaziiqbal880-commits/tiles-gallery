"use client"
import UpdateForm from "@/components/UpdateForm";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarImage, Card } from "@heroui/react";
import Image from "next/image";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()

    const user = session?.user
    return (
        <div className="my-3">
            <Card className="max-w-96 mx-auto flex justify-center items-center">
                <Avatar className="h-20 w-20">
                    <Avatar.Image
                        alt="Blue"
                        src="/hero.jpg"
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>B</Avatar.Fallback>
                </Avatar>

                <h1 className="font-bold">{user.name}</h1>
                <p>{user.email}</p>
                <UpdateForm></UpdateForm>
            </Card>


        </div >
    );
};

export default ProfilePage;