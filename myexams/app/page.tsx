import Image from "next/image";
import Landing from "./components/Landing";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Welcome to myExams</h2>
      <Landing />
    </main>
  );
}
