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
      className="group flex flex-col bg-soft-white hover:bg-[#F2F0F9] border border-light-lavender rounded-lg overflow-hidden shadow-md transition duration-300 w-80 md:w-96 h-96 md:h-72" // Added fixed height for mobile and desktop
    >
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-36 overflow-hidden">
        <img
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
          className="object-cover object-center w-full h-full rounded-t-lg md:rounded-l-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Content Section */}
      <div className="p-4 md:p-6 flex flex-col flex-grow"> {/* Remove justify-between, add flex-grow to the container itself */}
        <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl tracking-wide text-deep-burgundy mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-neutral-gray text-sm mb-2">
          {author.username} | {displayedTime}
        </p>
        <div className="text-sm line-clamp-3 break-words text-neutral-gray flex-grow">  
          {/* Apply flex-grow and line-clamp to the summary container */}
          {summary}
        </div>
        <div className="mt-4 self-end"> {/* Position the button at the bottom-right */}
          <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-4 rounded-md hover:bg-darker-mint-green transition-colors duration-300 text-sm">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};