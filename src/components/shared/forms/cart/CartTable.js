import React from "react";
import { useSelector } from "react-redux";
import TableRow from "@/components/shared/forms/cart/TableRow";

const CartTable = () => {
  const state = useSelector((state) => state.user);
  const cart = state.cart;
  const totalItems = state.totalItems;

  const tableRows = cart.map((service, idx) => {
    return <TableRow key={idx} service={service} />;
  });

  return (
    <>
      {/*<!-- Component: Simple with footer --> */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Description
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Price
              </th>
            </tr>
            {/*<tr>*/}
            {/*  <th*/}
            {/*    scope="row"*/}
            {/*    className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "*/}
            {/*  >*/}
            {/*    1*/}
            {/*  </th>*/}
            {/*  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">*/}
            {/*    Apple Watch*/}
            {/*  </td>*/}
            {/*  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">*/}
            {/*    White*/}
            {/*  </td>*/}

            {/*  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">*/}
            {/*    R299*/}
            {/*  </td>*/}
            {/*</tr>*/}
            {tableRows}
          </tbody>
          <tfoot>
            <tr>
              <td
                className="h-12 px-6 text-sm font-medium border-t border-l first:border-l-0 stroke-slate-700 text-slate-700"
                colSpan="2"
              ></td>
              <td className="h-12 px-6 text-sm font-medium border-t border-l first:border-l-0 stroke-slate-700 text-slate-700 ">
                Total
              </td>
              <td className="h-12 px-6 text-sm font-medium border-t border-l first:border-l-0 stroke-slate-700 text-slate-700 ">
                R5297
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/*<!-- End Simple with footer --> */}
    </>
  );
};

export default CartTable;
