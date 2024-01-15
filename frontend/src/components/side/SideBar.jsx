import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoLinkOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import "./side.css";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SideBar = ({ children, selectedNav }) => {
  const navigate = useNavigate();
const [open, setOpen] = useState(
  localStorage.getItem("sideBarOpen") == "true"
);

  const Menus = [
    { title: "User Management", navigation: "/user_management" },
    { title: "All Post", navigation: "/all_post" },
    { title: "IP Configuration", navigation: "/ip_configuration" },
    { title: "Report Generating", navigation: "/report_generating" },
    { title: "Settings", navigation: "/settings" },
  ];


  const clickedSideButton = () => {
    localStorage.setItem("sideBarOpen", !open);
    setOpen(!open)
  }
  return (
    <div className="d-flex" style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          width: open ? "240px" : "60px",
          backgroundColor: "#ffffff",
          height: "100vh",
          padding: "5px",
          paddingTop: "8px",
          position: "relative",
          transitionDuration: "300ms",
        }}>
        <div
          className="d-flex justify-content-center align-items-center sideBarToggleButton"
          style={{
            position: "absolute",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            cursor: "pointer",
            right: "-18px",
            top: "5px",

            zIndex: 1,
            backgroundColor: "white",
          }}
          onClick={clickedSideButton}>
          <FaChevronLeft
            color="gray"
            style={{
              transitionDuration: "500ms",
              transform: !open ? "rotate(900deg)" : "none",
            }}
          />
        </div>

        <div style={{ paddingTop: "70px" }}>
          {Menus.map((Menu, index) => (
            <div
              key={index}
              onClick={() => navigate(Menu.navigation)}
              className="d-flex  align-items-center sidebarButton mt-1"
              style={{
                height: "40px",
                backgroundColor: Menu.title == selectedNav ? "#f0f0f0ba" : "",
                justifyContent: open ? "left" : "center",
                borderRadius: "2px",
                borderRight:
                  Menu.title == selectedNav ? "3px solid #990000" : "",
              }}>
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  color: "#6f6f6f",
                  fontSize: "15px",
                }}>
                {Menu.title === "User Management" && <CiUser size={20} />}{" "}
                {Menu.title === "All Post" && <HiOutlineQueueList size={20} />}{" "}
                {Menu.title === "IP Configuration" && (
                  <IoLinkOutline size={20} />
                )}{" "}
                {Menu.title === "Report Generating" && (
                  <TbReportAnalytics size={20} />
                )}{" "}
                {Menu.title === "Settings" && <CiSettings size={20} />}
                <span
                  style={{
                    display: !open ? "none" : "inline",
                    transformOrigin: "left",
                    transitionDuration: "200ms",
                    fontWeight: "600",
                  }}>
                  {Menu.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};

export default SideBar;
