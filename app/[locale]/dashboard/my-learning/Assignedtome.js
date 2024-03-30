/* eslint-disable @next/next/no-img-element */
import * as React from "react";

const learningPathData = [
  {
    imageSrc: "/creative.png",
    category: "Learning Path",
    title: "Develop Your Creative Thinking and Innovation Skills",
    itemCount: 7,
    duration: "38m",
    progressPercentage: 15,
    dueDate: "8th March, 2024",
  },
  {
    imageSrc: "/rocket.png",
    category: "Learning Path",
    title: "Master Excel for Data Science: Learn the data analytics.",
    itemCount: 9,
    duration: "55m",
    progressPercentage: 90,
    dueDate: "10th March, 2024",
  },
];

const courseData = [
  {
    imageSrc: "/tech.png",
    category: "Course",
    title: "Getting Started with AI and Machine Learning",
    duration: "38m",
    progressPercentage: 10,
    dueDate: "2nd March, 2024",
  },
  {
    imageSrc: "/mindset.png",
    category: "Course",
    title: "Cultivating a growth mindset to build confidence",
    duration: "1h 45m",
    progressPercentage: 80,
    dueDate: "15th April, 2024",
  },
];

function LearningItem({ item }) {
  return (
    <div className="flex flex-col  w-3/12 max-md:ml-0 max-md:w-full ">
      <div className="flex flex-col grow pb-5 w-full bg-white rounded-2xl border border-gray-300 border-solid max-md:mt-5 hover:cursor-pointer  duration-200 hover:bg-gray-300 hover:opacity-90">
        <div className="flex flex-col justify-center py-px bg-white rounded-2xl">
          <img
            loading="lazy"
            src={item.imageSrc}
            alt=""
            className="w-full aspect-[2.33]"
          />
        </div>
        <div className="flex flex-col px-6 mt-5 max-md:px-5">
          <div className="text-sm font-medium tracking-normal text-orange-400">
            {item.category}
          </div>
          <div className="mt-5 text-base font-bold tracking-normal leading-6 text-black">
            {item.title}
          </div>
          {item.itemCount && (
            <div className="flex gap-2 mt-6 items-center text-sm font-medium tracking-normal text-neutral-400">
              <img
                loading="lazy"
                src="/fi1.png"
                alt=""
                className="shrink-0 self-start  w-4 h-4 aspect-square"
              />
              <div className="flex-auto">
                <span className="font-bold">{item.itemCount} items</span> of
                learning content |{" "}
                <span className="font-bold">{item.duration}</span> of content
              </div>
            </div>
          )}
          {!item.itemCount && (
            <div className="flex gap-2 mt-4 text-sm font-medium tracking-normal text-neutral-400">
              <img
                loading="lazy"
                src="/fi1.png"
                alt=""
                className="shrink-0 w-4 h-4 aspect-square "
              />
              <div className="flex-auto my-auto">
                <span className="font-bold">{item.duration}</span> of content
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center mt-6 bg-gray-200 rounded-3xl">
            <div
              className="shrink-0 h-2 bg-green-500 rounded-3xl"
              style={{ width: `${item.progressPercentage}%` }}
            />
          </div>
          <div className="mt-6 text-sm font-medium tracking-normal text-neutral-400">
            Due Date: {item.dueDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AssignedToMe() {
  return (
    <main className="mt-7 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {learningPathData.map((item, index) => (
          <LearningItem key={index} item={item} />
        ))}
        {courseData.map((item, index) => (
          <LearningItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
}
