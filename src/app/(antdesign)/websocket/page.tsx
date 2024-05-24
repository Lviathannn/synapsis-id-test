'use client';
import { Tag } from 'antd';
import React from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useNotification } from '@/hooks/useNotification';

const Page = () => {
  const [api, contextHolder] = notification.useNotification();
  const message = useNotification(api as NotificationInstance);

  return (
    <main className="h-screen container flex justify-center items-center">
      {contextHolder}
      <div>
        {message ? (
          <>
            <Tag color="blue">{message?.user_nik}</Tag>
            <h2 className="text-lg font-medium">
              Subject : {message?.subject}
            </h2>
            <p>Message : {message?.message}</p>
          </>
        ) : (
          <p>No message</p>
        )}
      </div>
    </main>
  );
};

export default Page;
