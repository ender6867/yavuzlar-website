import * as React from "react";
import Image from "next/image";
import { FormControl, MenuItem, Select, Box, Stack } from "@mui/material";

export default function LanguageSelect() {
  const [lang, setLang] = React.useState("tr");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ padding: { xs: 1, md: 0 }, color: "white" }}>
        <Stack
          direction="row"
          textAlign="center"
          alignItems="center"
          spacing={1}
        >
          <Image
            src={lang === "tr" ? "/trFlag.svg" : "/enFlag.svg"}
            width={50}
            height={50}
          />
          <Select
            sx={{
              textAlign: "center",

              color: { xs: "black", md: "white" },
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
    </Box>
  );
}
