import React from "react";

const TableRow = ({ service }) => {
  return (
    <tr>
      <th
        scope="row"
        className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        1
      </th>
      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        {service.service}
      </td>
      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        {service.quantity}
      </td>

      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        {`R${service.price}`}
      </td>
    </tr>
  );
};

export default TableRow;
