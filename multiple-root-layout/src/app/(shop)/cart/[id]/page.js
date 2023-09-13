import Link from "next/link";
// 動態matadata
export async function generateMetadata({ params }) {
    return {
        title: params.id,
        description: 'The React Framework for the Web',
    }
}
// export const metadata = {
//     title:{
//       absolute: 'absolute',
//     },
//   }
export default function CartItem({params}) {
  return (
    <>
      <h1>CartItem</h1>
      {params.id}<br/>
      <Link href={'/'}>To Home</Link>
    </>
  );
}
