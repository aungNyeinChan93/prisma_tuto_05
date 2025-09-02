import { signIn } from "@/libs/auth";
import React from "react";

const SingUpForm = () => {
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");
  return (
    <React.Fragment>
      <main>
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-[400px] max-w-md rounded-2xl bg-white p-6 shadow">
            <h1 className="mb-4 text-2xl font-bold text-indigo-400 text-center">
              Sign Up
            </h1>

            {/* Email + Password */}
            {/* <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border p-2 text-indigo-300"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border p-2 text-indigo-300"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form> */}

            {/* <div className="my-4 text-center text-gray-500">OR</div> */}

            {/* Social logins */}
            <form
              action={async () => {
                "use server";
                await signIn("github", { callbackUrl: "/" });
              }}
            >
              <button
                type="submit"
                className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900 cursor-pointer"
              >
                Continue with GitHub
              </button>
            </form>
            <button
              //   onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SingUpForm;
