import { Form, Link, redirect, useOutletContext } from "react-router-dom";
import pb from "../../api/pocketbase";

export default function Change() {

  const PBdata = useOutletContext();

  return (
    <>
      <h3>Change</h3>
      <Form method="post">
        <input type="text" name="product_name" placeholder="상품이름" />
        <input type="text" name="product_descriptions" placeholder="설명" />
        <input type="number" name="product_price" placeholder="가격" />
        <button type="submit">add</button>
      </Form>

      {
        PBdata.map((item, index) => {
          return (
            <ul key={index}>
              <Link to={`/detail/${item.id}`}><li>{item.product_name}</li></Link>
            </ul>
          )
        })
      }
    </>
  )
}

export async function action({ request }) {
  const data = await request.formData();

  await pb.collection('product').create({
    "product_name": data.get('product_name'),
    "product_descriptions": data.get('product_descriptions'),
    "product_price": data.get('product_price'),
  });

  return redirect('/change')
}