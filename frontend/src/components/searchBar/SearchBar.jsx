import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const SearchBar = ({ inputSearchMembers, setFilteredUsers }) => {
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   const data = inputSearchMembers.filter(
  //     (user) =>
  //       user.firstName.toLowerCase().startsWith(searchText.toLowerCase()) ||
  //       user.lastName.toLowerCase().startsWith(searchText.toLowerCase())
  //   );
  //   setFilteredUsers(data);
  // }, [searchText, inputSearchMembers]);
  return (
    <div
      style={{

        width: "200px",
        backgroundColor: "#ffffff",
        borderRadius: "50px",
      
      }}
      className="d-flex align-items-center">
      <input
        style={{ width: "170px", height: "35px" }}
        type="text"
        className="form-control border-0 shadow-none bg-transparent"
        placeholder="Search Users.."
        aria-describedby="btnGroupAddon2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {searchText == "" ? (
          <IoSearchOutline size={22} color="gray"  />
        ) : (
          <IoCloseOutline onClick={() => setSearchText("")} size={24} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
