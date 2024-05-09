import Image from "next/image";
import Header from "./components/header/header";
import AddForm from "./components/form/add.form";

export default function Home() {
  return (
    <div>
      <Header />
      <AddForm />
    </div>
  );
}
