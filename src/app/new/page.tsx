import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function addUser(data: FormData) {
  "use server";
  const name = data.get("name")?.valueOf();
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("invalid name");
  }
  await prisma.users.create({ data: { name, avaliable: true } });

  redirect("/");
}

export default function page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add User</h1>
      </header>

      <form action={addUser} className="flex gap-1 flex-col">
        <input
          type="text"
          name="name"
          className="border bg-transparent rounded py-1 px-2 outline-none "
        />
        <div className="flex gap-2 justify-end">
          <Link className="border rounded px-2" href="..">
            Cancel
          </Link>
          <button className="border rounded px-2" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
