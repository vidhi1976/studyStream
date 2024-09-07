import Link from 'next/link';
import { FaBook, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">StudyStream Dashboard</h1>
          <nav>
            <Link href="/" className="hover:underline mx-2">
              Home
            </Link>
            <Link href="/profile" className="hover:underline mx-2">
              Profile
            </Link>
            <Link href="/settings" className="hover:underline mx-2">
              Settings
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 bg-gray-800 p-4 shadow-lg rounded-lg mb-6 md:mb-0 mr-9">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <Link href="/courses" className="flex items-center hover:underline">
                <FaBook  /> Courses
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/calendar" className="flex items-center hover:underline">
                <FaCalendarAlt  /> Calendar
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile" className="flex items-center hover:underline">
                <FaUser /> Profile
              </Link>
            </li>
          </ul>
        </aside>

        {/* Dashboard Cards */}
        <section className="md:w-3/4 bg-gray-800 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome, [Student Name]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Assignments */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Upcoming Assignments</h3>
              <ul>
                <li className="mb-2">Math Homework - Due 09/15</li>
                <li className="mb-2">Science Project - Due 09/20</li>
                <li className="mb-2">History Essay - Due 09/25</li>
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
              <ul>
                <li className="mb-2">Completed "Introduction to Algebra" course</li>
                <li className="mb-2">Submitted "Physics Lab Report"</li>
                <li className="mb-2">Posted in "Biology Discussion Forum"</li>
              </ul>
            </div>
          </div>

          {/* Courses */}
          <div className="mt-6 bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Your Courses</h3>
            <ul>
              <li className="mb-2">Mathematics - Algebra I</li>
              <li className="mb-2">Science - Physics Fundamentals</li>
              <li className="mb-2">History - Ancient Civilizations</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 StudyStream. All rights reserved.</p>
      </footer>
    </div>
  );
}
