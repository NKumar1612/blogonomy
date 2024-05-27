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
      className="block w-80 h-96 bg-soft-white hover:bg-[#F2F0F9] border border-light-lavender rounded-lg overflow-hidden shadow-md transition duration-300" // Added fixed width and height
    >
      <div className="flex flex-col h-full">  {/* Ensures content fills the entire card */}
        <img
          className="object-cover w-full h-48 rounded-t-lg" // Adjusted for fixed height
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
        />
        <div className="p-4 flex-grow flex flex-col justify-between"> {/* flex-grow and justify-between for better layout */}
          <h2 className="font-playfair text-2xl md:text-3xl tracking-wide text-deep-burgundy mb-2">
            {title}
          </h2>
          <div className="flex items-center justify-between text-xs text-neutral-gray mb-2">
            <span>{author.username} | {displayedTime}</span>
            <span className="font-lato hover:underline text-sm">Read More</span>
          </div>
          <p className="text-sm line-clamp-2">{summary}</p>
        </div>
      </div>
    </Link>
  );
};