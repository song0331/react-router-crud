import { redirect } from "react-router"
import pb from "../../api/pocketbase";


export async function action({ request }) {
  const data = await request.formData();
  console.log('delete');

  await pb.collection('product').delete(data.get('id'))
  return redirect('/change')
}