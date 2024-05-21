'use client';
import { Button, DatePicker, Form, Input, Upload, notification } from 'antd';
import type { FormProps } from 'antd';
import { UploadIcon } from 'lucide-react';

type FieldType = {
  title: string;
  content: string;
  date: Date;
};

const { RangePicker } = DatePicker;
const rangeConfig = {
  rules: [
    { type: 'array' as const, required: true, message: 'Please select time!' },
  ],
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function Page() {
  const [form] = Form.useForm();
  const onFinish = (fieldsValue: any) => {
    notification.success({
      message: 'Post created successfully',
    });
    // Should format date value before submit.
    console.log('fieldsValue', fieldsValue);

    console.log('title', fieldsValue?.title);
    console.log('content', fieldsValue?.content);
    console.log('date', new Date(fieldsValue?.date).toISOString());

    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format(
        'YYYY-MM-DD HH:mm:ss',
      ),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [
        rangeValue[0].format('YYYY-MM-DD'),
        rangeValue[1].format('YYYY-MM-DD'),
      ],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
    form.resetFields();
  };

  return (
    <main className="container py-20 flex flex-col gap-10 justify-center h-screen items-center">
      <h1 className="text-3xl font-medium">Create Post</h1>

      <Form
        form={form}
        name="control-hooks"
        className="max-w-xl w-full"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true, gender: 'male' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
          <RangePicker />
        </Form.Item>

        <Form.Item
          label="Upload"
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action=""
            listType="picture-card"
            accept="image/png, image/jpg, .pdf"
          >
            <button style={{ border: 0, background: 'none' }} type="button">
              <UploadIcon />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
