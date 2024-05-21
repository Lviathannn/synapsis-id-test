import { ConfigProvider } from 'antd';

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563eb',
          borderRadius: 5,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
