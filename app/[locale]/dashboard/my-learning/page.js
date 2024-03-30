/* eslint-disable @next/next/no-img-element */
"use client";
import { DashboardHeader, SideBar } from "components";
import { AuthHoc } from "hoc";
import { useRecoilValue } from "recoil";
import { authAtom } from "state/authAtom";
import CourseCardSection from "./Coursecard";
import AssignedToMe from "./Assignedtome";
import TopPicks from "./TopPicks";
import ExploreMore from "./ExploreMore";

const MyLearning = () => {
  const token = useRecoilValue(authAtom);

  return (
    <AuthHoc>
      <div className="flex relative">
        {token && (
          <div className="hidden lg:block">
            <SideBar />
          </div>
        )}

        <div id="main-content" className="h-full w-full pb-20 px-10">
          {token ? <DashboardHeader isHome={true} /> : null}
          <div className="">
            {/* Blue Banner */}
            <section className="flex gap-5 justify-between pr-20 pl-7 mt-6 w-full text-white bg-blue-600 rounded-2xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 my-auto max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/image23.png"
                  alt="User profile picture"
                  className="shrink-0 rounded-full aspect-square w-[72px]"
                />
                <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                  <h1 className="text-2xl font-bold tracking-tight leading-9 max-md:max-w-full">
                    Welcome back, Mukesh
                    <span className="">👋</span>🏻
                  </h1>
                  <div className="flex gap-4 mt-3 text-lg tracking-tight max-md:flex-wrap">
                    <p className="flex-auto font-medium">
                      Product, Information Technology
                    </p>
                    <a
                      href="#"
                      className="flex-auto font-bold tracking-wide hover:opacity-85 duration-200 underline"
                    >
                      Edit Interest and occupation
                    </a>
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="/images/image1.png"
                alt="Decorative image"
                className="shrink-0 max-w-full aspect-[1.72] w-[265px]"
              />
            </section>
            {/* Blue Banner End */}
            {/* Continue your journey  */}
            <div>
              <h2 className="mt-28 text-2xl font-bold tracking-tighter text-slate-900 max-md:mt-10 max-md:max-w-full">
                Continue your journey
              </h2>
              <p className="mt-3 text-lg font-medium tracking-tight leading-5 text-zinc-500 max-md:max-w-full">
                Jump back into lesson 5 and keep discovering new skills.
              </p>
              <div className="flex justify-between  gap-5">
                <CourseCardSection />
              </div>
            </div>
            {/* Continue your journey end */}
            {/* Assigned to me section */}
            <div>
              {" "}
              <h2 className="mt-28 text-2xl font-bold tracking-tighter text-slate-900 max-md:mt-10 max-md:max-w-full">
                Assigned to Me
              </h2>
              <p className="mt-3 text-lg font-medium tracking-tight leading-5 text-zinc-500 max-md:max-w-full">
                Build your skills your way
              </p>
              <div className="flex justify-between  gap-5">
                <AssignedToMe />
              </div>
            </div>
            {/* Assigned to me section ends */}
            {/* Top Picks Section */}
            <div>
              {" "}
              <h2 className="mt-28 text-2xl font-bold tracking-tighter text-slate-900 max-md:mt-10 max-md:max-w-full">
                Top picks for you
              </h2>
              <p className="mt-3 text-lg font-medium tracking-tight leading-5 text-zinc-500 max-md:max-w-full">
                Feed your desire to learn with these courses handpicked just for
                you.
              </p>
              <div className="flex justify-between  gap-5">
                <TopPicks />
              </div>
            </div>
            {/* Top Picks Section End */}
            <div>
              {" "}
              <h2 className="mt-28 text-2xl font-bold tracking-tighter text-slate-900 max-md:mt-10 max-md:max-w-full">
                Explore More
              </h2>
              <p className="mt-3 text-lg font-medium tracking-tight leading-5 text-zinc-500 max-md:max-w-full">
                Explore these courses that will build your skills to new
                heights.
              </p>
              <div className="flex justify-between  gap-5">
                <ExploreMore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthHoc>
  );
};
export default MyLearning;
