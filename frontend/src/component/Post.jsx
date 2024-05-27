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
      className="flex flex-col md:flex-row bg-soft-white hover:bg-[#F2F0F9] border border-light-lavender rounded-lg overflow-hidden shadow-md transition duration-300 w-80 md:w-full" // Changed to flex-row for horizontal layout on larger screens, removed fixed width
    >
      {/* Image Section */}
      <div className="md:w-1/3"> {/* Adjust width for image on larger screens */}
        <img 
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
          className="object-cover h-48 md:h-full w-full rounded-t-lg md:rounded-l-lg" // Adjusted rounded corners for responsiveness
        />
      </div>

      {/* Text Content Section */}
      <div className="p-4 md:p-6 flex flex-col justify-between flex-grow"> 
        <h2 className="font-playfair text-2xl md:text-3xl tracking-wide text-deep-burgundy mb-2">
          {title}
        </h2>
        <div className="flex items-center justify-between text-xs text-neutral-gray mb-2">
          <span>{author.username} | {displayedTime}</span>
          <span className="font-lato hover:underline text-sm">Read More</span> 
        </div>
        <p className="text-sm line-clamp-3 break-words"> {/* Added break-words to prevent overflow */}
          {summary}
        </p>
      </div>
    </Link>
  );
};