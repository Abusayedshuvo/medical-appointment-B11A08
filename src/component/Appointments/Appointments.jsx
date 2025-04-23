import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreDoc } from "../../utility/addToLs";

const Appointments = () => {
  const data = useLoaderData();
  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    const storeDocData = getStoreDoc();
    const convertedData = storeDocData.map((id) => parseInt(id));
    const docList = data.filter((doc) => convertedData.includes(doc.id));
    setAppointmentsList(docList);
  }, [data]);
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-[40px] font-extrabold">My Today Appointments</p>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {appointmentsList.map((item, index) => (
        <div
          key={index}
          className=" bg-white rounded-3xl mb-8 py-20  mx-4 xl:mx-40 p-14"
        >
          <div className="flex justify-between mb-3">
            <div>
              <p className="text-xl font-bold"> {item.doctor_name} </p>
              <p className="text-[#0F0F0F]/60 text-lg font-medium">
                {item.education[0]}
              </p>
            </div>
            <div>
              <p className="text-[#0F0F0F]/60 text-lg font-medium">
                Appointment Fee : {item.fee} Taka + Vat
              </p>
            </div>
          </div>
          <div className="border-dashed w-full border-t border-[#0F0F0F]/20 py-3"></div>

          <button className="text-[#FF0000] border border-[#FF0000] w-full rounded-full py-3">
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
