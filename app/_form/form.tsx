import React from 'react';
import Button from '@/component/Button';
import Input from '@/component/Input';

const Form =  () => {
  const handleSubmit = async (formData: FormData) => {
      'use server'// Mark this as a server action
      console.log('Form submitted',formData);
    const inputValue = formData.get('inputField') as string;
    console.log('Form submitted with:', inputValue);
  };

  return (
    <form
    action={handleSubmit}
      className="flex flex-col md:flex-row gap-4 p-4 max-w-lg mx-auto bg-white shadow-md rounded-md"
    >
      <Input
        id="inputField"
        name="inputField"
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type task..."
      />
      <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
        Submit
      </Button>
    </form>
  );
};

export default Form;