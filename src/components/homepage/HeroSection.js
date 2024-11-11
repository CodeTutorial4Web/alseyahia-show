import { motion } from "framer-motion";
import ".././.././assets/css/homepage.css";
import Btn from "../general/Btn";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ filter: "contrast(10%)" }}
      whileInView={{ filter: "contrast(100%)", transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="homepageSection heroSection p-inline"
    >
      <div className="heroSection__content">
        <h1 className="heroSection__title">القرية السياحية</h1>

        <p>
          مدرسة القرية السياحية الأولى الرسمية للغات، الواقعة في السادس من
          أكتوبر بمصر، تُعتبر من المؤسسات التعليمية الرائدة التي تهدف إلى تقديم
          تعليم متكامل ومتقدم يركز على تطوير المهارات اللغوية والمعرفية للطلاب
          في مختلف المراحل الدراسية. تعتمد المدرسة على مناهج وزارة التربية
          والتعليم المصرية مع دعم الأنشطة اللاصفية، مما يعزز شخصية الطلاب ويطور
          مهاراتهم الاجتماعية والرياضية والفنية. تدرّس المدرسة الإنجليزية كلغة
          أساسية إلى جانب الفرنسية والعربية، مما يتيح للطلاب اكتساب مهارات لغوية
          متعددة. كما تركز على تنمية التفكير النقدي والإبداع من خلال الأنشطة
          العلمية، وتسعى لغرس القيم الأخلاقية والوطنية لتأهيل جيل يتميز بالوعي
          والمسؤولية تجاه المجتمع.
        </p>

        <Btn hov="hov3" text="أنضم للمجتمع" linkTo="/register" />
      </div>

      <div className="images">
        <div className="hero__image"></div>
        <div className="hero__image"></div>
      </div>
    </motion.section>
  );
}
