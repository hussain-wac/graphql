import React from "react";
import { Form } from "informed";
import toast, { Toaster } from "react-hot-toast";
import CustomInput from "./CustomInput";
import useFormHandler from "../../hooks/useFormHandler";
import { validateEmail, validateName, validatePhoneNumber } from "../../hooks/validation";

const FormContact = () => {
  const { handleSubmit, loading, error } = useFormHandler();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Contact Us
      </h3>
      
      <Form className="space-y-6">
        {({ formApi, formState }) => (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <CustomInput
                name="request_type"
                type="text"
                label="Request Type"
                required={true}
                className="w-full"
              />
              <CustomInput
                name="name"
                type="text"
                label="Name"
                required={true}
                validate={validateName}
                className="w-full"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <CustomInput
                name="email"
                type="email"
                label="Email"
                required={true}
                validate={validateEmail}
                className="w-full"
              />
              <CustomInput
                name="telephone"
                type="text"
                label="Telephone"
                required={true}
                validate={validatePhoneNumber}
                className="w-full"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <CustomInput
                name="orderNumber"
                type="text"
                label="Order Number"
                className="w-full"
              />
              <CustomInput
                name="productSku"
                type="text"
                label="Product SKU"
                required={true}
                className="w-full"
              />
            </div>

            <div className="w-full">
              <CustomInput
                name="comment"
                type="text"
                label="Comment"
                required={true}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-end space-x-4 mt-8">
              {error && (
                <p className="text-red-500 text-sm">
                  Error submitting form. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                onClick={() => handleSubmit(formState, formApi)}
                className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {loading ? (
                  <>
                    <span>Submitting</span>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default FormContact;