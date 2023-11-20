export const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="flex w-full bg-white rounded-lg items-center gap-5 p-5 shadow-md">
      <div>{icon}</div>
      <div>
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-500">{value}</div>
      </div>
    </div>
  );
};
