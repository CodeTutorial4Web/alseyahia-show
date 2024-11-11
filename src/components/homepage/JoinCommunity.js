import Btn from "../general/Btn";
import Header from "./../general/Header";

export default function JoinCommunity() {
  return (
    <section className="homepageSection m-top joinCommunitySection p-inline">
      <div className="joinCommunitySection__content">
        <Header text="أنضم الى مجتمع السياحية" />

        <p>
          مجتمع السياحية مجتمع انشىء المدرسة بالتفاعل مع الطلاب والمدرسين
          والمعلمين واذا كنت لست من طلاب او معلمي المدرسة فهذا المجتمع لن يفيدك
          اما لو كنت من طلاب او معلمي المدرسة فسوف يفيدك المجتمع كثيرا اذا
          انضممت اليه الان.
        </p>

        <Btn text="اشترك الان" hov="hov3" linkTo="/register"/>
      </div>

      <div className="joinCommunitySection__image" style={{
        backgroundImage: `url(https://thedigitalprojectmanager.com/wp-content/uploads/2018/11/communication-tools-featured-image-1.png})`,
   
      }}></div>
    </section>
  );
}
