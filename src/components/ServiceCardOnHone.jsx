import React from "react";

function ServiceCardOnHome({ data }) {
  const { icon: Icon, heading, paragraph } = data;
  console.log(data)

  return (
    <div className={` ${heading=="Meta & Google Ads"?"mt-42":""} ${heading=="SEO Optimization"?"mt-20":""} ${heading=="Brand Strategy"?"mt-20":""} ${heading=="Influencer Marketing"?"mt-42":""}`}>
        <div className={`p-6  bg-[#24191996] shadow-white shadow-inner rounded-2xl text-center flex flex-col justify-center items-center`}>
      <Icon className="text-7xl text-[#F97316] mb-4 " />
      <h3 className="text-2xl font-semibold text-white ">{heading}</h3>
      <p className="text-lg text-[#949494]">{paragraph}</p>
    </div>
    </div>
  );
}

export default ServiceCardOnHome;
