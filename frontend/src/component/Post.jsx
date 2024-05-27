import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({ _id, title, summary, cover, createdAt, author }) => {

  const formattedTime = createdAt ? formatISO9075(new Date(createdAt), { representation: 'time' }) : '';
  const [hours, minutes] = formattedTime.split(':');
  const displayedTime = `${hours}:${minutes}`;

  return (
    <Link
      key={_id}
      to={`/post/${_id}`}
      className="block rounded-lg overflow-hidden bg-soft-white hover:bg-light-lavender border-light-lavender transition duration-300"
    >
      <div className="flex items-center p-4"> {/* Added padding */}
        <img
          className="w-40 h-40 object-cover rounded-lg mr-6" // Added right margin
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
        />
        <div className="flex-grow flex flex-col justify-between"> {/* Added flex-grow and justify-between */}
          <h2 className="font-playfair text-2xl md:text-3xl text-deep-burgundy">
            {title}
          </h2>
          <div className="flex items-center justify-between text-sm text-neutral-gray">
            <span>{author.username} | {displayedTime}</span>
            <span className="font-barlow">Read More</span> {/* Changed font for Read More */}
          </div>
          <p className="text-sm mt-2 line-clamp-3"> {/* Added line-clamp for summary */}
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
};