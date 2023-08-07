import Link from "next/link";
import { prisma } from "@/db";
import { Userslist } from "@/components/Userslist";
import Navbar from "@/components/NavBar";
import GlassyLayout from "@/components/GlassyLayout";

function getUsers() {
  return prisma.users.findMany();
}

async function toggleAvailability(id: string, avaliable: boolean) {
  "use server";
  await prisma.users.update({ where: { id }, data: { avaliable } });
}
export default async function Home() {
  const users = ["user", "user", "user"];
  //await getUsers();

  return (
    <>
      <Navbar />
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Users</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-sky-700"
          href="/new"
        >
          Add New User
        </Link>
      </header>
      <ul>
        {users.map((user) => (
          <Userslist
            key={user.id}
            {...user}
            toggleAvailability={toggleAvailability}
          />
        ))}
      </ul>
      <GlassyLayout />
    </>
  );
}
