import React, { useEffect, useState } from "react";
import SteamIdInput from "./SteamIdInput.tsx";
import { getProfile } from "../../controllers/PlayerController.tsx";
import { useParams } from "react-router-dom";

const ProfileInfo = () => {
  const { steamId } = useParams();
  console.log(steamId);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const obtainProfile = async () => {
      const profile = await getProfile(steamId);
      setProfile(profile);
    };
    obtainProfile();
  }, [steamId]);

  return (
    <>
      ;a'sldkfj;alcjee;owiajf;wlaiejf;l
      {/* <SteamIdInput /> */}
    </>
  );
};

export default ProfileInfo;
