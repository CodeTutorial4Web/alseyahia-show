


import { useParams } from "react-router-dom";
import Header from "./Header";



export default function Community() {

    const {communityId, channelName} = useParams();

  return (
    <section className="communitySection"> 
    <Header text={"المجتمع " + communityId + " " + channelName}/>
  </section>
  );
}