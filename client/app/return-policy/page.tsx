import React from "react";

type Props = {};

const ReturnPolicy = (props: Props) => {
  return (
    <div className="my-2 py-2 container px-8 .mobile-width-auto">
      <h1 className="text-xl font-bold mt-4 text-center py-2 mb-2">
        Return Policy for Kustom Parts
      </h1>

      <p className="w-1/2 mx-auto mw-90 ">
        Thank you for your Purchase. We hope you are happy with your Purchase.
        However , If you are not completely statisfied with your purchase for
        any reason , you may return it to us for an exchange policy only. Please
        see below for more informationon on our return policy
      </p>

      <div className="w-1/2 mx-auto mw-90">
        <h2 className="text-xl font-bold mt-4 text-center py-2 mb-2">Return</h2>
        <p>
          All Retrun must be postmarked within seven(7) days of the purchase
          date. All returned items must be in new and unused conditions , with
          all original tags and labels attached
        </p>
      </div>
      <div className="w-1/2 mx-auto mw-90">
        <h2 className="text-xl font-bold mt-4 text-center py-2 mb-2">
          Return Process
        </h2>
        <p>
          {" "}
          To Return an item , Please email customer services at
          <a
            href="mailto:partskustom@gmail.com"
            className="text-indigo-500 mx-2"
          >
            partskustom@gmail.com
          </a>
          to obtain a Return Merchandise Authorization (RMA) number. After
          receiving a RMA Number. Place the item securely in its original
          packing and include your proof of purchase and mail your return to the
          following address:
          <br />
          <br />
          Kustom Parts <br />
          Attn: Harshit Bishnoi <br />
          RMA : #, <br />
          Sector No 3 , MP Colony , Bikaner <br />
          Rajasthan <br />
          Pin Code: 334004 <br />
          Mobile Number: 9672313305 <br />
        </p>
        <p className="pt-4">
          You may also use the prepaid shipping label enclosed with your
          package. Return shipping charges will be paid or reimbursed by us
        </p>
      </div>
      <div className="w-1/2 mx-auto mw-90">
        <h2 className="text-xl font-bold mt-4 text-center py-2 mb-2">
          Refunds
        </h2>
        <p>
          After receiving your return and inspecting the conditions of your item
          , we will process your exchange. Please allow at least five(5) days
          from receipt of your item to process your exchange. We will notify you
          by email when your return has been processed
        </p>
      </div>
      <div className="w-1/2 mx-auto mw-90">
        <h2 className="text-xl font-bold mt-4 text-center py-2 mb-2">
          Exceptions
        </h2>
        <p>
          For Defective or Damaged products , please contact us at contact
          details below to arrange a refund or exchange.
        </p>
      </div>
      <div className="w-1/2 mx-auto mw-90">
        <h2 className="text-xl font-bold mt-4 text-center py-2 mb-2">
          Questions
        </h2>
        <p>
          If You have any questions concerning our return policy , please
          contact us at :<br />
          9672313305
          <br />
          email:{" "}
          <a
            href="mailto:partskustom@gmail.com"
            className="text-indigo-500 mx-2"
          >
            partskustom@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
