import { NotificationInstance } from 'antd/es/notification/interface';
import { useEffect, useState } from 'react';
type Message = {
  user_nik: string;
  subject: string;
  message: string;
};

export const useNotification = (api: NotificationInstance) => {
  const [message, setMessage] = useState<Message | null>(null);
  useEffect(() => {
    // @ts-ignore
    const centrifuge = new Centrifuge(
      'wss://wss.apps-madhani.com/connection/websocket',
    );
    // @ts-ignore
    centrifuge.on('connect', function (context) {
      console.log('connect', context);
    });
    // @ts-ignore
    centrifuge.on('disconnect', function (context) {
      console.log('disconnect', context);
    });

    const nik = '123456';
    centrifuge.subscribe(
      `ws/test-app/notification/users/${nik}`,
      // @ts-ignore
      function (ctx) {
        console.log('message', ctx);
        setMessage(ctx.data);
      },
    );

    centrifuge.connect();

    return () => {
      centrifuge.disconnect();
    };
  }, []);

  useEffect(() => {
    if (message) {
      api.open({
        message: message.user_nik,
        description: message.message,
      });
    }
  }, [message, api]);

  return message;
};
