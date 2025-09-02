import prisma from "@/db/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// ✅ Server Action to create job
async function createJob(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const company = formData.get("company")?.toString() || "";
  const location = formData.get("location")?.toString() || null;
  const type = formData.get("type")?.toString() || "full time";
  const salary = formData.get("salary")?.toString() || null;

  if (!title || !description || !company) {
    throw new Error("Title, description and company are required");
  }

  await prisma.job.create({
    data: {
      title,
      description,
      company,
      location,
      type,
      salary,
      posted_by: { connect: { email: "chan@123" } },
    },
  });

  revalidatePath("/tests/jobs");
  redirect("/tests/jobs");
}

export default function CreateJobForm() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 sm:w-[600px]">
      <form
        action={createJob}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl underline underline-offset-8 font-bold text-indigo-600 mb-6 text-center">
          Post a Job
        </h1>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="e.g. Frontend Developer"
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            placeholder="Write the job details..."
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="e.g. Google"
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Remote or New York"
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Job Type
          </label>
          <select
            id="type"
            name="type"
            defaultValue="full time"
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
          >
            <option value="full time">Full Time</option>
            <option value="part time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        {/* Salary */}
        <div className="mb-6">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Salary
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="e.g. $80,000 / year"
            className="w-full text-indigo-500 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
}
