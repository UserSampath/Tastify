import React, { useState } from "react";
import NavBar from "../../components/NavBar/Navbar";
import SideBar from "../../components/side/SideBar";
import UserDetails from "../../components/userDetails/UserDetails";
import SearchBar from "../../components/searchBar/SearchBar";
import "./userManagement.css";
import Pagination from "../../components/pagination/Pagination";

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(
    localStorage.getItem("sideBarOpen") == "true"
  );
  const users = [
    {
      firstName: "kusal",
      lastName: "perera",
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      joinedDate: "2024 january 05",
      loginMethod: "facebook",
      posts: "23",
    },
    {
      firstName: "nimal",
      lastName: "silva",
      image:
        "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
      joinedDate: "2023 December 15",
      loginMethod: "google",
      posts: "10",
    },
    {
      firstName: "anusha",
      lastName: "fernando",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
      joinedDate: "2024 February 20",
      loginMethod: "twitter",
      posts: "15",
    },
    {
      firstName: "ranjan",
      lastName: "wijewardene",
      image:
        "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY=",
      joinedDate: "2023 November 10",
      loginMethod: "email",
      posts: "8",
    },
    {
      firstName: "malini",
      lastName: "bandara",
      image:
        "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=12CUDMMzA78XFt16_0PynybQ5O4EBpNSIWSlYsCA8Zc=",
      joinedDate: "2024 March 08",
      loginMethod: "facebook",
      posts: "30",
    },
    {
      firstName: "samadhi",
      lastName: "rajapaksa",
      image:
        "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=",
      joinedDate: "2023 October 25",
      loginMethod: "google",
      posts: "18",
    },
    {
      firstName: "uditha",
      lastName: "peris",
      image:
        "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
      joinedDate: "2024 April 12",
      loginMethod: "twitter",
      posts: "12",
    },
    {
      firstName: "kavitha",
      lastName: "de silva",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      joinedDate: "2023 September 05",
      loginMethod: "email",
      posts: "25",
    },
    {
      firstName: "tharindu",
      lastName: "gunawardena",
      image:
        "https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=e6sawVkyC7t_NTsFb13RWnLq4b9CYon4TJODpS2WU4I=",
      joinedDate: "2024 May 02",
      loginMethod: "facebook",
      posts: "14",
    },
    {
      firstName: "nadeesha",
      lastName: "fernando",
      image:
        "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=",
      joinedDate: "2023 August 18",
      loginMethod: "google",
      posts: "20",
    },
  ];

  return (
    <div>
      <SideBar setSidebarOpen={setSidebarOpen} selectedNav="User Management">
        <div>
          <NavBar sidebarOpen={sidebarOpen} />

          <div style={{transition: "padding-left 300ms",paddingTop:"50px",paddingLeft:sidebarOpen?"240px":"50px"}}>
            <div className="d-flex justify-content-center">
              <div
                style={{ width: "90%",}}
                className="d-flex justify-content-between">
                <Pagination />
                <div>
                  <SearchBar />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div
                style={{
                  height: `calc(100vh - 115px)`,
                  width: "90%",
                  borderRadius: "5px",
                }}
                className="bg-white mt-1">
                {/*ddddddddddd */}
                <div className="container-fluid mt-1">
                  <div style={{ margin: "0px 10px 0px 30px" }}>
                    <div
                      className="row align-items-center container-fluid"
                      style={{
                        height: "35px",
                        color: "#000000dd",
                        fontWeight: "600",
                      }}>
                      <div className="col-4 ">
                        <div style={{ marginLeft: "45px" }}>Name</div>
                      </div>
                      <div className="col-3">Joined Date </div>
                      <div className="col-3">
                        <p>Login Method</p>
                      </div>
                      <div className="col-1">Posts</div>
                    </div>
                  </div>
                </div>
                {users.map((user, index) => {
                  return <UserDetails key={index} user={user} index={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default UserManagement;
