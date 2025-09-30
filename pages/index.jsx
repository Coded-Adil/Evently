import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Evently 🚀
      </h1>
      <p className="mt-4 text-gray-700">
        Your place to manage events effortlessly.
      </p>
    </MainLayout>
  );
}
