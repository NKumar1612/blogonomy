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
      className="group flex flex-col md:flex-row bg-soft-white hover:bg-[#F2F0F9] border border-light-lavender rounded-lg overflow-hidden shadow-md transition duration-300 w-80 md:w-full"
    >
      {/* Image Section */}
      <div className="relative md:w-1/3 flex-shrink-0">
        <img
          src={`https://blogonomy.onrender.com/${cover}`}
          alt={title}
          className="object-cover object-center w-full h-full rounded-t-lg md:rounded-l-lg group-hover:scale-105 transition-transform duration-300" // Added hover effect
        />
      </div>

      {/* Text Content Section */}
      <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
        <h2 className="font-playfair text-2xl md:text-3xl tracking-wide text-deep-burgundy mb-2">
          {title}
        </h2>
        <p className="text-neutral-gray text-sm mb-2">{authorAndDate}</p> {/* Combined author and date */}
        <p className="text-sm line-clamp-3 break-words text-neutral-gray">
          {summary}
        </p>
        <button className="bg-dark-olive-green text-soft-white font-barlow py-2 px-4 rounded-md hover:bg-darker-mint-green transition-colors duration-300 text-sm mt-4">
          Read More
        </button> {/* Added margin-top to button */}
      </div>
    </Link>
  );
};