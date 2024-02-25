import { useLoaderData } from "react-router";
import pb from "../../api/pocketbase";
import { Form, Link } from "react-router-dom";

export default function Detail() {

  const param = useLoaderData();

  return (
    <>
      <h3>Detail</h3>
      <Form method="post" action="delete">
        <input hidden type="text" name="id" placeholder="상품이름" defaultValue={param.id} />
        <p>{param.delivery_type}</p>
        <p>{param.product_name}</p>
        <p>{param.product_descriptions}</p>
        <p>{param.product_price}원</p>
        <Link to='edit'>수정</Link>
        <button type="submit">삭제</button>
      </Form>
    </>
  )
}

export async function loader({ params }) {
  return await pb.collection('product').getOne(params.id);
}