import React from "react";
import { GetContent } from "../../Query";
import { useQuery } from "@apollo/client";

const AddressContent = () => {
  const { loading, error, data } = useQuery(GetContent);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">Error: {error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  const addressContent = data?.contactUsPage?.right_side_content;

  if (!addressContent) return null;

  return (
    <div className="max-w-lg bg-white p-6 rounded-md shadow-md ">
      <div className="space-y-12 ">
        {addressContent.map((item) => (
          <div key={item.id}>
            {item.type === "store" ? (
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-gray-900">{item.name}</h4>
                <div className="text-gray-700 leading-relaxed space-y-1">
                  <p>{item.street}</p>
                  <p>{item.city}</p>
                  <a
                    href={`tel:${item.phone}`}
                    className="flex items-center text-gray-700 mt-2 hover:text-green-600"
                  >
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    <span className="ml-2">{item.phone}</span>
                  </a>
                  <a
                    href={`mailto:${item.email}`}
                    className="block text-gray-700 hover:text-green-600"
                  >
                    {item.email}
                  </a>
                  <button className="text-gray-700 hover:text-gray-900 mt-2">
                    View Details +
                  </button>
                </div>
              </div>
            ) : (
              item.type === "social_media" && (
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">{item.name}</h4>
                  <div className="flex gap-4">
                    {item.socialLinks?.map((socialLink) => (
                      <a
                        key={socialLink.id}
                        href={socialLink.link}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: socialLink.svg_text,
                          }}
                          className="w-6 h-6 text-gray-700"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressContent;