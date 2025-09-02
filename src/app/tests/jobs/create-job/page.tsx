import CreateJobForm from "@/components/share/CreateJobForm";
import React from "react";

const CreateJobPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-green-100">
        <CreateJobForm />
      </main>
    </React.Fragment>
  );
};

export default CreateJobPage;
