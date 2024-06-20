const SuspenseContent: React.FC = () => {
  return (
    <div className="w-full h-screen text-gray-300 dark:text-gray-200 bg-base-100 flex items-center justify-center">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default SuspenseContent;
