import { useMutation } from "@apollo/client";
import { PostForm } from "../Query";
import toast from "react-hot-toast";
import { validateFormData } from "./validation";

const useFormHandler = () => {
  const [submitForm, { loading, error }] = useMutation(PostForm);

  const handleSubmit = async (formState, formApi) => {
    console.log("form state",formState)
    const { values } = formState;
    // console.log("Form values:", values);
    if (!validateFormData(values)) return;
    try {
      await submitForm({ variables: values });
      toast.success("Form submitted successfully!");
      // console.log("values after before", values);
      formApi.reset();
      // console.log("values after reset", values);
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return { handleSubmit, loading, error };
};

export default useFormHandler;
