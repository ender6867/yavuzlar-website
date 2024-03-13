import { useState } from "react";
import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import Image from "next/image";

export const LanguageSelect = () => {
  const [lang, setLang] = useState("tr");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <FormControl>
      <Stack direction="row" textAlign="center" alignItems="center" spacing={1}>
        <Image
          alt="image"
          src={lang === "tr" ? "/turkey.png" : "/england.png"}
          width={50}
          height={50}
        />
        <Select
          sx={{
            textAlign: "center",

            color: { xs: "black", sm: "white", md: "white" },
          }}
          onChange={handleChange}
          inputProps={{ "aria-label": "Select language" }}
          defaultValue="tr"
          value={lang}
        >
          <MenuItem disabled>Select Language</MenuItem>
          <MenuItem value="tr">Türkçe</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </Stack>
    </FormControl>
  );
};

export default LanguageSelect;
