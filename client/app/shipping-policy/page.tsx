import React from "react";

type Props = {};

const ShippingPolicy = (props: Props) => {
  return (
    <div className="my-2 py-2 container px-8 ">
      <h1 className="text-xl font-bold mt-4 text-center py-2 mb-2">
        Shipping Policy for Kustom Parts
      </h1>

      <div className="w-4/5 mx-auto ">
        <strong> Kustom Parts.in</strong> ("we" and "us") is the operator of (
        <a href="https://kustomparts.in" className="text-indigo-500">
          https://kustomparts.in
        </a>
        ) ("Website"). By placing an order through this Website you will be
        agreeing to the terms below. These are provided to ensure both parties
        are aware of and agree upon this arrangement to mutually protect and set
        expectations on our service.
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 1. General </h2>
        <p>
          Subject to stock availability. We try to maintain accurate stock
          counts on our website but from time-to-time there may be a stock
          discrepancy and we will not be able to fulfill all your items at time
          of purchase. In this instance, we will fulfill the available products
          to you, and contact you about whether you would prefer to await
          restocking of the backordered item or if you would prefer for us to
          process a refund.
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 2. Shipping Costs </h2>
        <p>
          Shipping costs are calculated during checkout based on weight,
          dimensions and destination of the items in the order. Payment for
          shipping will be collected with the purchase. This price will be the
          final price for shipping cost to the customer.
        </p>
      </div>
      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 3. Returns </h2>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            3.1 Return Due To Change Of Mind{" "}
          </h3>
          Kustom Parts.in will happily accept returns due to change of mind as
          long as a request to return is received by us within 2 days of receipt
          of item and are returned to us in original packaging, unused and in
          resellable condition. Return shipping will be paid at the customers
          expense and will be required to arrange their own shipping. Once
          returns are received and accepted, refunds will be processed to store
          credit for a future purchase. We will notify you once this has been
          completed through email. (Kustom Parts.in) will refund the value of
          the goods returned but will NOT refund the value of any shipping paid.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2"> 3.2 Warranty Returns </h3>
          Kustom Parts.in will happily honor any valid warranty claims, provided
          a claim is submitted within 90 days of receipt of items. Customers
          will be required to pre-pay the return shipping, however we will
          reimburse you upon successful warranty claim. Upon return receipt of
          items for warranty claim, you can expect Kustom Parts.in to process
          your warranty claim within 7 days. Once warranty claim is confirmed,
          you will receive the choice of:
          <br></br>
          (a) refund to your payment method
          <br></br>
          (b) a refund in store credit
          <br></br>
          (c) a replacement item sent to you (if stock is available)
        </p>
      </div>
      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 4. Delivery Terms</h2>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            4.1 Transit Time Domestically{" "}
          </h3>
          In general, domestic shipments are in transit for 2 - 7 days
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            4.2 Transit time Internationally{" "}
          </h3>
          Generally, orders shipped internationally are in transit for 4 - 22
          days. This varies greatly depending on the courier you have selected.
          We are able to offer a more specific estimate when you are choosing
          your courier at checkout.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2"> 4.3 Dispatch Time </h3>
          Orders are usually dispatched within 2 business days of payment of
          order Our warehouse operates on Monday - Friday during standard
          business hours, except on national holidays at which time the
          warehouse will be closed. In these instances, we take steps to ensure
          shipment delays will be kept to a minimum.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            4.4 Change Of Delivery Address{" "}
          </h3>
          For change of delivery address requests, we are able to change the
          address at any time before the order has been dispatched.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2"> 4.5 P.O. Box Shipping </h3>
          Kustom Parts.in will ship to P.O. box addresses using postal services
          only. We are unable to offer couriers services to these locations.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            4.6 Military Address Shipping{" "}
          </h3>
          We are able to ship to military addresses using USPS. We are unable to
          offer this service using courier services.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2"> 4.7 Items Out Of Stock</h3>
          If an item is out of stock, we will cancel and refund the out-of-stock
          items and dispatch the rest of the order.
        </p>

        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            4.8 Delivery Time Exceeded
          </h3>
          If delivery time has exceeded the forecasted time, please contact us
          so that we can conduct an investigation
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4">
          {" "}
          5. Tracking Notifications{" "}
        </h2>
        <p>
          Upon dispatch, customers will receive a tracking link from which they
          will be able to follow the progress of their shipment based on the
          latest updates made available by the shipping provider.
        </p>
      </div>
      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4">
          {" "}
          6. Parcels Damaged In Transit{" "}
        </h2>
        <p>
          If you find a parcel is damaged in-transit, if possible, please reject
          the parcel from the courier and get in touch with our customer
          service. If the parcel has been delivered without you being present,
          please contact customer service with next steps.
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 7. Duties & Taxes </h2>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2"> 7.1 Sales Tax </h3>
          Sales tax has already been applied to the price of the goods as
          displayed on the website
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            7.2 Import Duties & Taxes
          </h3>
          Import duties and taxes for international shipments may be liable to
          be paid upon arrival in destination country. This varies by country,
          and Kustom Parts.in encourage you to be aware of these potential costs
          before placing an order with us. If you refuse to to pay duties and
          taxes upon arrival at your destination country, the goods will be
          returned to Kustom Parts.in at the customers expense, and the customer
          will receive a refund for the value of goods paid, minus the cost of
          the return shipping. The cost of the initial shipping will not be
          refunded.
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 8. Cancellations </h2>
        <p>
          If you change your mind before you have received your order, we are
          able to accept cancellations at any time before the order has been
          dispatched. If an order has already been dispatched, please refer to
          our
          <a href="/returnpolicy" className="text-indigo-500 mx-2">
            refund policy
          </a>
          .
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 9. Insurance </h2>
        <p>
          Parcels are insured for loss and damage up to the value as stated by
          the courier.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            9.1 Process for parcel damaged in-transit
          </h3>
          We will process a refund or replacement as soon as the courier has
          completed their investigation into the claim.
        </p>
        <p>
          <h3 className="text-lg font-sm mt-4 mb-2">
            {" "}
            9.2 Process for parcel lost in-transit
          </h3>
          We will process a refund or replacement as soon as the courier has
          conducted an investigation and deemed the parcel lost.
        </p>
      </div>

      <div className="w-4/5 mx-auto ">
        <h2 className="text-lg font-bold mt-4 py-4"> 10. Customer service</h2>
        <p>
          For all customer service enquiries, please phone us at
          inkiyachotiya.inc@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
