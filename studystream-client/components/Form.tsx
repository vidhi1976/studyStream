import { signIn } from "@/auth";
import "../app/globals.css"; // Ensure this path matches your project structure


export default function Form() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex m-28 flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0 md:w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img
          src="/image.png"
          alt="Image"
          className="mx-auto mb-6 w-32 h-auto rounded-lg custom-shadow"
        />

        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Sign-in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
