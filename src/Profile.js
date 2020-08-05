import React from 'react';
import "./profile.css";
import pic from "./IMG_20181226_122904.jpg";
import Grid from "./grid";
function Profile()
{
    return(
<div className="profile">
   <h1 className="username">Aadityan</h1>
<div className="container">
    <div className="card">
        <div className="imgbx">
        <img className="pic" src={pic} alt=""/>
        </div>
        <div className="content">
            <h2>Age 21</h2>
   <p className="bio">"After all, tomorrow is another day!"</p>
   </div>
   </div>
   </div>
   <div>
      <Grid className="gd"/>
   </div>
</div>

    );
}

export default Profile;