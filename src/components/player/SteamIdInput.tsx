import React, { useState } from "react";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import { Button } from "@mui/material";

const SteamIdInput = () => {
  const [steamId, setSteamId] = useState(null);

  return (
    <>
      <NumberInput onChange={(e) => setSteamId(e.target.value)} />
      <Button>Submit</Button>
    </>
  );
};

export default SteamIdInput;
