import React, { useEffect, useState } from "react";
import rIcon from "/R.svg";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleDoc = data?.find((item) => item.id === parseInt(id));
  const { doctor_image, doctor_name, registration_number } = singleDoc;

  return (
    <>
      <div className="text-center bg-white rounded-3xl mb-8 py-20 xl:px-40 mx-4 xl:mx-40">
        <p className="font-extrabold text-3xl mb-4">Doctor’s Profile Details</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className=" bg-white rounded-3xl mb-8 py-20  mx-4 xl:mx-40 p-14">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <img src={doctor_image} alt="" />
          </div>
          <div className="col-span-9">
            <p className="text-3xl font-extrabold mb-3">
              Dr. Cameron Williamson
            </p>
            <p className="text-lg font-medium text-[#0F0F0F]/60">
              MBBS, MD General Medicine, DNB
            </p>
            <p className="text-xl font-medium text-[#0F0F0F]/60 pt-3">
              Working at
            </p>

            <p className="text-xl font-bold mb-5">
              TMSS Medical College & Rafatullah Community Hospital, Bogura
            </p>
            <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
            <div className="flex gap-3 py-3">
              <img src={rIcon} alt="" />
              <p>Reg No: BD 12451254</p>
            </div>
            <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
            <div className="flex items-center mt-5">
              <p className="font-bold mr-4">Availability</p>
              <span className="text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full px-4 py-2 text-sm">
                Sunday
              </span>
            </div>
            <div className="flex items-center mt-5">
              <p className="font-bold mr-4">Consultation Fee:</p>
              <p>
                <span className="font-extrabold text-[#176AE5]">
                  Taka : 273
                </span>
                <span className="px-2"> (incl. Vat)</span>
                <span className="font-medium text-[#176AE5]">
                  Per consultation
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-3xl mb-8 py-20  mx-4 xl:mx-40 p-14">
        <p className="text-center text-2xl font-extrabold mb-4">
          Book an Appointment
        </p>

        <div className="border-dashed w-full border-t border-[#0F0F0F]/20"></div>
        <div className="flex justify-between items-center py-4">
          <p className="text-lg font-bold"> Availability </p>
          <span className="text-[#09982F] bg-[#09982F]/10 border border-[#09982F]/20 text-sm px-4 py-2 rounded-full font-medium">
            Doctor Available Today
          </span>
        </div>
        <div className="border-dashed w-full border-t border-[#0F0F0F]/20 mb-5"></div>

        <p className="text-[#FFA000] bg-[#FFA000]/10 px-4 py-2 rounded-full mb-10">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>

        <button className="btn-one w-full justify-center">
          Book Appointment Now
        </button>
      </div>
    </>
  );
};

export default DoctorDetails;
