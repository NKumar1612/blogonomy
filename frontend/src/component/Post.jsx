import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <Link key={_id} to={`/post/${_id}`} className="block rounded-lg overflow-hidden bg-pale-pink hover:shadow-md transition duration-300">
      <div className="flex items-center">
        <img className="w-40 h-40 object-cover" src={`http://localhost:4000/${cover}`} alt={title} />
        <div className="p-6 flex flex-col justify-start">
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{author.username} | {createdAt ? formatISO9075(new Date(createdAt)) : ''}</p>
          <p className="text-sm">{summary}</p>
        </div>
      </div>
    </Link>
  );
};