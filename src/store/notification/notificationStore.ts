import { create } from 'zustand';

interface NotificationState {
  errorMessages: string;
  successMessages: string;
}

const useBearStore = create<NotificationState>()((set) => ({
  errorMessages: 'Error while create user',
  successMessages: 'User created successfully',
}));
