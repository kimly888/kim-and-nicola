import { MainLayout } from "@/components/layout/MainLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { textColor } from "@/lib/theme";

export default function AdminPage() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <MainLayout>
          <div className="container mx-auto px-4 py-20">
            <h1 className={`text-3xl md:text-4xl mb-8 text-center ${textColor.lightTaupe}`}>Admin Dashboard</h1>
            <AdminDashboard />
          </div>
        </MainLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}
