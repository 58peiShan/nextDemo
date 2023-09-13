'use client'
export default function Page() {
   
  return (
   <>
   <button onClick={()=>fetch('http://localhost:3000/routeHandlers/6')}>
    發請求
   </button>
   </>
  );
}
