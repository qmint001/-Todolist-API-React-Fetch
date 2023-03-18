import { Footer } from "@/components/Footer";
import { PersonContext } from "@/components/PersonContext";
import { Welcome } from "@/components/Welcome";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("John Doe");
  return (
    <div className="container">
      <PersonContext.Provider value={"John Doe"}>
        <Footer />
      </PersonContext.Provider>
      <PersonContext.Provider
        value={{
          name: "Mary Jane",
          setName: () => {
            alert("No name change");
          },
        }}
      >
        <Footer />
      </PersonContext.Provider>
    </div>
  );
}
