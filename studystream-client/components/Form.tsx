import { signIn } from "@/auth";
import "../app/globals.css"; // Ensure this path matches your project structure

export default function Form() {
  return (
    <div className="flex items-center justify-center text-center m-32 ">
      <div className="text-center p-6  rounded-lg shadow-lg w-full max-w-md">
        <img
          src="/image.png"
          alt="Image"
          className="mx-auto mb-6 w-32 h-auto rounded-lg custom-shadow"
        />

        <form className="m-10"
          action={async () => {
            "use server";
            await signIn("google");
          }
          
        }
        >
          <button
            type="submit"
            className="w-full  py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
          >
            Sign-in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
