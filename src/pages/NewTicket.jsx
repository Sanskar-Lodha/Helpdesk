import attachment from "../assets/attachment.png";

export default function NewTicket() {
  return (
    <div className=" font-sanchez flex flex-col items-center flex-1">
      {/* Heading */}
      <h2 className="text-3xl mb-8">Create New Ticket</h2>

      <div className="flex flex-col gap-4 w-full max-w-4xl">
        {/* Row 1 - Left Labels */}
        <div className="flex gap-6">
          <div className="flex items-center w-1/2">
            <label className="w-32">Ticket No.</label>
            <input
              type="text"
              className="flex-1 bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
          <div className="flex items-center w-1/2">
            <label className="w-32">Date:</label>
            <input
              type="text"
              className="flex-1 bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
        </div>

        {/* Row 2 - Left Labels */}
        <div className="flex gap-6">
          <div className="flex items-center w-1/2">
            <label className="w-32">Name:</label>
            <input
              type="text"
              className="flex-1 bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
          <div className="flex items-center w-1/2">
            <label className="w-32">Department:</label>
            <input
              type="text"
              className="flex-1 bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
        </div>

        {/* Subject - Top Label */}
        <div className="flex flex-col">
          <label className="mb-1">Subject:</label>
          <input
            type="text"
            className="bg-gray-300 opacity-70 p-2 rounded shadow"
          />
        </div>

        {/* Category + Description */}
        <div className="flex gap-6">
          {/* Category - Top Label */}
          <div className="flex flex-col w-1/2">
            <label className="mb-1">Category:</label>
            <input
              type="text"
              className="bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
          {/* Description - Top Label */}
          <div className="flex flex-col w-1/2 relative">
            <label className="mb-1">Description:</label>
            <textarea className="h-[120px] bg-gray-300 opacity-70 p-2 rounded shadow resize-none" />
            <div className="absolute bottom-2 right-2">
              <button className="bg-teal-400 text-white p-2 rounded shadow">
                <img
                  src={attachment}
                  className="w-[16px] h-[16px]"
                  alt="attach"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Type + Priority */}
        <div className="flex gap-6">
          {/* Type - Top Label */}
          <div className="flex flex-col w-1/2">
            <label className="mb-1">Type:</label>
            <input
              type="text"
              className="bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
          {/* Priority - Top Label */}
          <div className="flex flex-col w-1/2">
            <label className="mb-1">Priority:</label>
            <input
              type="text"
              className="bg-gray-300 opacity-70 p-2 rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Optional Bottom Spacer (remove if not needed) */}
      <div className="mt-10" />
      <button className="px-10 py-1 bg-teal-400 rounded-md shadow-md">
        Submit
      </button>
    </div>
  );
}
