import prisma from "@/db/prisma-db";
import { redirect } from "next/navigation";

export type Quote = {
  id?: number | string;
  author_id?: string | number;
  quote: string;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export async function createQuote(formData: FormData) {
  "use server";

  const quote = formData.get("quote") as string | undefined;

  if (!quote || quote.trim() === "") {
    return;
  }

  const createQuote: Quote = await prisma.qoute.create({
    data: {
      quote,
      author: { connect: { email: "chan@123" } },
    },
  });
  console.log(createQuote);

  return redirect("/tests/quotes");
}

export default function QuotePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        action={createQuote}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a Quote
        </h1>

        {/* Quote Input */}
        <div className="mb-6">
          <label
            htmlFor="quote"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Quote
          </label>
          <textarea
            id="quote"
            name="quote"
            rows={4}
            placeholder="Write your quote here..."
            className="w-full !text-slate-800 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
