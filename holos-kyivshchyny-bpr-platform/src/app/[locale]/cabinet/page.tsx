import { StatCard } from "@/components/ui/stat-card";
export default function CabinetPage() {
  return (
    <>
      <h1>������</h1>
      <div className="grid">
        <StatCard label="�������� ����" value="18.07" />
        <StatCard label="���� ���" value="10" />
        <StatCard label="����������" value="1" />
      </div>
      <p>
        ������� ��������, �����, ���������� �� ����������� ����糿 �������
        � ������� �������.
      </p>
    </>
  );
}
