







export default function ArticleItem({ title, content, date }) {
  return (
    <div className="blog__grid__item">
      <div className="blog__grid__item__content">
        <b>{title}</b>
        <p>{content}</p>
      </div>

      <span>{date}</span>
    </div>
  );
}
