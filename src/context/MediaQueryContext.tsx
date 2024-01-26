import { createContext, FC, ReactNode, useContext } from "react";
import { useMediaQuery } from "react-responsive";

export interface IMediaQueryContext {
  Desktop: ({ children }: IMediaQueryProps) => JSX.Element | null;
  Mobile: ({ children }: IMediaQueryProps) => JSX.Element | null;
  isDesktop: boolean;
  isMobile: boolean;
}
export interface IMediaQueryProps {
  children: ReactNode;
}
const MediaQueryContext = createContext<IMediaQueryContext>(
  {} as IMediaQueryContext
);

const MediaQueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 641 });
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const Desktop = ({ children }: IMediaQueryProps) => {
    return <>{isDesktop && children}</>;
  };

  const Mobile = ({ children }: IMediaQueryProps) => {
    return <>{isMobile && children}</>;
  };
  return (
    <MediaQueryContext.Provider
      value={{ Desktop, Mobile, isDesktop, isMobile }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};

const useMediaQueryProvider = () => {
  const app = useContext(MediaQueryContext);

  return app;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useMediaQueryProvider, MediaQueryProvider };
