/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function CourseCard({ course }) {
  return (
    <div className="flex flex-col grow pb-7 w-full bg-white rounded-2xl border border-gray-300 border-solid max-md:mt-5 hover:bg-gray-300 duration-200 cursor-pointer hover:opacity-90">
      <div className="flex flex-col justify-center py-px bg-white rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          className="w-full aspect-[2.33]"
        />
      </div>
      <div className="flex flex-col items-start pr-20 pl-6 mt-5 text-sm font-medium tracking-normal max-md:px-5">
        <div className="text-blue-600">{course.type}</div>
        <h3 className="mt-6 text-base font-bold tracking-normal leading-6 text-slate-900">
          {course.title}
        </h3>
        <div className="flex gap-2 mt-6 items-center text-neutral-400">
          <img
            src={course.icon}
            alt=""
            className="shrink-0 w-4 h-4 aspect-square"
          />
          <div className="flex-auto my-auto">
            <span className="font-bold">{course.duration}</span> of content
          </div>
        </div>
      </div>
    </div>
  );
}

export function LearningPathCard({ learningPath }) {
  return (
    <div className="flex flex-col grow pb-6 w-full bg-white rounded-2xl border hover:bg-gray-300 duration-200 cursor-pointer hover:opacity-95 border-gray-300 border-solid max-md:mt-5">
      <div className="flex flex-col justify-center bg-white rounded-2xl">
        <img
          src={learningPath.image}
          alt={learningPath.title}
          className="w-full aspect-[2.27]"
        />
      </div>
      <div className="flex flex-col items-start pr-16 pl-6 mt-5 text-sm font-medium tracking-normal max-md:px-5">
        <div className="text-orange-400">{learningPath.type}</div>
        <h3 className="mt-5 text-base font-bold tracking-normal leading-6 text-slate-900">
          {learningPath.title}
        </h3>
        <div className="flex gap-2 mt-5 items-center text-neutral-400">
          <img
            src={learningPath.icon}
            alt=""
            className="shrink-0  w-4 h-4 aspect-square"
          />
          <div className="flex-auto">
            <span className="font-bold">{learningPath.itemCount} items</span> of
            learning content
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoCard({ video }) {
  return (
    <div className="flex flex-col grow pb-7 w-full bg-white rounded-2xl border border-gray-300 border-solid max-md:mt-5  hover:bg-gray-300 duration-200 cursor-pointer hover:opacity-95">
      <div className="flex flex-col justify-center bg-white rounded-2xl">
        <img
          src={video.image}
          alt={video.title}
          className="w-full aspect-[2.27]"
        />
      </div>
      <div className="flex flex-col items-start pr-16 pl-6 mt-5 text-sm font-medium tracking-normal max-md:px-5">
        <div className="text-red-400">{video.type}</div>
        <h3 className="mt-9 text-base font-bold tracking-normal leading-6 text-slate-900">
          {video.title}
        </h3>
        <div className="flex gap-2 mt-8 items-center text-neutral-400">
          <img
            src={video.icon}
            alt=""
            className="shrink-0 w-4 h-4 aspect-square"
          />
          <div className="flex-auto my-auto">
            <span className="font-bold">{video.duration}</span> of content
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopPicks() {
  const courses = [
    {
      image: "/work.png",
      title: "Manage your work effectively and learn how to excel",
      type: "Course",
      duration: "53m",
      icon: "/fi1.png",
    },
    {
      image: "/workplace.png",
      title: "Win at the workplace to win at the marketplace",
      type: "Course",
      duration: "38m",
      icon: "/fi1.png",
    },
  ];

  const learningPaths = [
    {
      image: "/tech.png",
      title:
        "Part 1 - Work at different levels on emerging technologies like Clou...",
      type: "Learning Path",
      itemCount: "7",
      icon: "/fi2.png",
    },
  ];

  const videos = [
    {
      image: "/learning.png",
      title: "Effective project planning training",
      type: "Video",
      duration: "38m",
      icon: "/fi1.png",
    },
  ];

  return (
    <div className="mt-9 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
          >
            <CourseCard course={course} />
          </div>
        ))}
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          {learningPaths.map((learningPath, index) => (
            <LearningPathCard key={index} learningPath={learningPath} />
          ))}
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
