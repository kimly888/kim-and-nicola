import { MainLayout } from "@/components/layout/MainLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function AdminLoginPage() {
  return (
    <AuthProvider>
      <MainLayout>
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center min-h-[60vh]">
            <LoginForm />
          </div>
        </div>
      </MainLayout>
    </AuthProvider>
  );
} 