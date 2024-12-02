import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
    <div className=" bg-white dark:bg-gray-800 items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white  px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className=" text-center ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Stay Ahead with Industry Insights
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-100">
          Join our community to receive the latest updates and expert analyses on AI, data analytics, and technology trends.
        </p>
      </div>
      <div className="flex-shrink-0 w-full text-center lg:w-auto">
      <div className="p-6 rounded-xl w-full max-w-md mx-auto ">
  <form className="flex items-center justify-center gap-4">
    <input
      type="email"
      placeholder="Email Address"
      className="p-2 w-full md:w-64 rounded-nd border border-gray-300 dark:border-gray-700 shadow-sm focus: outline-non focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
    />
    <button
      type="submit"
      className="py-3 px-7 text-lg font-medium text-center text-white bg-teal-700 rounded-full">
      Subscribe
    </button>
  </form>
</div>

      </div>
    </div>
    </Container>
  );
};

