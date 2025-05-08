import React from 'react';

function NavBar() {
    return (
      <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold flex items-center gap-2">
          {/* <img src="../assets/react.svg" alt="ApproachSafe Logo" /> */}
          ApproachSafe
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option>Select Airport</option>
            <option>KLAX</option>
            <option>KATL</option>
          </select>
          <select className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option>Select Runway</option>
            <option>04L</option>
            <option>04R</option>
          </select>
        </div>
      </nav>
    );
  }

export default NavBar