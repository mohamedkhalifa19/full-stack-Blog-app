import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
function layout({ children }: IProps) {
    return <div>
        <header>
            <h2>Blog CMS</h2>
            <nav>
                <Link href={'/support'}>Support</Link>
                <Link href={'/auth/login'}>Sign in</Link>
            </nav>
        </header>
        {children}
    </div >;
}

export default layout;
