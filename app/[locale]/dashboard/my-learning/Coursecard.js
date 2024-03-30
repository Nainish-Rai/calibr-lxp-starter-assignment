/* eslint-disable @next/next/no-img-element */
function CourseCard({ title, image, category, progress }) {
  return (
    <div className="flex grow gap-5 justify-end px-5 py-5 mx-auto w-full bg-white rounded-2xl border border-gray-300 border-solid max-md:flex-wrap max-md:mt-5 max-md:max-w-full hover:bg-gray-300 duration-200 cursor-pointer">
      <div className="flex flex-auto gap-5 justify-between items-start">
        <img
          src={image}
          alt={`${title} title thumbnail`}
          className="shrink-0 aspect-square w-[92px]"
        />
        <div className="flex flex-col mt-1.5">
          <div className="text-sm font-medium tracking-normal text-blue-600">
            {category}
          </div>
          <h3 className="mt-3.5 text-base font-semibold tracking-normal leading-6 text-black">
            {title}
          </h3>
          <div className="flex flex-col justify-center mt-7 bg-gray-200 rounded-3xl">
            <div
              className="shrink-0 h-2 bg-green-500 rounded-3xl"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      <img
        src="/option.png"
        alt=""
        className="shrink-0 my-auto w-8 aspect-square"
      />
    </div>
  );
}

export default function CourseCardSection() {
  const courses = [
    {
      image: "/fr1.png",
      category: "Course",
      title: "Manage your work effectively and learn how to excel",
      progress: 50,
    },
    {
      image: "/fr2.png",
      category: "Video",
      title: "Manage your work effectively and learn how to excel",
      progress: 75,
    },
    {
      image: "/fr3.png",
      category: "Video",
      title: "Manage your work effectively and learn how to excel",
      progress: 75,
    },
  ];

  return (
    <main className="mt-8 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </main>
  );
}
