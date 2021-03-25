import React from 'react';
import NavBar from '../Navigation/NavBar';
import '../styles/ProjectView.css'

const ProjectView: React.FC = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <a className="card-container currentportfolio" href="https://github.com/Lucymccall8/portfolio"></a>
                <a className="card-container motiondetectcam" href="https://github.com/Lucymccall8/MotionDetectCam"></a>
                <a className="card-container cloudwebapp" href="https://github.com/Lucymccall8/CloudWebApp"></a>
                <a className="card-container therapyapp" href="https://github.com/Leeds-Beckett-Therapy-Bot-Group/psycube-flutter-application"></a>
                <a className="card-container graphicsapp" href="https://github.com/Lucymccall8/GraphicsApp"></a>
                <a className="card-container logscript" href="https://github.com/Lucymccall8/logscript"></a>
                <a className="card-container oldportfolio" href="https://github.com/Lucymccall8/MyWebsite"></a>
                <a className="card-container webblocker" href="https://github.com/Lucymccall8/Web-Blocker"></a>
                <a className="card-container todoapp" href="https://github.com/Lucymccall8/TodoApplication"></a>
                <a className="card-container malawiapp" href="https://github.com/Malawi-Water-Wells-project/Malawi-App"></a>
                <a className="card-container bmiapp" href="https://github.com/Lucymccall8/BMI-app"></a>
                <a className="card-container chooseurownadventure" href="https://github.com/Lucymccall8/ChooseYourOwnAdventure"></a>
                <a className="card-container calculator" href="https://github.com/Lucymccall8/Calculator"></a>
                <a className="card-container malawiwebsite" href="https://github.com/Malawi-Water-Wells-project/malawi-website"></a>
                <a className="card-container malawiauth" href="https://github.com/Malawi-Water-Wells-project/malawi-auth-api"></a>
                <a className="card-container pokemonsite" href="https://github.com/Lucymccall8/pokemonsite"></a>
                <a className="card-container rosrobot" href="https://github.com/Lucymccall8/ROSrobotics"></a>
            </div>
        </>
    );
}
export default ProjectView;