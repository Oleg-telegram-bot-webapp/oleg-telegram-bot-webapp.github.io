import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

function Search() {

  return (
    <Autocomplete
      freeSolo
      disablePortal
      id="combo-box-demo"
      options={["kek", "lol"]}
      renderInput={(params) => <TextField {...params} placeholder="Услуга или событие" />}
    />
  );
}

export default Search