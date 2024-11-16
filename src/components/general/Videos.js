import VideoCard from "../cards/VideoCard";
import Header from "./Header";
import ".././../assets/css/videos.css";
import { BiPlusCircle, BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';


export default function Videos() {

  function handleFormSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="videosSection">
      <div className="searchVideo">
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="search"/>
          <button type="submit">
            <BiSearch />
          </button>
        </form>

        <Link to="/create-video" title="Create video"> <BiPlusCircle /> Create</Link>
      </div>
      <Header text="Videos" />
      <div className="blog__grid">
        <VideoCard
          user={null}
          videoTitle={"How to play footbal"}
          views={118 + "K"}
          videoThumbnail={
            "https://marketplace.canva.com/EAFMLcR1L7Y/1/0/1600w/canva-blue-colorful-gradient-soccer-highlight-youtube-thumbnail-JBIF1uRrYIM.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={"How to play footbal in the school right in suiii"}
          views={150 + "K"}
          videoThumbnail={
            "https://i.pinimg.com/736x/2b/67/45/2b6745fa3d8afc8d793db9397d037363.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={"Cristiano Ronaldo is better than messi"}
          views={950}
          videoThumbnail={
            "https://i.ytimg.com/vi/O106Q0r9GBk/maxresdefault.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Reprehenderit consectetur laboris eiusmod dolor sit irure amet deserunt culpa. In ipsum non eu irure adipisicing in occaecat qui velit occaecat. Ut enim ex ex aliqua in officia nulla pariatur ipsum Lorem in ea. Lorem amet veniam aliqua veniam id dolor proident velit proident tempor. Nisi tempor enim magna cillum. Aliqua elit quis sit ex eiusmod qui in ea velit Lorem do incididunt amet. Irure minim elit nisi adipisicing amet cillum."
          }
          views={787 + "K"}
          videoThumbnail={
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a75368173330847.648e9fb76d648.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Aute voluptate labore adipisicing ipsum adipisicing pariatur pariatur ea. Elit nisi incididunt aliqua laboris tempor dolore eu do nulla Lorem excepteur ut. Ex aliquip deserunt exercitation proident elit labore et."
          }
          views={125 + "K"}
          videoThumbnail={
            "https://i.ytimg.com/vi/Nii_fBGb0_c/maxresdefault.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Ex et anim pariatur id enim culpa excepteur. Non sint eu veniam minim nulla labore commodo laborum elit id exercitation. Ullamco magna fugiat ut minim ut qui ex veniam tempor voluptate. Dolor est non incididunt id. Et sint in adipisicing magna."
          }
          views={12}
          videoThumbnail={
            "https://static-cse.canva.com/blob/1760641/1600w-wK95f3XNRaM.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Occaecat occaecat aute ut pariatur anim tempor eiusmod sint laborum id eiusmod sit. Sit ullamco aliquip irure mollit Lorem consectetur. Est ea duis cillum nostrud labore anim consequat consectetur nulla consectetur non. Id Lorem sunt sit eu eu sint cupidatat. Dolor dolor excepteur consequat mollit consectetur elit aliqua sint deserunt esse commodo sint."
          }
          views={1.5 + "M"}
          videoThumbnail={""}
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Consequat laborum sit reprehenderit sunt pariatur. In Lorem voluptate ullamco voluptate magna aliqua anim magna laboris fugiat nulla culpa duis. Aliqua culpa in reprehenderit ea consectetur."
          }
          views={1.2 + "M"}
          videoThumbnail={
            "https://media.licdn.com/dms/image/v2/D5612AQEC2GNEaVOqHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709846879463?e=2147483647&v=beta&t=3oEOdpoAqT2j-2fuf4KzvbuNtxTkQVdaoy3wwqnMdrM"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Minim magna amet nisi id occaecat nostrud laboris dolore. Incididunt voluptate eiusmod anim consequat ipsum consequat laborum voluptate. Ex laborum consectetur anim eu Lorem nostrud. Aliqua esse adipisicing ut do pariatur."
          }
          views={120 + "K"}
          videoThumbnail={
            "https://marketplace.canva.com/EAFW7JwIojo/2/0/1600w/canva-red-colorful-tips-youtube-thumbnail-FxVVsqyawqY.jpg"
          }
          publishedOn={1731154692820}
          videoTime={[45, 12]}
        />
        <VideoCard
          user={null}
          videoTitle={
            "Sint qui magna ullamco commodo adipisicing excepteur aliqua. Sit irure esse commodo exercitation nulla ex elit in laboris aute tempor. Officia aliqua ipsum ex sunt ut. Cupidatat elit enim in aute deserunt pariatur labore duis proident. Aute fugiat minim labore proident laboris veniam occaecat dolore deserunt. Mollit magna tempor aliqua esse in."
          }
          views={856 + "K"}
          videoThumbnail={
            "https://media.licdn.com/dms/image/v2/D5612AQFGrpxALY6I6g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677692208884?e=2147483647&v=beta&t=R8FVCwF2m3MIPmp1J0tLOxhAyPdsw-_Bhs7dIhwahYE"
          }
          publishedOn={1731154692820}
        />
      </div>
    </section>
  );
}
