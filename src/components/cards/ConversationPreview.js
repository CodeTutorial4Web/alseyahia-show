import { useState } from "react";
import UserAvatar from "../general/UserAvatar";
import { Link } from "react-router-dom";

export default function ConversationPreview({ user }) {
  let grade = "Not Listed";

  // grades loop
  switch (user.grade) {
    case 0:
      grade = "Teacher";
      break;
    case 1:
      grade = "Prim. 1";
      break;
    case 2:
      grade = "Prim. 2";
      break;

    case 3:
      grade = "Prim. 3";
      break;

    case 4:
      grade = "Prim. 4";
      break;

    case 5:
      grade = "Prim. 5";
      break;
    case 6:
      grade = "Prim. 6";
      break;
    case 7:
      grade = "Prep. 1";
      break;
    case 8:
      grade = "Prep. 2";
      break;

    case 9:
      grade = "Prep. 3";
      break;

    case 10:
      grade = "Sec. 1";
      break;

    case 11:
      grade = "Sec. 2";
      break;

    case 12:
      grade = "Sec. 3";
      break;

    default:
      grade = "Not Listed";
      break;
  }

  return (
    <Link to={"/conversation/1355"} className="conversationPreview">
      <UserAvatar scale={1} avatarImage={""} />
      <div>
        <p>{user.username}</p>
        <span>{grade}</span>
      </div>
    </Link>
  );
}
