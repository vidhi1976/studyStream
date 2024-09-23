import Link from 'next/link';
import { FaUserGraduate, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

export default function TeacherDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-[#41A2D9]">
      {/* Header */}
      <header className="bg-[#41A2D9] text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <nav>
            <Link href="/" className="hover:underline mx-2 text-black">
              Home
            </Link>
            <Link href="/profile" className="hover:underline mx-2 text-black">
              Profile
            </Link>
            <Link href="/settings" className="hover:underline mx-2 text-black">
              Settings
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 bg-[#F5F5DC] p-4 shadow-lg rounded-lg mb-6 md:mb-0 mr-9 border border-[#41A2D9] text-black">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <Link href="/students" className="flex items-center hover:underline">
                <FaUserGraduate  /> Students
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/grades" className="flex items-center hover:underline">
                <FaClipboardList  /> Grade Assignments
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/calendar" className="flex items-center hover:underline">
                <FaCalendarCheck  /> Calendar
              </Link>
            </li>
          </ul>
        </aside>

        {/* Dashboard Cards */}
        <section className="md:w-3/4 bg-black p-6 shadow-lg rounded-lg border border-[#41A2D9] text-[#F5F5DC]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Student Activities */}
            <div className="bg-[#F5F5DC] p-4 rounded-lg shadow-md text-black hover:shadow-white transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Recent Student Activities</h3>
              <ul>
                <li className="mb-2">John Doe - Completed "Algebra I" assignment</li>
                <li className="mb-2">Jane Smith - Submitted "Biology Lab Report"</li>
                <li className="mb-2">Alex Lee - Participated in "History Discussion"</li>
              </ul>
            </div>

            {/* Assignments to Grade */}
            <div className="bg-[#F5F5DC] p-4 rounded-lg shadow-md text-black hover:shadow-white transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Assignments to Grade</h3>
              <ul>
                <li className="mb-2">John Doe - Math Homework - Due 09/15</li>
                <li className="mb-2">Jane Smith - Science Project - Due 09/20</li>
                <li className="mb-2">Alex Lee - History Essay - Due 09/25</li>
              </ul>
            </div>
          </div>

          {/* Student List */}
          <div className="mt-6 bg-[#F5F5DC] p-4 rounded-lg shadow-md text-black hover:shadow-white transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">Your Students</h3>
            <ul>
              <li className="mb-2">John Doe - Algebra I</li>
              <li className="mb-2">Jane Smith - Physics Fundamentals</li>
              <li className="mb-2">Alex Lee - Ancient Civilizations</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#41A2D9] text-black p-4 text-center">
        <p>&copy; 2024 StudyStream. All rights reserved.</p>
      </footer>
    </div>
  );
}
