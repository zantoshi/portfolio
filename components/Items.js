import React from "react";
import Link from "next/link";

const Items = ({ items }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{items.title}</h3>
      <div className=" my-6 w-auto">
        {items.data.map((item) => (
          <div
            key={item[1]}
            className="border-2 divide-y divide-slate-700 rounded"
          >
            <Link className="hover:text-lime-400 my-4 text-base" href={item[1]}>
              <p className="text-base m-2">{item[0]}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
