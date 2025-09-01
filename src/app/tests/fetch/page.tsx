import React from "react";

const FetchPage = async () => {
  const users = await fetch(`http://localhost:3000/api/users`, {
    next: { revalidate: 2000 },
  }).then((res) => res.json());

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default FetchPage;
