import { useState } from 'react';
import api from '@/api/axios';
import { useUserStore } from '@/store/userStore';

export const useProfile = () => {
  const { user, setUser } = useUserStore();
  const [isUploading, setIsUploading] = useState(false);

  const uploadAvatar = async (file: File) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data: imageUrl } = await api.post('/users/me/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (user) {
        setUser({ ...user, profileImage: imageUrl });
      }
      return imageUrl;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadAvatar,
    isUploading,
    user
  };
};
