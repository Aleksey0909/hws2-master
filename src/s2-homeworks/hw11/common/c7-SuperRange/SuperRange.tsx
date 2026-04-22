import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '150px',
                color: '#00aaff',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #00aaff',
                    width: 20,
                    height: 20,
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 8px rgba(0, 170, 255, 0.16)',
                    },
                    '&.Mui-active': {
                        boxShadow: '0px 0px 0px 14px rgba(0, 170, 255, 0.16)',
                    },
                },
                '& .MuiSlider-track': {
                    border: 'none',
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#d3d3d3',
                    height: 4,
                },
            }}
            {...props}
        />
    )
}

export default SuperRange