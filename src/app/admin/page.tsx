import { MainLayout } from '@/components/layout/MainLayout';
import { AdminDashboard } from '@/components/admin/AdminDashboard';

export default function AdminPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-center">Admin Dashboard</h1>
        <AdminDashboard />
      </div>
    </MainLayout>
  );
} 