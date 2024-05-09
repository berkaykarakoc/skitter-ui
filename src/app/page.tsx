import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-2 p-10">
      <h1 className="text-5xl">Skitter</h1>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sing Up</Link>
    </main>
  );
}
