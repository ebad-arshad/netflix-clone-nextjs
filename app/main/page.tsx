'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Main = () => {

    const { data: session } = useSession();
    if (!session) {
        redirect('/login');
    }

    return (
        <div>
            <button onClick={() => signOut()} className="text-white">Sign out</button>
        </div>
    )
}

export default Main