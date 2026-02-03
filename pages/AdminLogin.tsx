import { Link } from "react-router-dom";
import { Lock, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Building2 className="w-6 h-6 text-slate-700" />
            <CardTitle className="text-2xl font-bold">Damha Coworking</CardTitle>
          </div>
          <CardDescription className="text-base">
            Login Administrativo - Área Restrita
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@damhacoworking.com.br"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full"
            />
          </div>
          <Button asChild className="w-full mt-6" size="lg">
            <Link to="/admin/dashboard">
              Entrar no Sistema
            </Link>
          </Button>
          <p className="text-xs text-center text-slate-500 mt-4">
            Acesso exclusivo para administradores autorizados
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
