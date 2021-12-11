import React from "react";

const Profile = ({FullName,bio,profession,children}) => {
  const handleName = (e) => {
    e.preventDefault();
    alert("Full Name: "+ FullName + " bio: "+ bio +" Job: "+ profession);
  };
  return (
    <>
      <img alt ="king" src = {children} style={{maxWidth: "100%", height: "150px"}}/>
      <a href="/" onClick={handleName}>
        Click
      </a>
    </>
  );
};
Profile.defaultProps = {
  FullName: "Rochdi Bouhlel",
  bio : 'blablabalabalablabla',
  profession: 'web developer'
 };
export default Profile;
