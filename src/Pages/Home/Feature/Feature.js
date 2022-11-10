import React from 'react';

const Feature = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="heading text-5xl text-center font-bold">Why Choose Us</h1>
      <div className="divider"></div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="px-5">
          <img src="https://pathao.com/wp-content/uploads/2018/12/ic_Parcel_Feature_1.png" alt="" />
          <h2 className="heading text-2xl text-center mb-5 mt-4 font-bold">On Demand Delivery</h2>
          <p className="paragraph text-lg ">
            Left your charger or keys at home? Have it delivered to you on Harper Parcel, without
            any hassle!
          </p>
        </div>
        <div className="px-5">
          <img src="https://pathao.com/wp-content/uploads/2018/12/ic_Car_Feature_3.png" alt="" />
          <h2 className="heading text-2xl text-center mb-5 mt-4 font-bold">Trust Us</h2>
          <p className="paragraph text-lg ">
            You can trust us to deliver your most confidential documents to the desired place
            absolutely intact right on time!
          </p>
        </div>
        <div className="px-5">
          <img src="https://pathao.com/wp-content/uploads/2018/12/ic_Parcel_Feature_2.png" alt="" />
          <h2 className="heading text-2xl text-center mb-5 mt-4 font-bold">Deliver via Parcel!</h2>
          <p className="paragraph text-lg ">
            With Harper Parcel, you can get your item in the quickest time. Because your emergencies
            are Parcel&apos;s biggest concern!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
