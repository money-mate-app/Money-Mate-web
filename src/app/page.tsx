import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return <Link href={"/auth"}>Home</Link>;
}
