import React, { useState } from "react";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SteamIdInput = () => {
  const [steamId, setSteamId] = useState(null);

  const navigate = useNavigate();
  return (
    <>
      <NumberInput onChange={(e, val) => setSteamId(val)} value={steamId} />
      <Button
        onClick={() => {
          console.log(steamId);
          navigate(`/player/${steamId}`);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default SteamIdInput;
