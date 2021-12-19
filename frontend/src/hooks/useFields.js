import { useState } from "react";

const useFields = (initialState) => {

  //initiates the default from the form
  const [formData, setFormData] = useState(initialState);

  //processes the data coming from the form
  const handleChange = e => {
    const { value, name } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  //check if all form fields are filled, if not return falseand button will be disabled 
  let releaseButton = () => {
    return Object.keys(formData).every(key => formData[key].length > 0);
  }

  return [formData, handleChange, releaseButton];
}

export default useFields;