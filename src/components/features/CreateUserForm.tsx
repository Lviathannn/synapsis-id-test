'use client';
import { useNotificationStore } from '@/store/notification/notificationStore';
import { Button, Form, Input, InputNumber, message } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  name: string;
  age: number;
  address: string;
};

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default function CreateUserForm() {
  const successMessage = useNotificationStore(
    (state) => state.createUserMessage,
  );
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const onFinish = (fieldsValue: FieldType) => {
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    messageApi.open({
      type: 'error',
      content: "Couldn't create user",
    });
  };

  return (
    <div className="container flex flex-col gap-10 justify-center h-screen items-center">
      {contextHolder}
      <h1 className="text-3xl font-medium">Create User</h1>

      <Form
        form={form}
        name="control-hooks"
        className="max-w-lg w-full"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true, gender: 'male' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item<FieldType>
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
