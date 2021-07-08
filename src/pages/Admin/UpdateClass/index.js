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
import InputDate from "../../../components/Form/InputDate";
import getValidationErrors from "../../../utils/getValidationErrors";
import ActionCreators from '../../../redux/actionCreators';
import toast, { Toaster } from "react-hot-toast";

export default function UpdateClass()
{
  const dispatch = useDispatch();
  const { classes } = useSelector((state) => state);
  const formRef = useRef(null);
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [date, setDate] = useState(classes.class[0]?.created)
  const [error, setError] = useState(false);
  const classId = location.state?.classId;

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
    dispatch(ActionCreators.getClassRequest(classId))
  }, [classId]);

  useEffect(() =>
  {
    if (classes.saved)
    {
      toast.success('Classes updated successfully.')
    }
  }, [classes])

  async function updateClass(data, { reset })
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
      dispatch(ActionCreators.updateClassRequest({ id: classes.class[0]?.id, moduleId: classes.class[0]?.module_id, name: data.name, date: date }))

      formRef.current.setErrors({});
      reset();
    } catch (err)
    {
      if (err instanceof Yup.ValidationError)
      {
        const errors = getValidationErrors(err);
        toast.error('Class failed to update.')
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
              <FiArrowLeft size={20} color="#25cbd3" onClick={() => dispatch(ActionCreators.getClassesRequest(classes.class[0]?.module_id))} />
            </Link>

            <h1>Update Classe</h1>
          </Wrapper>
          {classes.saved && (
            <Segment color="#5e49ff">Class Edited</Segment>
          )}
          {!classes.saved && (
            <Form ref={formRef} onSubmit={updateClass}>
              <br />
              <Input key={classes.class[0]?.id} id="name" name="name" placeholder="Name" value={classes.class[0]?.name} />

              <InputDate
                key={'dateId - ' + classes.class[0]?.id}
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
                Editar
              </Button>
            </Form>
          )}

        </Content>
      </Container>
    </>
  );
}