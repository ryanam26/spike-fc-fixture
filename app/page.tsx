import { services } from "@/lib/data";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="text-3xl font-bold">Spike Fixture App</h1>
      <p className="mt-2 text-neutral-400">
        A Next.js app of similar dependency weight to a real customer project.
      </p>
      <ul className="mt-6 space-y-2">
        {services.map((s) => (
          <li key={s.id} className="rounded border border-neutral-800 p-4">
            <span className="font-medium">{s.name}</span>
            <span className="ml-2 text-neutral-500">${s.price}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
