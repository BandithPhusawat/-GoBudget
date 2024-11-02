import { ReactNode } from 'react';
import MapComponent from './Map';

type Props = {
  title: string;
  content: ReactNode;
};

export default function AdminHome({ title, content }: Props) {
  return (
    <div className="w-full h-full p-4">
      <div className="">{title}</div>
      <div>{content}</div>
      <div className="w-full h-full">
        <MapComponent />
      </div>
    </div>
  );
}
