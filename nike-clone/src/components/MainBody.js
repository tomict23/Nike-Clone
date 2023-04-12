import { useState } from 'react';
import "../styles/App.css";
import "../styles/MainBody.css";
import HeroContainer from "./HeroContainer";
import RightBodyContainer from "./RightBodyContainer";
import FreeSR from "./FreeSR"
import Reviews from './Reviews';
import SuggestedContent from './SuggestedContent';

const MainBody = () => {
  const [id, setId] = useState(1);

  return (
    <div className="main-body-container">
      <div className="main-body">
        <div className="main-body-left">
          <HeroContainer id={id}/>
        </div>

        <div className="main-body-right">
          <RightBodyContainer setId={setId}/>
        </div>
        <div>
          <FreeSR/>
        </div>
        <div>
          <Reviews/>
        </div>
        <div>
          <SuggestedContent/>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
