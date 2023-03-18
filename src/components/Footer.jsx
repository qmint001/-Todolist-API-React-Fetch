import { useContext } from "react";
import { PersonContext } from "./PersonContext";

export const Footer = () => {
  const context = useContext(PersonContext);

  return (
    <p
      className="text-center"
      onClick={() => {
        context.setName("Mary Jane");
      }}
    >
      Made by {context.name}{" "}
      <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
    </p>
  );
};
