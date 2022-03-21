import React from "react";
import Form from "./form";

function Card() {
  return (
    <div
      style={{
        margin: "0 auto",
        backgroundColor: "white",
        width: "950px",
        height: "600px",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <Form />
    </div>
    // <table className="table table-sm">
    //   <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">First</th>
    //       <th scope="col">Last</th>
    //       <th scope="col">Handle</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}

export default Card;
