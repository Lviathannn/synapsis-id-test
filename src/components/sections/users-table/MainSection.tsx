'use client';
import CreateUserForm from '@/components/features/CreateUserForm';
import { getDummyUsers } from '@/services/getDummyUsers';
import { useNotificationStore } from '@/store/notification/notificationStore';
import { useQuery } from '@tanstack/react-query';
import { Table, TableProps, Space, Modal, Button, message } from 'antd';
import { useState } from 'react';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default function MainSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { data: users } = useQuery({
    queryKey: ['dummyUsers'],
    queryFn: () => getDummyUsers(),
  });

  const successMessage = useNotificationStore(
    (state) => state.deleteUserMessage,
  );

  const showModal = (user: DataType) => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    messageApi.open({
      type: 'success',
      content: successMessage,
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Button
            danger
            type="primary"
            onClick={() => {
              showModal(record);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <main className="container py-10 flex justify-between minh-h-screen items-center">
      {contextHolder}
      <CreateUserForm />
      <Table
        dataSource={users as DataType[]}
        className="w-full"
        columns={columns}
      />
      ;
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete </p>
      </Modal>
    </main>
  );
}
