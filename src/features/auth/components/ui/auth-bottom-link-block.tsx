import { Link } from 'react-router-dom';

export interface IAuthBottomLonkBlovkProps {
  firstText: string;
  secondText: string;
  to: string;
  className?: string;
}

export function AuthBottomLinkBlock({
  className = '',
  ...props
}: IAuthBottomLonkBlovkProps) {
  return (
    <>
      <div
        className={
          'text-gost flex text-center flex-col my-2 items-center text-sm py-2 max-w-3/4 ' +
          className
        }
      >
        <p className="cursor-default">
          {props.firstText}
          <Link to={props.to} className="link link-primary ml-2">
            {props.secondText}
          </Link>
        </p>
      </div>
    </>
  );
}
