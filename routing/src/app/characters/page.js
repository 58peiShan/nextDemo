
import Role from "./_role/page";
import Species from "./species/page";
export default function Page() {
  return (
    <div
      style={{
        height: "400px",
        width: "500px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
       <Role id={'55'}/>
      <Species/>
    </div>
  );
}
