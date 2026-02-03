import { CalendarCheck, DoorOpen, UserPlus, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const metricsData = [
  {
    title: "Agendamentos Hoje",
    value: "12",
    icon: CalendarCheck,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Salas Ocupadas Agora",
    value: "3/5",
    icon: DoorOpen,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Novos Clientes (Mês)",
    value: "28",
    icon: UserPlus,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const agendamentosData = [
  {
    id: 1,
    cliente: "Maria Silva",
    sala: "Consultório Odontológico",
    dataHora: "02/02 - 14:00h",
    status: "confirmado",
  },
  {
    id: 2,
    cliente: "João Santos",
    sala: "Sala Terapêutica",
    dataHora: "02/02 - 15:30h",
    status: "confirmado",
  },
  {
    id: 3,
    cliente: "Ana Costa",
    sala: "Sala de Estética",
    dataHora: "02/02 - 16:00h",
    status: "pendente",
  },
  {
    id: 4,
    cliente: "Pedro Oliveira",
    sala: "Consultório de Psicologia",
    dataHora: "03/02 - 09:00h",
    status: "confirmado",
  },
  {
    id: 5,
    cliente: "Carla Mendes",
    sala: "Consultório Odontológico",
    dataHora: "03/02 - 10:30h",
    status: "cancelado",
  },
];

const statusConfig = {
  confirmado: {
    label: "Confirmado",
    variant: "default" as const,
    className: "bg-green-100 text-green-800 hover:bg-green-100",
  },
  pendente: {
    label: "Pendente",
    variant: "secondary" as const,
    className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  },
  cancelado: {
    label: "Cancelado",
    variant: "destructive" as const,
    className: "bg-red-100 text-red-800 hover:bg-red-100",
  },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Visão Geral do Dia</h1>
        <p className="text-slate-500 mt-1">
          Bem-vinda ao painel administrativo do Damha Coworking
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricsData.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {metric.title}
                </CardTitle>
                <div className={`w-10 h-10 rounded-full ${metric.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Bookings Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Próximos Agendamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Cliente</TableHead>
                <TableHead className="font-semibold">Sala</TableHead>
                <TableHead className="font-semibold">Data/Hora</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="text-right font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agendamentosData.map((agendamento) => {
                const statusInfo = statusConfig[agendamento.status as keyof typeof statusConfig];
                return (
                  <TableRow key={agendamento.id} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{agendamento.cliente}</TableCell>
                    <TableCell className="text-slate-600">{agendamento.sala}</TableCell>
                    <TableCell className="text-slate-600">{agendamento.dataHora}</TableCell>
                    <TableCell>
                      <Badge className={statusInfo.className}>
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
