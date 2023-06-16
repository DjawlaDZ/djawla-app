import HomeNavBar from "../client/components/homeNavBar";
import Section1 from "../client/components/section1";
import Section2 from "../client/components/section2";
import SideBar from "../client/components/sideBar";

export default function Home() {
  return (
    <div>
    <HomeNavBar></HomeNavBar>
      <Section1></Section1>
      <Section2></Section2>
      <SideBar></SideBar>
      </div>
    )
}
