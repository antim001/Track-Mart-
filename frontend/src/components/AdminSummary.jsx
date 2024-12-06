import React from 'react';
import {
  FaUser,
  FaBuilding,
  FaCheckCircle,
  FaFileAlt,FaCommentDollar,
  FaHourglassHalf,
  FaTimesCircle,
} from 'react-icons/fa';
import SummaryCard from './SummaryCard.jsx';

function AdminSummary() {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard
          icon={<FaUser />}
          text={'Total Employees'}
          number={13}
          color="bg-teal-600"
        />
        <SummaryCard
          icon={<FaBuilding />}
          text={'Total Department'}
          number={5}
          color="bg-green-600"
        />
        <SummaryCard
          icon={<FaCommentDollar />}
          text={'Monthly Salary'}
          number={500}
          color="bg-yellow-600"
        />
      </div>

      <div className="mt-12">
        <h4 className="text-center text-2xl font-bold">Leave Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SummaryCard
            icon={<FaFileAlt />}
            text="Leave Applied"
            number={5}
            color="bg-teal-600"
          />
          <SummaryCard
            icon={<FaCheckCircle />}
            text="Leave Approved"
            number={2}
            color="bg-green-600"
          />
          <SummaryCard
            icon={<FaHourglassHalf />}
            text="Leave Pending"
            number={4}
            color="bg-yellow-600"
          />
          <SummaryCard
            icon={<FaTimesCircle />}
            text="Leave Declined"
            number={1}
            color="bg-red-600"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminSummary;
