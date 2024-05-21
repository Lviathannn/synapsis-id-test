import { create } from 'zustand';

interface NotificationState {
  createUserMessage: string;
  deleteUserMessage: string;
}

export const useNotificationStore = create<NotificationState>()((set) => ({
  createUserMessage: 'User created successfully!',
  deleteUserMessage: 'User deleted successfully!',
}));
