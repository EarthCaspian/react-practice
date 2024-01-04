import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button} from "semantic-ui-react";
import CgTextInput from "../utilities/customFormControls/CgTextInput";

export default function ProductAdd() {
  const initialValues = {
    title: "",
    price: 10,
  };

  const schema = Yup.object({
    title: Yup.string().required(),
    price: Yup.number().required(),
  });

  return (
    <div>
      <Formik initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values)=> {
          console.log(values);
        }}>
        <div style={{width:"auto"}}>
          <h3 style={{marginTop:"2em"}}>Add a Product</h3>
        <Form className="ui form" style={{marginTop:"2em"}}>
          <CgTextInput name="title" placeholder="Product Title"/>
          <CgTextInput name="price" placeholder="Price"/>
          <Button style={{marginTop:"2em"}} color="green" type="submit">Add Product</Button>
        </Form>
        </div>
        
      </Formik>
    </div>
  );
}
