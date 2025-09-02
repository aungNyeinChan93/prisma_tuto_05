import prisma from "@/db/prisma-db";
import Link from "next/link";
import React from "react";

const JobsPage = async () => {
  const jobs = await prisma.job.findMany({
    include: {
      posted_by: true,
    },
  });

  return (
    <React.Fragment>
      <main className="flex flex-col gap-4 p-3">
        <section>
          <h2 className="text-2xl font-bold mb-8 underline underline-offset-8 decoration-amber-400">
            Job Listings
          </h2>
          <ul className="list-disc pl-5">
            {jobs.map((job) => (
              <li key={job.id} className="p-2">
                <Link href={`/tests/jobs/${job?.id}`}>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-base text-gray-500 mt-1">
                    Posted by: {job.posted_by.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default JobsPage;
