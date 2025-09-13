import Histories from "./Histories";
import Structure from "./Structure";
import Help from "./Help";
import Specialists from "./Specialists";
import GeneralInformation from "./GeneralInformation";
import RehabilitationCenter from "./ReabilitationCenter";
import ScrollToTopButton from "../UI/ScrollToTopButton";
import Activity from "./Activity";
import Equipment from "./Equipment";
import HelpCases from "./HelpCases";

const Main = () => (
  <main>
    <RehabilitationCenter />
    <GeneralInformation />
    <Structure />
    <Activity/>
    <Equipment/>
    <HelpCases/>
    <Specialists />
    <Histories />  
    <Help />    
    <ScrollToTopButton />
  </main>
);

export default Main;
