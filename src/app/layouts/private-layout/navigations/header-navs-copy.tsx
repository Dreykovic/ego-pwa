// import { Link } from 'react-router-dom';

// import { NavType } from '@/shared/types/routes-type';
// import { RootState } from '@/stores';
// import { useSelector } from 'react-redux';

// type Props = {
//   navs: NavType[];
// };
// export default function HeaderNavs(props: Props) {
//   const { pageTitle } = useSelector((state: RootState) => state.header);
//   return (
//     <ul className="menu hidden  lg:menu-horizontal rounded-box">
//       {props.navs.map((nav, k) => {
//         return (
//           <li key={k}>
//             <Link
//               to={nav.path}
//               className={nav.label === 'home' ? 'active text-primary' : ''}
//             >
//               {nav.icon}
//               {nav.label}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
