'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import StreakPanel from './StreakPanel';
import ProgressCard from './ProgressCard';
import CourseCard from './CourseCard';
import PromoPanel from './PromoPanel';
import { courses } from '../data/learning';

export default function LearningDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eef1f7] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-[#f7f8fc] shadow-soft">
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

        <section className="flex min-w-0 flex-1 flex-col">
          <Topbar onMenuClick={() => setMenuOpen(true)} />

          <div className="grid min-w-0 flex-1 gap-4 px-4 py-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-5 xl:grid-cols-[minmax(0,1fr)_390px]">
            <div className="min-w-0 space-y-4">
              <StreakPanel />
              <ProgressCard />

              <div className="space-y-3">
                {courses.map((course, index) => (
                  <CourseCard key={course.title} {...course} delay={index * 90} />
                ))}
              </div>
            </div>

            <PromoPanel />
          </div>
        </section>
      </div>
    </main>
  );
}
