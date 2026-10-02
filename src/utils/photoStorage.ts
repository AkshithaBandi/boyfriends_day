import { useState, useEffect } from 'react';

const STORAGE_KEY = 'teja_achii_sep12_photos_list';
const LEGACY_STORAGE_KEY = 'teja_achii_sep12_photos_list';

export function getStoredSep12Photos(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStoredSep12Photos(photos: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    window.dispatchEvent(new Event('sep12_photos_updated'));
  } catch (err) {
    console.error('Failed to save photos to storage:', err);
  }
}

export function useSep12Photos() {
  const [photos, setPhotos] = useState<string[]>(() => getStoredSep12Photos());

  useEffect(() => {
    const handleUpdate = () => {
      setPhotos(getStoredSep12Photos());
    };

    window.addEventListener('sep12_photos_updated', handleUpdate);
    return () => window.removeEventListener('sep12_photos_updated', handleUpdate);
  }, []);

  const addPhotos = (files: FileList | File[]) => {
    const newPhotos: string[] = [];
    const fileArray = Array.from(files);
    let loadedCount = 0;

    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          newPhotos.push(e.target.result);
        }
        loadedCount++;
        if (loadedCount === fileArray.length) {
          const updated = [...getStoredSep12Photos(), ...newPhotos];
          saveStoredSep12Photos(updated);
          setPhotos(updated);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    const current = getStoredSep12Photos();
    const updated = current.filter((_, i) => i !== index);
    saveStoredSep12Photos(updated);
    setPhotos(updated);
  };

  const clearPhotos = () => {
    saveStoredSep12Photos([]);
    setPhotos([]);
  };

  return {
    photos,
    primaryPhoto: photos.length > 0 ? photos[0] : null,
    addPhotos,
    removePhoto,
    clearPhotos,
    hasPhotos: photos.length > 0,
  };
}
