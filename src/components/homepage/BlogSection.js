import ArticleItem from "../cards/ArticleItem";
import Header from "../general/Header";

export default function BlogSection() {
  const articles = [
    {
      date: "20/12/2021",
      title: "The Importance of Adhering to School Rules",
      content:
        "School rules are fundamental in organizing school life and ensuring the smooth operation of the educational process. At the First Official Languages Alseyahia School, students are encouraged to adhere to these rules, which contribute to providing a safe and motivating learning environment. Discipline and respect for rules foster a sense of responsibility among students, positively reflecting on their behavior and academic success.",
    },
    {
      date: "12/2/2022",
      title: "The Role of School Activities in Developing Students' Skills",
      content:
        "The First Official Languages Alseyahia School places great emphasis on school activities that help develop students' skills and broaden their horizons. Through sports, theater, and arts, students can discover their talents and refine their abilities. Participation in activities makes students more self-confident and open to others, enhancing their spirit of teamwork and collaboration.",
    },
    {
      date: "30/4/2023",
      title: "Technology in Education",
      content:
        "In its quest to keep up with technological advancements, the First Official Languages Alseyahia School utilizes modern educational tools, including computers, smart screens, and diverse educational programs. Technology enables students to access new sources of knowledge and facilitates interactive learning, making lessons more enjoyable and beneficial.",
    },
    {
      date: "12/5/2023",
      title: "How Does Reading Enrich a Student's Culture?",
      content:
        "The First Official Languages Alseyahia School encourages its students to read as an important means of acquiring knowledge and broadening their horizons. Reading not only provides students with information but also develops their critical and creative thinking skills. It helps improve language and expression skills as well. Allocating time for daily reading is an essential part of educational activities that contribute to shaping the student's personality.",
    },
    {
      date: "15/3/2024",
      title: "The Importance of Attending Support Classes",
      content:
        "To support students academically, the First Official Languages Alseyahia School offers additional support classes in various subjects for students who need extra help. These classes enhance the student's academic level and strengthen their abilities in challenging subjects, improving their results and boosting their self-confidence. Students and parents are encouraged to take advantage of these classes for maximum educational benefit.",
    },
    {
      date: "12/10/2024",
      title: "Maintaining School Cleanliness is Everyone's Responsibility",
      content:
        "Cleanliness is an integral part of positive student behavior. At the First Official Languages Alseyahia School, students are encouraged to care for the cleanliness of their classrooms and playgrounds. Maintaining a clean environment reflects everyone's concern for the school's welfare and promotes a sense of responsibility. Awareness campaigns are conducted in the school to teach students the importance of cleanliness and ways to maintain the school environment, aiming to create a healthy and safe atmosphere for all.",
    },
  ];

  return (
    <section id="blog" className="homepageSection blogSection m-top p-inline">
      <Header text="Blog" />

      <div className="blog__grid">
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            title={article.title}
            content={article.content}
            date={article.date}
          />
        ))}
      </div>
    </section>
  );
}
