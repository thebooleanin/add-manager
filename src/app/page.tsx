import Image from "next/image";
import Header from "./components/header/header";
import AddManager from "./components/form/add.form";

export default function Home() {
  return (
    <>
      <Header />
      <AddManager />
    </>
  );
}
