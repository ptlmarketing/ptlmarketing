import React from "react";

function Users() {
  return (
    <div className="p-4">
      {/* Responsive Wrapper */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-[800px] table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="px-4 py-2 border">Song</th>
              <th className="px-4 py-2 border">Artist</th>
              <th className="px-4 py-2 border">Year</th>
              <th className="px-4 py-2 border">Album</th>
              <th className="px-4 py-2 border">Genre</th>
              <th className="px-4 py-2 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="px-4 py-2 border">Malcolm Lockyer</td>
              <td className="px-4 py-2 border">1961</td>
              <td className="px-4 py-2 border">Bones Album</td>
              <td className="px-4 py-2 border">Jazz</td>
              <td className="px-4 py-2 border">3:45</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border">Witchy Woman</td>
              <td className="px-4 py-2 border">The Eagles</td>
              <td className="px-4 py-2 border">1972</td>
              <td className="px-4 py-2 border">Eagles Album</td>
              <td className="px-4 py-2 border">Rock</td>
              <td className="px-4 py-2 border">4:10</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border">Shining Star</td>
              <td className="px-4 py-2 border">Earth, Wind, and Fire</td>
              <td className="px-4 py-2 border">1975</td>
              <td className="px-4 py-2 border">Star Album</td>
              <td className="px-4 py-2 border">Funk</td>
              <td className="px-4 py-2 border">5:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
