import * as React from 'react';
import { Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const HeroContent = () => {
    const text1 = "Your trusted partner".split(" ");;
    const text2 = "for seamless college admissions across India.".split(" ");;
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here
        if (searchQuery.trim()) {
            navigate(`/colleges/search/${searchQuery}`);
          }
        console.log('Search query:', searchQuery);
    };
    return (
        <div className="hero-discription flex flex-col w-full items-center justify-center items-start">
            <div className="flex flex-col justify-center w-full sm:w-3/5 p-5 items-center">
                <p className="herohead mt-4 text-xl sm:text-2xl font-semibold p-5 text-white mb-10">
                    <span className="text-3xl sm:text-6xl mb-5 text-white font-semibold">
                        {text1.map((el, i) => (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: i / 10,
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </span>
                    <br />

                    {text2.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 3,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </p>

                <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center',width: '100%',zIndex:1000 }}
                    className='w-full hero-search'
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 ,zIndex:1000}}
                        placeholder="Find your ideal college..."
                        inputProps={{ 'aria-label': "Find your ideal college" }}
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <IconButton type="button" sx={{ p: '10px', color: "#0E7490" }} aria-label="search" onClick={handleSearch} >
                        <SearchIcon />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Typography sx={{ ml: 1, alignSelf: 'center' }}>
                            Search
                        </Typography>
                    </IconButton>
                </Paper>
            </div>
        </div>
    );
};

export default HeroContent;