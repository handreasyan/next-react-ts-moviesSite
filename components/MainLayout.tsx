
import React, {ReactChildren, ReactChild, ReactFragment, ReactNode} from 'react';
import {Header} from "./Header";

interface MainLayoutProps {
  children: ReactChild | ReactChildren | ReactFragment | ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}:MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout