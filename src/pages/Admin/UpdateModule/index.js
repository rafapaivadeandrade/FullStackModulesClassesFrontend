import React, { useRef, useEffect, useState } from "react";
import { Container, Content, Wrapper, Segment } from "./styles";
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

export default function UpdateModule()
{
  const dispatch = useDispatch();
  const { Modules } = useSelector((state) => state);
  const formRef = useRef(null);
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const moduleId = location.state.moduleId;

  useEffect(() =>
  {
    const isAdminProps = location.state?.isAdmin;
    if (!isAdminProps || isAdminProps === undefined)
    {
      return <Redirect to="/" />
    }
    setIsAdmin(isAdminProps);
  }, []);

  useEffect(() =>
  {
    dispatch(ActionCreators.getModuleRequest(moduleId))
  }, [moduleId]);

  useEffect(() =>
  {
    if (Modules.saved)
    {
      toast.success('Module updated successfully.')
    }
  }, [Modules])

  async function updateModule(data, { reset })
  {
    try
    {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is obligatory"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(ActionCreators.updateModuleRequest({ id: moduleId, name: data.name }))

      formRef.current.setErrors({});
      reset();
    } catch (err)
    {
      if (err instanceof Yup.ValidationError)
      {
        const errors = getValidationErrors(err);
        toast.error('Module failed to update.')
        formRef.current?.setErrors(errors);
      }
    }
  }

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

            <h1>Update Module</h1>
          </Wrapper>
          {Modules.saved && (
            <Segment color="#5e49ff">Module Edited</Segment>
          )}
          {!Modules.saved && (
            <Form ref={formRef} onSubmit={updateModule}>
              <br />
              <Input key={Modules.module[0]?.id} id="name" name="name" placeholder="Name" value={Modules?.module[0]?.name} />
              <Button type="submit" className="btn">
                Editar
              </Button>
            </Form>
          )}

        </Content>
      </Container>
    </>
  );
}