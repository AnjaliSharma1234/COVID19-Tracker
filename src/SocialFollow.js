import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function SocialFollow() {
  return (
    <div class="social-container">
        <SocialIcon url="https://www.linkedin.com/in/anjalisharmaaa/" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://github.com/AnjaliSharma1234" style={{ height: 40, width: 40 }} bgColor="black"/>
        <SocialIcon url="https://twitter.com/AnjaliiSharmaaa" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://medium.com/@anjalisharmaaa" style={{ height: 40, width: 40 }}/>
        <SocialIcon url="https://www.facebook.com/anjali.sharma276" style={{ height: 40, width: 40 }}/>     
    </div>
  );
}