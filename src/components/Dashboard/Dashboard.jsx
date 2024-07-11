"use client";
import React, { useEffect, useState } from "react";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { useResizeListener } from "primereact/hooks";
import DashboardNavBar from "../DashboardNavBar/DashboardNavBar";
import DashboardMainContent from "../DashboardMainContent/DashboardMainContent";

const Dashboard = () => {
  // --- sidebar show hide ---
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  //   --- window size functionality ---
  const [windowSize, setWindowSize] = useState({ width: 0 });
  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: (event) => {
        setWindowSize({
          width: event.currentTarget.innerWidth,
        });
      },
    });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth });
  }, []);

  useEffect(() => {
    bindWindowResizeListener();

    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);

  return (
    <div className="mt-[60px] bg-white rounded-[10px] py-[20px] px-[15px] md:px-[23px] dashboard">
      {/* -- Dashboard Nav bar */}
      {/* <DashboardNavBar /> */}
      {/* -- Dashboard Nav bar */}

      {/* --- Dashboard Main content --- */}
      <div className="mt-[20px] rounded-[10px] min-h-[600px]">
        <div className="flex gap-x-[24px] min-h-[600px]">
          <div className="hidden lg:block">
            <DashboardSidebar />
          </div>

          <main className="w-full sm:px-[8px] pt-[8px] relative">
            {/* --- Side bar for mobile device --- */}
            {isSidebarVisible && windowSize?.width <= 1023 && (
              <div className="absolute top-0 left-0 z-10">
                <DashboardSidebar />
              </div>
            )}
            {/* --- Side bar for mobile device --- */}

            {/* --- content --- */}
            <div>
              <DashboardMainContent
                handleToggleSidebar={handleToggleSidebar}
                isSidebarVisible={isSidebarVisible}
              />
            </div>
            {/* --- content --- */}
          </main>
        </div>
      </div>
      {/* --- Dashboard Main content --- */}
    </div>
  );
};

export default Dashboard;
