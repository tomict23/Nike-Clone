import { useState } from 'react';
import "../styles/App.css";
import "../styles/MainBody.css";
import HeroContainer from "./HeroContainer";
import RightBodyContainer from "./RightBodyContainer";

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
          <SuggestedContent/>
      </div>
    </div>
  );
};

export default MainBody;
