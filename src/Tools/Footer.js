import React from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

export default function Footer({location}) {
    
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        })
    }
    const scrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    
    if(location !== "bottom"){
        return (
            <div class="footer" onClick={()=>{scrollDown()}}>
                <KeyboardArrowDownRoundedIcon fontSize="large" className="breathe"/>
            </div>
        )
    }
    else{
        return (
            <div class="footer" onClick={()=>{scrollTop()}} >
                <KeyboardArrowUpRoundedIcon fontSize="large" className="breathe"/>
            </div>
        )
    }
    
}
