/* eslint-disable @typescript-eslint/no-empty-object-type */
import JobDetailCard from "@/components/share/JobDetailCard";
import prisma from "@/db/prisma-db";
import { Prisma } from "@/generated/prisma";
import Link from "next/link";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export type Job = Prisma.JobGetPayload<{}>;
export type JobWithInclude = Prisma.JobGetPayload<{
  include: {
    application: true;
    posted_by: true;
  };
}>;

const DetailJobPage = async ({ params }: Props) => {
  const { id } = await params;

  const job: JobWithInclude | null = await prisma.job.findUnique({
    where: { id: Number(id) },
    include: {
      posted_by: true,
      application: true,
    },
  });
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 text-slate-900 p-4 flex justify-center items-center">
        <section className="flex flex-col gap-3">
          <Link className="text-3xl" href={"/tests/jobs"}>
            👈
          </Link>
          <JobDetailCard job={job} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default DetailJobPage;
