import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({ _id, title, summary, cover, createdAt, author }) => {

  const formattedTime = createdAt ? formatISO9075(new Date(createdAt), { representation: 'time' }) : '';
  const [hours, minutes] = formattedTime.split(':');
  const displayedTime = `${hours}:${minutes}`;

  return (
    <Link key={_id} to={`/post/${_id}`} className="block rounded-lg overflow-hidden bg-pale-pink hover:shadow-md transition duration-300">
      <div className="flex items-center">
        <img className="w-40 h-40 object-cover" src={`https://blogonomy.onrender.com/${cover}`} alt={title} />
        <div className="p-6 flex flex-col justify-start">
          <h2 className="font-semibold text-3xl font-barlow mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{author.username} | {displayedTime} : ''</p>
          <p className="text-sm">{summary}</p>
        </div>
      </div>
    </Link>
  );
};