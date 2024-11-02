import clsx from 'clsx';
import SideBarComponent from './sideBar/SideBarComponent';
import { useState } from 'react';
import Users from '../components/userList';
import Home from '../components/Home';
import BudgetSetting from '../components/settingBudget';
import SystemSetting from '../components/settingSystem';

export default function Admin() {
  const [pageSelected, setPageSelected] = useState<string>('home');

  return (
    <div className=" w-full h-dvh">
      <div className="w-full h-16 sticky bg-red-200 top-0">
        <div
          className={clsx(
            'w-full h-full flex justify-center items-center',
            'bg-gradient-to-tr from-red-300 via-yellow-200 to-green-200',
          )}
        >
          <p className="text-4xl text-blue-500 font-bold">GoBudget</p>
        </div>
      </div>
      <div className="w-full h-full hidden md:flex">
        <div className="w-1/6 h-full">
          <SideBarComponent handlePageSelected={setPageSelected} />
        </div>
        <div className="bg-blue-100 w-5/6 h-full">
          {(pageSelected === 'home' && (
            <Home title="! admin" content={<div className="">detail content !!!!</div>} />
          )) ||
            (pageSelected === 'users' && <Users />) ||
            (pageSelected === 'budgetSetting' && <BudgetSetting />) ||
            (pageSelected === 'adminSetting' && <SystemSetting />) || <Users />}
        </div>
      </div>
    </div>
  );
}
