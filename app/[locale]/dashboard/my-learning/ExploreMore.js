/* eslint-disable @next/next/no-img-element */

import { CourseCard } from "./TopPicks";

import { VideoCard } from "./TopPicks";

export default function ExploreMore() {
  const courses = [
    {
      image: "/work.png",
      type: "Course",
      title: "Manage your work effectively and learn how to excel",
      duration: "38m",
      icon: "/fi1.png",
    },
    {
      image: "/workplace.png",
      type: "Course",
      title: "Win at the workplace to win at the marketplace",
      duration: "55m",
      icon: "/fi1.png",
    },
    {
      image: "/workplace.png",
      type: "Course",
      title: "Win at the workplace to win at the marketplace",
      duration: "38m",
      icon: "/fi1.png",
    },
  ];

  const video = {
    image: "/learning.png",
    type: "Video",
    title: "Effective project planning training",
    duration: "38m",
    icon: "/fi1.png",
  };

  return (
    <section className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
        <VideoCard video={video} />
      </div>
    </section>
  );
}
