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
      className="block rounded-lg overflow-hidden bg-soft-white hover:bg-[#F2F0F9] border border-light-lavender transition duration-300"
    >
      <div className="flex items-start p-4 md:p-6">
        <img
          className="w-40 object-cover rounded-lg mr-4" // Reduced right margin
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
        />
        <div className="flex-grow flex flex-col justify-between">
          <h2 className="font-playfair text-2xl md:text-3xl tracking-wide text-deep-burgundy mb-2">
            {title}
          </h2>
          <div className="flex items-center justify-between text-xs text-neutral-gray mb-2"> {/* Reduced font size and added margin */}
            <span>{author.username} | {displayedTime}</span>
            <span className="font-lato hover:underline text-sm">Read More</span> {/* Smaller font size */}
          </div>
          <p className="text-sm line-clamp-2">{summary}</p> {/* Reduced line-clamp */}
        </div>
      </div>
    </Link>
  );
};