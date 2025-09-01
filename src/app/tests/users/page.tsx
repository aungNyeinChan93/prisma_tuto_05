import prisma from "@/db/prisma-db";
import React from "react";

const TestUsersPage = async () => {
  const users = await prisma.user.findMany();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TestUsersPage;
