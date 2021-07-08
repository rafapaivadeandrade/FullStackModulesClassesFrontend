import React, { useRef, useEffect, useState } from "react";
import { Container, Content, Wrapper } from "./styles";
import Header from '../../../components/Header'
import { FiArrowLeft } from "react-icons/fi";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import getValidationErrors from "../../../utils/getValidationErrors";
import ActionCreators from '../../../redux/actionCreators';
import toast, { Toaster } from "react-hot-toast";

export default function NewModule()
{
  const dispatch = useDispatch();
  const { Modules } = useSelector((state) => state);

  const formRef = useRef(null);
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() =>
  {
    const isAdminProps = location.state?.isAdmin;
    if (!isAdminProps || isAdminProps === undefined)
    {
      return <Redirect to="/" />
    }
    setIsAdmin(isAdminProps);
  }, []);

  async function createNewModule(data, { reset })
  {
    try
    {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is obligatory"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(ActionCreators.createModuleRequest(data.name))

      formRef.current.setErrors({});
      reset();
    } catch (err)
    {
      if (err instanceof Yup.ValidationError)
      {
        const errors = getValidationErrors(err);
        toast.error('Module fail to create.')
        formRef.current?.setErrors(errors);
      }
    }
  }

  useEffect(() =>
  {
    if (Modules.saved)
    {
      toast.success('Module created successfully.')
    }
  }, [Modules])

  if (location.state?.isAdmin === undefined)
  {
    return <Redirect to="/" />
  }

  return (
    <>
      <Header isAdmin={isAdmin} />
      <Container>
        <Toaster />
        <Content>
          <Wrapper>
            <Link to="/admin" className="back-link">
              <FiArrowLeft size={20} color="#25cbd3" />
            </Link>
            <h1>Create Module</h1>
          </Wrapper>

          <Form ref={formRef} onSubmit={createNewModule}>
            <br />
            <Input id="name" name="name" placeholder="Name" />

            <Button type="submit" className="btn">
              Registrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}