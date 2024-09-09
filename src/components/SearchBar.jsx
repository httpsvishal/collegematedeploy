import { Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState,React } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const [collegeName, setCollegeName] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCollegeName(e.target.value);
    };
    const search = ()=>{
        if (collegeName.trim()) {
            navigate(`/colleges/search/${collegeName}`);
          }
    };
    return (
        <div className="flex justify-center mt-5">
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
            className='w-4/5 md:w-3/5'
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find your ideal college..."
                inputProps={{ 'aria-label': "Find your ideal college" }}
                onChange={handleChange}
                value={collegeName}
            />
            <IconButton type="button" onClick={search} sx={{ p: '10px', color: "#0E7490" }} aria-label="search">
                <SearchIcon />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Typography sx={{ ml: 1, alignSelf: 'center' }}>
                    Search
                </Typography>
            </IconButton>
        </Paper>
        </div>
    )
}

export default SearchBar;