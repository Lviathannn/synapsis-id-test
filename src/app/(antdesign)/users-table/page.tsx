'use client';
import CreateUserForm from '@/components/features/CreateUserForm';
import { Table, TableProps, Space } from 'antd';
import { useState } from 'react';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    showSorterTooltip: { target: 'full-header' },
    render: (text) => <p>{text}</p>,
    sorter: (a, b) => a.key - b.key,
    sortDirections: ['descend'],
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ['ascend'],
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    showSorterTooltip: { target: 'full-header' },
    sorter: (a, b) => a.age - b.age,
    sortDirections: ['ascend'],
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: 4,
    name: 'Emily White',
    age: 29,
    address: 'Tokyo No. 2 Lake Park',
  },
  {
    key: 5,
    name: 'Michael Johnson',
    age: 35,
    address: 'Berlin No. 3 Lake Park',
  },
  {
    key: 6,
    name: 'Jessica Green',
    age: 27,
    address: 'Paris No. 4 Lake Park',
  },
  {
    key: 7,
    name: 'David Harris',
    age: 45,
    address: 'Rome No. 5 Lake Park',
  },
  {
    key: 8,
    name: 'Sarah Wilson',
    age: 38,
    address: 'Moscow No. 6 Lake Park',
  },
  {
    key: 9,
    name: 'Daniel Martinez',
    age: 30,
    address: 'Madrid No. 7 Lake Park',
  },
  {
    key: 10,
    name: 'Laura Clark',
    age: 33,
    address: 'Dubai No. 8 Lake Park',
  },
  {
    key: 11,
    name: 'James Rodriguez',
    age: 36,
    address: 'Toronto No. 9 Lake Park',
  },
  {
    key: 12,
    name: 'Anna Kim',
    age: 28,
    address: 'Seoul No. 10 Lake Park',
  },
  {
    key: 13,
    name: 'Robert Lee',
    age: 40,
    address: 'Beijing No. 11 Lake Park',
  },
  {
    key: 14,
    name: 'Linda King',
    age: 34,
    address: 'Bangkok No. 12 Lake Park',
  },
  {
    key: 15,
    name: 'Christopher Scott',
    age: 31,
    address: 'Singapore No. 13 Lake Park',
  },
  {
    key: 16,
    name: 'Patricia Brown',
    age: 37,
    address: 'Kuala Lumpur No. 14 Lake Park',
  },
  {
    key: 17,
    name: 'Andrew Moore',
    age: 39,
    address: 'Jakarta No. 15 Lake Park',
  },
  {
    key: 18,
    name: 'Sophia Taylor',
    age: 26,
    address: 'Hanoi No. 16 Lake Park',
  },
  {
    key: 19,
    name: 'Brian Anderson',
    age: 41,
    address: 'Manila No. 17 Lake Park',
  },
  {
    key: 20,
    name: 'Megan Thomas',
    age: 33,
    address: 'Ho Chi Minh No. 18 Lake Park',
  },
];

export default function Page() {
  const [dummy, setDummy] = useState<DataType[]>(data);
  return (
    <main className="container py-10 flex justify-between minh-h-screen items-center">
      <CreateUserForm data={dummy} setData={setDummy} />
      <Table dataSource={dummy} className="w-full" columns={columns} />;
    </main>
  );
}
