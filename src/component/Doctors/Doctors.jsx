import React, { Suspense } from "react";

import Doctor from "./Doctor";

const Doctors = ({ data }) => {
  return (
    <div className="py-20 mx-4 xl:mx-40">
      <div className="text-center max-w-[1000px] mx-auto mb-8">
        <p className="text-[40px] font-extrabold mb-4">Our Best Doctors</p>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Suspense fallback={<p> Loading .....</p>}>
          {data?.map((doc, index) => (
            <Doctor key={index} doc={doc}></Doctor>
          ))}
        </Suspense>
      </div>

      <div className="text-center mt-12">
        <button className="btn-one">View All Doctors</button>
      </div>
    </div>
  );
};

export default Doctors;
