import SingUpForm from "@/components/share/SignUpForm";
import { auth } from "@/libs/auth";
import React from "react";

const SignUpPage = async () => {
  const session = await auth();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-green-50">
        <SingUpForm />
      </main>
    </React.Fragment>
  );
};

export default SignUpPage;
