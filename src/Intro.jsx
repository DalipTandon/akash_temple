"use client";

import React from "react";
import { LayoutGrid } from "../src/components/ui/layout-grid";
import culture from "../img/culture.jpg";
import langarsewa from "../img/langarsewa.jpg";
import schoolpic from "../img/schoolpic.jpg";
import murtisathpna from "../img/murtisthpana.jpg";
export default function LayoutGridDemo() {
  return (
    <div className="h-screen  py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Murti Sathapana 
    </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The temple complex hosts various cultural and spiritual events, including the celebration of Nav Durga Sathapna divas from October 28th to November 4th. During this occasion, Murties of nine Durgas are installed, and traditional rituals, including the creation of a Shaya (Bistar for Durga Ji), are observed.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Shri Sidh Baba Balak Nath Welfare Society:
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Our benevolent society, founded with the vision of Guru Maharaj Jee, supports impoverished students, provides essential items to families in need, and addresses various humanitarian causes. Annually, approximately 300 jerseys, pairs of shoes, and educational supplies are distributed to local students.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Education for the Underprivileged:
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In 2003, Guru Maharaj Jee's dream of offering quality education to underprivileged children came to fruition with the establishment of Shri Sidh Baba Balak Nath High School. The school, now a recognized institution affiliated with the Punjab School Education Board, provides free or concessional education to around 200 students.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Cultural and Spiritual Celebrations
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The temple complex hosts various cultural and spiritual events, including the celebration of Nav Durga Sathapna divas from October 28th to November 4th. During this occasion, Murties of nine Durgas are installed, and traditional rituals, including the creation of a Shaya (Bistar for Durga Ji), are observed.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail: culture
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:langarsewa
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:schoolpic
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:murtisathpna
  },
];
