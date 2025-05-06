  import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ClothesTable = ({ clothes }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Brand
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Size
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Type
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {clothes.map((article, index) => (
          <tr key={article._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {article.name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {article.brand}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {article.size}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {article.type}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/clothes/details/${article._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/clothes/edit/${article._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/clothes/delete/${article._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClothesTable;
