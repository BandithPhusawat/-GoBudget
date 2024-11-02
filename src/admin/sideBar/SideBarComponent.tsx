import clsx from 'clsx';

type Props = {
  handlePageSelected: (pageSelected: string) => void;
};

export default function SideBarComponent({ handlePageSelected }: Props) {
  return (
    <div className="flex flex-col w-full h-full justify-start gap-1 pt-1">
      {MenuList.map((item) => (
        <div
          key={item.key}
          className={clsx(
            'w-full h-10 text-center items-center flex justify-center cursor-pointer',
            'bg-gradient-to-r from-red-200 via-green-100 to-blue-200 hover:opacity-80',
          )}
          onClick={() => {
            handlePageSelected(item?.key);
          }}
        >
          {item.btn}
        </div>
      ))}
    </div>
  );
}

const MenuList = [
  {
    key: 'home',
    btn: 'Home',
    is_active: true,
  },
  {
    key: 'users',
    btn: 'User List',
    is_active: true,
  },
  {
    key: 'budgetSetting',
    btn: 'Budget Setting',
    is_active: true,
  },
  {
    key: 'adminSetting',
    btn: 'System Setting',
    is_active: true,
  },
];
