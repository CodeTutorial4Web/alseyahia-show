import HonorItem from "../cards/HonorItem";
import Header from "../general/Header";

export default function LatestHonors() {
  const students = [
    {
      image: "https://media.istockphoto.com/id/1362322798/vector/best-champions-cup-trophy-vector-design-champion-cup-winner-trophy-award-with-laurel-wreath.jpg?s=612x612&w=0&k=20&c=xPJtqiA3JA2jD2wmbG6vCFxFmkBhuBxEkEm0fnVdoZU=",
      student: "مصطفى أحمد",
      class: "الصف الثاني الثانوي",
      message:
        "تتشرف مدرسة القرية السياحية الأولى بتكريم الطالب مصطفى أحمد من الصف الثاني الثانوي، وذلك تقديرًا لتفوقه الأكاديمي وجهوده المستمرة في تحقيق النجاح. لقد أظهر مصطفى انضباطًا ملحوظًا وروحًا عاليةً في التعاون مع زملائه والمشاركة في الأنشطة المدرسية، مما جعله مثالاً يحتذى به بين أقرانه. وبهذا التكريم، تود المدرسة أن تعبر عن فخرها واعتزازها بطلابها المميزين، وتتمنى للطالب مصطفى أحمد دوام التفوق والنجاح في مسيرته الدراسية والمهنية، ليكون نموذجًا إيجابيًا يُحتذى به في المجتمع.",
    },
    {
      image: "https://media.istockphoto.com/id/1362322798/vector/best-champions-cup-trophy-vector-design-champion-cup-winner-trophy-award-with-laurel-wreath.jpg?s=612x612&w=0&k=20&c=xPJtqiA3JA2jD2wmbG6vCFxFmkBhuBxEkEm0fnVdoZU=",
      student: "علي حسن",
      class: "الصف الأول الثانوي",
      message:
        "تتشرف مدرسة القرية السياحية الأولى بتكريم الطالب علي حسن من الصف الأول الثانوي، تقديرًا لتميزه في الدراسة وتفانيه في خدمة مدرسته. لقد أبدع علي في كل ما كُلّف به من مهام أكاديمية وأنشطة إضافية، ليكون أحد الطلاب المتفوقين الذين يمثلون فخر المدرسة. نتمنى له دوام التفوق والنجاح في مشواره.",
    },
    {
      image: "https://media.istockphoto.com/id/1362322798/vector/best-champions-cup-trophy-vector-design-champion-cup-winner-trophy-award-with-laurel-wreath.jpg?s=612x612&w=0&k=20&c=xPJtqiA3JA2jD2wmbG6vCFxFmkBhuBxEkEm0fnVdoZU=",
      student: "ياسمين خالد",
      class: "الصف الثالث الثانوي",
      message:
        "تتشرف مدرسة القرية السياحية الأولى بتكريم الطالبة ياسمين خالد من الصف الثالث الثانوي، وذلك تقديرًا لتفوقها الدراسي وروحها القيادية. إن مثابرتها وإبداعها في الأنشطة المدرسية جعلت منها نموذجًا يحتذى به بين زملائها، وقدوة تُعبر عن الطموح والرؤية المستقبلية. نهنئها ونتمنى لها مزيدًا من النجاح والتألق.",
    },
    {
      image: "https://media.istockphoto.com/id/1362322798/vector/best-champions-cup-trophy-vector-design-champion-cup-winner-trophy-award-with-laurel-wreath.jpg?s=612x612&w=0&k=20&c=xPJtqiA3JA2jD2wmbG6vCFxFmkBhuBxEkEm0fnVdoZU=",
      student: "محمود عبد الله",
      class: "الصف الثاني الثانوي",
      message:
        "تتشرف مدرسة القرية السياحية الأولى بتكريم الطالب محمود عبد الله من الصف الثاني الثانوي، تقديرًا لاجتهاده وانضباطه داخل الصف وخارجه. لقد حقق محمود أداءً مميزًا في دراسته، مما جعل منه مثالاً للطالب المثابر والمجتهد. نتمنى له استمرار التفوق والتميز في دراسته وحياته المستقبلية.",
    },
    {
      image: "https://media.istockphoto.com/id/1362322798/vector/best-champions-cup-trophy-vector-design-champion-cup-winner-trophy-award-with-laurel-wreath.jpg?s=612x612&w=0&k=20&c=xPJtqiA3JA2jD2wmbG6vCFxFmkBhuBxEkEm0fnVdoZU=",
      student: "سارة محمد",
      class: "الصف الثالث الثانوي",
      message:
        "تتشرف مدرسة القرية السياحية الأولى بتكريم الطالبة سارة محمد من الصف الثالث الثانوي، تقديرًا لإنجازاتها الأكاديمية ومهاراتها القيادية. لقد أظهرت سارة التفاني في دراستها والمبادرة في الأنشطة المجتمعية، لتكون من الطلاب الذين يُفتخر بهم. نتمنى لها النجاح المستمر وأن تكون مصدر إلهام للجميع.",
    },
  ];

  return (
    <section className="homepageSection m-top latestHonorsSection p-inline">
      <Header text="احدث التكريمات" />

      <div className="latestHonors__grid">
        
        {students.map((student, index) => <HonorItem name={student.student} grade={student.class} message={student.message} image={student.image}/>)}

      </div>
    </section>
  );
}
