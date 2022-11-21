import { Autocomplete, TextField } from "@mui/material";

function EventSearch() {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={top100Films.map((option) => option.title)}
      renderInput={
        (params) =>
          <TextField
            {...params}
            placeholder="Услуга"
          />
      }
    />
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
]

export default EventSearch