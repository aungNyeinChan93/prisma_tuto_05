import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import React from "react";

const TestAuth = async () => {
  const session = await auth();

  //   if (!session) {
  //     return redirect("/auth/signup");
  //   }
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestAuth;
