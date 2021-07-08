import React, { useState, useCallback } from "react";
import { Container, Error } from "./styles";
import InputMask from "react-text-mask";

export default function InputDate({ name, error, ...rest })
{
  const mask = [
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled] = useState(false);

  const handleInputBlur = useCallback(() =>
  {
    setIsFocused(false);
  }, []);

  return (
    <>
      <br />
      <Container isErroed={!!error} isFilled={isFilled} isFocused={isFocused}>
        <InputMask
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          guide
          mask={mask}
          {...rest}
        />
      </Container>
      <div>{error && <Error>{error}</Error>}</div>
    </>
  );
}
