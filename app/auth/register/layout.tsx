import { Database } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
function layout({ children }: IProps) {
  return (
    <div className="p-2 border-b border-b-gray-500">
      {" "}
      <div className="container mx-auto ">
        <header className="text-white flex justify-between ">
          <h2 className="font-bold flex items-center space-x-1.5">
            <Database className="text-indigo-600 " />{" "}
            <span className="text-xl">Blog CMS</span>
          </h2>
          <nav className="space-x-3.5">
            <Link href={"/support"}>Support</Link>
            <Link href={"/auth/login"}>Sign in</Link>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
}

export default layout;
