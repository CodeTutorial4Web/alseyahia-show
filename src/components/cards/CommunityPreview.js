import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';


export default function CommunityPreview({ communityGrade, communityChannels }) {
  let grade = "Not Linksted";

  const [show, setShow] = useState(false);
  // grades loop
  switch (communityGrade) {

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
      grade = "Not Linksted";
      break;
  }

  return (
    <div className={show ? "communityDropdown show" : "communityDropdown"}>
      <h3
        onClick={() => {
          setShow(!show);
        }}
      >
        {grade} <span className="chervon"><BiChevronDown /></span>
      </h3>

      <ul className="communityMenu">
        <li><Link to="/community/12/general"><span>🌐</span>General</Link></li>
        <li><Link to="/community/12/students"><span>🎓</span>Students</Link></li>
        <li><Link to="/community/12/announcements"><span>📢</span>Announcements</Link></li>
        <li><Link to="/community/12/files"><span>📁</span>Files</Link></li>
        <li><Link to="/community/12/ask-community"><span>🤔</span>Ask Community</Link></li>
      </ul>
    </div>
  );
}
