import prisma from "@/db/prisma-db";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
// import { Quote } from "./create-quote/page";
import { Prisma } from "@/generated/prisma";
import { deleteQuote } from "./action";

export const metadata: Metadata = {
  title: "Quotes",
  description: "This is Quotes Page",
};

export type Author = {
  id?: string | number;
  name: string | null;
  email: string;
  password?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
};

type QuoteWithAuthor = Prisma.QouteGetPayload<{
  include: { author: true };
}>;

const QuotesPage = async () => {
  const quotes: QuoteWithAuthor[] | undefined = await prisma.qoute.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      author: true,
    },
    take: 10,
  });
  return (
    <React.Fragment>
      <main className="container mx-auto overflow-hidden py-10">
        <section className="p-2 text-violet-600 flex justify-between mb-3">
          <h3 className="text-xl font-bold tracking-wide">Quotes</h3>
          <Link href={"/tests/quotes/create-quote"}>➕</Link>
        </section>
        <section className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {quotes &&
              Array.isArray(quotes) &&
              quotes?.map((q) => (
                <div
                  key={q.id}
                  className="p-3 h-auto rounded-2xl my-1 bg-green-400/90 "
                >
                  {/* <span className=" absolute top-1 left-2">💌</span> */}
                  <div className="flex  justify-between  items-center">
                    <h3 className="text-xl text-indigo-700 p-1">
                      {q?.author?.name}
                    </h3>
                    <span className="text-slate-800 text-xs tracking-widest">
                      {q.created_at.toLocaleDateString()}
                    </span>
                  </div>
                  <span className="text-base text-slate-900">
                    {q?.quote.length > 300
                      ? q.quote.substring(0, 300) + " ..."
                      : q.quote}
                  </span>
                  <div className="pt-4">
                    <form className="flex justify-between">
                      <input type="hidden" name="id" value={q?.id} />
                      <button
                        type="submit"
                        formAction={deleteQuote}
                        className="bg-red-300 p-1 rounded-4xl"
                      >
                        ❌
                      </button>
                      {/* <button className="bg-sky-900 p-1 rounded-4xl">🎗️</button> */}
                    </form>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;
