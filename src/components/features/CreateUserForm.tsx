'use client';
import { Button, Form, Input, InputNumber, notification } from 'antd';
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

interface Props {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export default function CreateUserForm({ data, setData }: Props) {
  const [form] = Form.useForm();

  const onFinish = (fieldsValue: FieldType) => {
    const user = {
      key: data.length + 1,
      ...fieldsValue,
    };

    setData([...data, user]);
    notification.success({
      message: 'User created successfully',
    });
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
    notification.error({
      message: 'Failed to create user',
    });
  };

  return (
    <div className="container flex flex-col gap-10 justify-center h-screen items-center">
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
