import React from "react";

const ProfileCard = ({UserImg, UserName, UserLocation, UserRole}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="card-profile__intro flex flex-col items-center ">
          <img src={UserImg} alt="heroImg" className="rounded-full h-24 w-24" />
          <h1 className="text-white my-1 text-3xl">{UserName}</h1>
          <p className="text-green-400">{UserLocation}</p>
          <p className="text-white my-3">
            {`"${UserRole}"`}
          </p>
        </div>
        <div className="card-profile__link text-white text-center m">
          <p className="bg-slate-600 py-2 rounded-lg m-2">Github</p>{" "}
          <p className="bg-slate-600 py-2 rounded-lg m-2">FrontendMentor</p>
          <p className="bg-slate-600 py-2 rounded-lg m-2">LinkedIn</p>
          <p className="bg-slate-600 py-2 rounded-lg m-2">Twitter</p>
          <p className="bg-slate-600 py-2 rounded-lg m-2">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
