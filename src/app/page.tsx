export default function App() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24 gap-y-16">
      <a href="https://flat101.es">
        <img src="/flat-101.png" alt="Flat 101" className="w-64" />
      </a>

      <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Edit <code className="px-2 font-mono font-bold">src/app.tsx</code> and
        save to reload.
      </p>
    </main>
  );
}
