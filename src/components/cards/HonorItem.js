export default function HonorItem({name, grade, message, image}) {
  return (
    <div className="latestHonors__grid__item">
      <div
        className="latestHonors__grid__item__image"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      ></div>

      <div className="latestHonors__grid__item__content">
        <b>{name}</b>
        <span>{grade}</span>
        <label>التكريم</label>

        <p>
          {message}
        </p>
      </div>
    </div>
  );
}
