import React from "react";  
import image from './Pp.webp';

const   ProfilePhoto = () => {
    return (
        <>
        <div className="pp">
            <h1>This is my Profile</h1>
            <img src= {image} alt='Pp' />
        </div>
        </>
    )
}
export default ProfilePhoto;
