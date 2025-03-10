import React from "react";
import { GetContent } from "../../Query";
import { useQuery } from "@apollo/client";

function TitleContent() {
  const { loading, error, data } = useQuery(GetContent);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="container mx-auto mt-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">Error: {error.message}</span>
        </div>
      </div>
    );

  const { title, description } = data?.contactUsPage || {};

  if (title?.length && description?.length) {
    return (
      <div className="container mx-auto mt-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {title || "Contact Us"}
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: description || "Get in touch with us" }}
            className="prose prose-lg text-gray-700 text-center"
          />
        </div>
      </div>
    );
  }

  return null;
}

export default TitleContent;