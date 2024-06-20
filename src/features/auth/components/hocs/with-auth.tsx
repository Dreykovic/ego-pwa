import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const WithAuth: React.FC<Props> = (props) => {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="lg:glass max-sm:py-1 py-6 px-5 max-sm:px-1 rounded-md">
        <div className="text-base-content ">
          <div className="max-sm:mb-3 mb-8 flex flex-col items-center">
            <div className="flex flex-col mx-10  my-0 items-center justify-center text-2xl">
              <h3 className="uppercase">{props.title}</h3>
            </div>
          </div>

          {props.children}
        </div>
      </div>
    </div>
  );
};

export default WithAuth;
