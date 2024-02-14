import React, { useState } from "react";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { Button } from "@mui/material";
import PlayerController from "../../controllers/PlayerController.tsx";
import { useNavigate } from "react-router-dom";

const SteamIdInput = () => {
  const [steamId, setSteamId] = useState(null);
  console.log(steamId);
  const navigate = useNavigate();
  return (
    <>
      <NumberInput onChange={(e, val) => setSteamId(val)} value={steamId} />
      <Button
        onClick={() => {
          console.log("click");
          navigate(`/player/${steamId}`);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default SteamIdInput;
