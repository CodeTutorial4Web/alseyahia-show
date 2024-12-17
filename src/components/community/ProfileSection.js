import UserAvatar from "../general/UserAvatar"
import ".././../assets/css/profile.css"
import CertificateCard from "../cards/CertificateCard"
import Header from './../general/Header';


export default function ProfileSection() {

    return (


        <section className="ProfileSection">

            <div className="profile__data">

                <div className="userAvatar__bg">

                    <UserAvatar scale={3.5} avatarImage={null} />

                    <div className="badges">

                        <div className="badges__grid">
                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>

                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>

                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>

                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>
                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>

                            <div className="badges__grid__item">
                                <img src={require("../.././assets/images/badge.png")} alt="badge" />
                                <p>Golden Badge</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="user__data">



                    <div className="user__data-username__points">


                        <div className="username">
                            <h1>Mostafa Ahmed  <span>(Prep. 2)</span></h1>
                            <span>@mostafa_ahmed</span>

                        </div>


                        <div className="userPoints">
                            150 <p>points</p>
                        </div>




                    </div>

                    <div className="tags">
                        <b className="tag student">
                            Student
                        </b>



                        <b className="tag rare">
                            Rare
                        </b>


                        <b className="tag epic">
                            Epic
                        </b>


                        <b className="tag legendary">
                            Legendary
                        </b>


                    </div>
                    <p>Sunt Lorem non duis amet sit. Sunt ad mollit dolor anim elit cupidatat aute cillum. Magna mollit voluptate adipisicing minim. Voluptate proident ad commodo qui deserunt velit tempor.</p>
                </div>





                <div className="userCertificates__section">


                    <Header text={"Certificates"} />

                    <div className="certificates">

                        <CertificateCard />
                        <CertificateCard />
                        <CertificateCard />
                        <CertificateCard />

                    </div>


                </div>

            </div>

        </section>

    )
}