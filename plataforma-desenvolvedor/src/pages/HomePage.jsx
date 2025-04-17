import Header from "../components/Layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Bem-vindo à Plataforma Dev!
        </h2>
        <p className="mt-2 text-gray-600">
          Compartilhe conhecimento, pratique programação e aprenda com IA.
        </p>
      </main>
    </>
  );
}
