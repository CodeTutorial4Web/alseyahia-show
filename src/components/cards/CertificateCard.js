



export default function CertificateCard(title, desc, imageSrc = require(".././.././assets/images/certificate.jpg")) {
    return (

        <div className="certificate">


            <div className="certificateImage__content">

                <div className="certificateImage" style={{

                    backgroundImage: `url(${imageSrc})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }}></div>

                <div className="certificateContent">
                    <b>Certficate 1</b>
                    <p>Culpa duis mollit ex sunt est eu ad eu magna minim. Laboris
                        consectetur irure qui pariatur est. Nostrud pariatur nisi enim
                        nulla proident. Sint ea nulla pariatur qui quis amet dolor sint.
                        Fugiat irure eu sunt dolor sunt magna minim ea incididunt. Commodo Lorem aliquip proident
                        incididunt sint esse eu aliquip veniam officia.
                    </p>


                </div>

            </div>

            <a href="/">View certificate</a>




        </div>

    )
}