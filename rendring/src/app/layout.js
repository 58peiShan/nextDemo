export default function Layout(props) {
  return (
    <html>
      <body>
        {props.children}
        {/* 這裡下面跑page12：<br/>
      {props.page1}<br/>
      {props.page2} */}
      </body>
    </html>
  );
}
