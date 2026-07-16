import Sidebar from '../components/Sidebar'
import Search from '../components/Search'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="dashboardLayout flex w-full">
        <Sidebar />
        <div className="content w-full">
          <Search />
          {children}
        </div>
      </div>

  );
}