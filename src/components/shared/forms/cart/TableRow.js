import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/user-slice";
const TableRow = ({ service, cartNum }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <tr>
      <th
        scope="row"
        className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        {cartNum}
      </th>
      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        {service.service}
      </td>
      <td className="flex justify-between py-5 h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        <span>
          <AiFillMinusCircle
            className={
              "text-xl text-primary-colour hover:text-secondary-colour transition duration-300"
            }
            onClick={() => dispatch(userActions.removeFromCartHandler())}
          />
        </span>
        {service.quantity}
        <span>
          <AiFillPlusCircle
            className={
              "text-xl text-primary-colour hover:text-secondary-colour transition duration-300"
            }
            onClick={() => dispatch(userActions.addToCartHandler(service))}
          />
        </span>
      </td>

      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
        {`R${service.price}`}
      </td>
    </tr>
  );
};

export default TableRow;
