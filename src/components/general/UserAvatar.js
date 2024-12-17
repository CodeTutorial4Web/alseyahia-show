


export default function UserAvatar({ scale, avatarImage }) {
  return (
    <div
      style={{
        backgroundImage: `url(${avatarImage ? avatarImage : require("../../assets/images/noAvatar.png")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: `calc(3rem * ${scale})`,
        minWidth: `calc(3rem * ${scale})`,
        maxHeight: `calc(3rem * ${scale})`,
        maxWidth: `calc(3rem * ${scale})`,
        borderRadius: ".5rem",
        backgroundColor: "#222",
      }}
    ></div>
  );
}
