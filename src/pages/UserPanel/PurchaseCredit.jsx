import React, { useState } from "react";

import Stripe from "stripe";

import {
  CardElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
    },
    invalid: {
      color: "#ff3860",
    },
  },
};

const PurchaseCreditComp = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [updateUserSettings, { isLoading }] = useUpdateUserSettingsMutation();

  const params = useParams();
  const totalCredit = params.totalCredit;

  const billingHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      BillingName: "BillingName",
    };

    if (!stripe) {
      console.log("There is no stripe ", stripe);
      setLoading(false);
      return;
    }

    try {
      const clientSecret = await createPaymentIntent(
        Number(totalCredit * 11.5) * 100,
        "usd"
      );

      const cardElement = elements.getElement(CardNumberElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            type: "card",
            card: cardElement,
            billing_details: {
              name: user.name,
            },
          },
        }
      );

      if (error) {
        console.error("error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
        setLoading(false);
      } else if (paymentIntent.status === "succeeded") {
        console.log("Success", paymentIntent.status);

        const updateRes = await updateUserSettings({
          credit: Number(totalCredit) + Number(user?.credit),
        });

        if (updateRes?.error?.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res?.error?.error}`,
          });
        }
        if (updateRes?.error?.data?.message) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res?.error?.data?.message}`,
          });
        }
        if (updateRes?.data?.success) {
          navigate("/user");
        }

        setLoading(false);
      }
    } catch (error) {
      console.log("Error,", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[475px] m-auto mt-12">
      <div className="mb-4">
        <label className="text-sm text-[#4F5B76] block mb-1">
          Card number{" "}
        </label>
        {/* <input
          className="border rounded-md shadow-md p-2 w-full"
          type="number"
          placeholder="1234 1234 1234 1234"
        /> */}
        <CardNumberElement
          options={{
            ...CARD_OPTIONS,
            placeholder: "Enter card number",
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">Expiry</label>
          {/* <input
            className="border rounded-md shadow-md p-2 w-full"
            type="date"
            placeholder="1234 1234 1234 1234"
          /> */}
          <CardExpiryElement options={CARD_OPTIONS} />
        </div>
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">CVC</label>
          {/* <input
            className="border rounded-md shadow-md p-2 w-full"
            type="text"
            placeholder="CVC"
          /> */}
          <CardCvcElement options={CARD_OPTIONS} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">Country</label>

          <select className="border rounded-md shadow-md p-2 w-full">
            <option>United States</option>
            <option></option>
            <option>Bangladesh</option>
            <option>Soudi Arabia</option>
            <option>Bhutan</option>
            <option>Nepal</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">
            Postal code
          </label>
          <input
            className="border rounded-md shadow-md p-2 w-full"
            type="number"
            placeholder="90210"
          />
        </div>
      </div>
      <button
        onClick={billingHandler}
        disabled={loading || !stripe}
        className="bg-indigo-600 rounded-full text-base font-semibold text-white px-6 py-3"
      >
        {loading ? "Paying..." : "Proceed to pay"}
      </button>
    </div>
  );
};

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_PK, STRIPE_SK } from "../../config/config";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUpdateUserSettingsMutation } from "../../features/auth/authApi";
import Swal from "sweetalert2";

function PurchaseCredit() {
  const stripePromise = loadStripe(STRIPE_PK);

  return (
    <>
      <Elements stripe={stripePromise}>
        <PurchaseCreditComp />
      </Elements>
    </>
  );
}

export default PurchaseCredit;

const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe(STRIPE_SK);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(12000),
      currency: "USD",
    });

    console.log("paymentIntent:", paymentIntent);

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent", error);
    throw new Error("Failed to create PaymentIntent");
  }
};
