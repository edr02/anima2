import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.css';
import * as AntDesignIcons from '@ant-design/icons';
import * as Antd from 'antd';

function App() {
  return <Desktop1 {...desktop1Data}  />;
}

export default App;

function Desktop1(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    sfondo_Schermata_Passerelle3,
    title,
    sfondo_Schermata_Plancette1,
    plancetta,
    sfondo_Schermata_Plancette3,
    sfondo_Schermata_Plancette2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen" >
        <div className="flex-col" >
          <div className="overlap-group" >
            <div className="flex-row" >
              <img className="rsp-logo-1"  src={rspLogo1} />
              <TextInput  />
            </div>
            <img className="line-1"  src={line1} />
          </div>
          <div className="sfondo_schermata_passerelle-container" >
            <img
              className="sfondo_schermata_passerelle-1 animate-enter"
              
              src={sfondo_Schermata_Passerelle1}
            />
            <img
              className="sfondo_schermata_passerelle-2 animate-enter1"
              
              src={sfondo_Schermata_Passerelle2}
            />
            <img
              className="sfondo_schermata_passerelle-3 animate-enter2"
              
              src={sfondo_Schermata_Passerelle3}
            />
          </div>
          <h1 className="title inter-normal-black-24px" >
            {title}
          </h1>
        </div>
        <div className="flex-row-1" >
          <div className="plancett-container" >
            <img className="sfondo_schermata_plancette-1"  src={sfondo_Schermata_Plancette1} />
            <div className="plancetta inter-normal-black-24px" >
              {plancetta}
            </div>
          </div>
          <img className="sfondo_schermata_plancette-3"  src={sfondo_Schermata_Plancette3} />
          <img className="sfondo_schermata_plancette-2"  src={sfondo_Schermata_Plancette2} />
        </div>
      </div>
    </div>
  );
}


function TextInput() {
  return (
    <div className="text-input" >
      <Antd.Input
        bordered
        suffix=""
        size="middle"
        maxLength={40}
        defaultValue=""
        status="default"
        disabled={false}
        showCount={false}
        placeholder="Please fill your search"
        prefix={<AntDesignIcons.SearchOutlined />}
      />
    </div>
  );
}

const desktop1Data = {
    rspLogo1: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/rsp-logo-1@2x.png",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/line-1@1x.png",
    sfondo_Schermata_Passerelle1: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-passerelle-1@2x.png",
    title: "Passerella",
    sfondo_Schermata_Plancette1: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "https://anima-uploads.s3.amazonaws.com/projects/630f44da3913a4782d2b617a/releases/630f44e5a6fbd0d14fab2a8f/img/sfondo-schermata-plancette-1@2x.png",
};


