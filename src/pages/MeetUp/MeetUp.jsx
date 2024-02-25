import { useOutletContext } from "react-router";

export default function MeetUp() {

  const data = useOutletContext();
  // console.log(data);

  return (
    <>
      <h3>MeetUp</h3>
      {
        data.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.product_name}</li>
            </ul>
          )
        })
      }
    </>
  )
}