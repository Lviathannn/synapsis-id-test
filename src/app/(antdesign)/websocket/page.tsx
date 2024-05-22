'use client';
import { useEffect, useRef } from 'react';

const Page = () => {
  const userNikRef = useRef<HTMLSpanElement>(null);
  const subjectRef = useRef<HTMLSpanElement>(null);
  const messageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // @ts-ignore
    const centrifuge = new Centrifuge(
      'wss://wss.apps-madhani.com/connection/websocket',
      {
        token: 'AaBbCcJKLMNOPqrstu21VWXYZ',
      },
    );

    // @ts-ignore
    centrifuge.on('connect', function (context) {
      console.log('connect', context);
    });

    // @ts-ignore
    centrifuge.on('disconnect', function (context) {
      console.log('disconnect', context);
    });

    // @ts-ignore
    const nik = '123456';
    centrifuge.subscribe(
      `ws/test-app/notification/users/${nik}`,
      // @ts-ignore
      function (ctx) {
        console.log('message', ctx);
      },
    );

    centrifuge.connect();
  }, []);

  return (
    <div>
      <span ref={userNikRef}></span>
      <span ref={subjectRef}></span>
      <span ref={messageRef}></span>
    </div>
  );
};

export default Page;
