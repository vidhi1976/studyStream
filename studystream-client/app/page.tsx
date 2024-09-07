import Form from "@/components/Form";
export default function Home() {
  return (
    <main className="bg-black h-screen text-white flex justify-center p-10">
      <div className="w-1/2 p-10">
        <div className="flex flex-col items-center">
          <Form />
        </div>
      </div>
      <div className="hidden md:block p-10 bg-off-white w-1/2 rounded-lg">
        <img
          src="/logo-color.png"
          alt="Logo"
          className="object-contain h-full w-full"
        />
      </div>
    </main>
  );
}
