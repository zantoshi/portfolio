import React from "react";
import Link from "next/link";

const Items = ({ items }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{items.title}</h3>
      <div className=" my-6 w-auto">
        {items.data.map((item) => (
          <div className="border-2 divide-y divide-slate-700">
            <Link className="hover:text-lime-400 my-4 text-base" href={item[1]}>
              {item[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
