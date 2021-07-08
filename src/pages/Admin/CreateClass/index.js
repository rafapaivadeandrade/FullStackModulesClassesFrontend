import React, { useRef, useEffect, useState } from "react";
import { Container, Content, Wrapper } from "./styles";
import Header from '../../../components/Header'
import { FiArrowLeft } from "react-icons/fi";
import { Link, Redirect, useLocation } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import InputDate from "../../../components/Form/InputDate";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ActionCreators from '../../../redux/actionCreators';
import getValidationErrors from "../../../utils/getValidationErrors";
import toast, { Toaster } from "react-hot-toast";

export default function NewClass()
{
  const dispatch = useDispatch();
  const { classes } = useSelector((state) => state);
  const formRef = useRef(null);
  const location = useLocation();
  const [date, setDate] = useState("")
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(false);
  const [module, setModule] = useState("")

  useEffect(() =>
  {
    const isAdminProps = location.state?.isAdmin;
    const tempModule = location.state?.module;
    if (!isAdminProps || isAdminProps === undefined)
    {
      return <Redirect to="/" />
    }
    setIsAdmin(isAdminProps);
    setModule(tempModule);
  }, []);

  async function createNewClass(data, { reset })
  {
    try
    {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is obligatory"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      if (!date) setError("Date is obligatory")
      else
      {
        setDate("")
        setError(false)
      }
      dispatch(ActionCreators.createClassRequest({ moduleId: module.id, name: data.name, date: date }))

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
    if (classes.saved)
    {
      toast.success('Class created successfully.')
    }
  }, [classes])

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
            <h1>Criar Classe</h1>
          </Wrapper>

          <Form ref={formRef} onSubmit={createNewClass}>
            <Input name="module" placeholder={module?.name} disabled />

            <Input id="name" name="name" placeholder="Name" />

            <InputDate
              id="date"
              name="date"
              placeholder="__/__/____"
              label="Date"
              error={error}
              value={date}
              onChange={(e) =>
              {
                setDate(e.target.value);
              }}
            />
            <Button type="submit" className="btn">
              Registrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}