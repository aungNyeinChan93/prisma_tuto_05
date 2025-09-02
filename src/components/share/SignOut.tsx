import { signOut } from "@/libs/auth";
import React from "react";

const signOutAction = async () => {
  "use server";
  await signOut();
};

const SignOut = async () => {
  return (
    <React.Fragment>
      <form action={signOutAction}>
        <button
          type="submit"
          className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
        >
          Sign Out
        </button>
      </form>
    </React.Fragment>
  );
};

export default SignOut;
