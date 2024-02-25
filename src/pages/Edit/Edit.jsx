import { Form, redirect, useLoaderData } from "react-router-dom"
import pb from "../../api/pocketbase";

export default function Edit() {

  const param = useLoaderData();

  return (
    <>
      <div>Edit</div>
      <Form method="post">
        <input hidden type="text" name="id" placeholder="상품이름" defaultValue={param.id} />
        <input type="text" name="product_name" placeholder="상품이름" defaultValue={param.product_name} />
        <input type="text" name="product_descriptions" placeholder="설명" defaultValue={param.product_descriptions} />
        <input type="number" name="product_price" placeholder="가격" defaultValue={param.product_price} />
        <button type="submit">저장</button>
      </Form>
    </>
  )
}

export async function action({ request }) {
  const data = await request.formData();

  await pb.collection('product').update(
    data.get('id'), {
    "product_name": data.get('product_name'),
    "product_descriptions": data.get('product_descriptions'),
    "product_price": data.get('product_price'),
  });

  return redirect(`/detail/${data.get('id')}`)
}