import React from "react";
import rIcon from "/R.svg";

const Doctor = ({ doc }) => {
  const {
    doctor_image,
    doctor_name,
    education,
    experience,
    registration_number,
  } = doc;
  return (
    <>
      <div className="bg-white rounded-2xl p-8">
        <img className="rounded-2xl mb-6" src={doctor_image} alt="" />
        <div className="mb-4">
          <span className="text-[#09982F] bg-[#09982F]/10 border border-[#09982F]/20 rounded-full px-4 py-2 text-sm font-medium mr-2">
            Available
          </span>
          <span className="text-[#176AE5] bg-[#176AE5]/10 border border-[#176AE5]/20 rounded-full px-4 py-2 text-sm font-medium ">
            {experience} Experience
          </span>
        </div>
        <p className="text-2xl font-extrabold"> {doctor_name} </p>
        <p className="text-lg font-medium text-[#0F0F0F]/60 pt-3">
          {education[0]},
        </p>
        <p className="text-lg font-medium text-[#0F0F0F]/60 pb-3">
          {education[1]}
        </p>

        <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
        <div className="flex gap-3 my-4">
          <img src={rIcon} alt="" />
          <p className="text-[#0F0F0F]/70 font-medium text-lg">
            Reg No: {registration_number}
          </p>
        </div>
        <button className="text-[20px] font-bold text-[#176AE5] border-2 border-[#176AE5] rounded-full w-full py-3">
          View Details
        </button>
      </div>
    </>
  );
};

export default Doctor;
