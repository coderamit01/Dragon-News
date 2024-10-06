import { Link } from "react-router-dom";

const Social = ({text,link,icon}) => {
  return (
    <Link className='flex items-center p-2 border-b border-base-300 last:border-none rounded space-x-2 text-gray-700'>
      <span className="h-9 w-9 rounded-full bg-base-200 flex items-center justify-center text-lg">{icon}</span>
      <span className='font-Poppins font-d_500'>
        {text}
      </span>
    </Link>
  );
};

export default Social;