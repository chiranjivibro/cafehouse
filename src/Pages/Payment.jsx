import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
function Payment() {
  const { state } = useContext(cartContext);
  const totalAmount = state.cartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);
  const totalItems = state.cartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  const transaction_uuid = uuidv4();
  let Message =`total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  console.log("hashInBase64",hashInBase64)

  return (
    <div>
      <body>
        <form
          className="border-2 border-red-500  w-96  m-auto space-x-4 "
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input
            type="hidden"
            id="amount"
            name="amount"
            value={totalAmount}
            required
          />
          <input
            type="hidden"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
          />
          <input
            type="hidden"
            id="total_amount"
            name="total_amount"
            value={totalAmount}
            required
          />
          <input
            type="hidden"
            id="transaction_uuid"
            name="transaction_uuid"
            value={transaction_uuid}
            required
          />
          <input
            type="hidden"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
          />
          <input
            type="hidden"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="success_url"
            name="success_url"
            value="http://localhost:5173/success"
            required
          />
          <input
            type="hidden"
            id="failure_url"
            name="failure_url"
            value="http://localhost:5173/failure"
            required
          />
          <input
            type="hidden"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
          <input
            type="hidden"
            id="signature"
            name="signature"
            value={hashInBase64}
            required
          />

          <div className="space-x-5">
            <p>Total Amount:{totalAmount}</p>
            <p>Total Item {totalItems}</p>
            
            <input
              className="bg-green-600   w-36 p-2  m-2  text-white "
              value="Conform"
              type="submit"
            />
          </div>
        </form>
      </body>
    </div>
  );
}

export default Payment;
