import { Outlet, useLoaderData } from "react-router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import pb from "../../api/pocketbase"

export default function RootLayout() {

  const PBdata = useLoaderData();
  // console.log(PBdata)

  return (
    <>
      <NavBar />
      <Header />
      <Outlet context={PBdata} />
      <Footer />
    </>
  )
}

export async function loader() {
  const data = await pb.collection('product').getFullList();
  return data;
}