
import { AddForm } from "@/app/add-form";


export default async function Home() {

  return (
    <main>
      <h1 className="sr-only">Register Guest</h1>
      <AddForm />
    </main>
  );
}