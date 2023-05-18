'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>{ error.message }</h2>
      <button onClick={() => reset()}>Tentar Novamente!</button>
    </main>
  );
}