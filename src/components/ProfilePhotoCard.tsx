import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Upload,
  Image as ImageIcon,
  Trash2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  GraduationCap,
  RefreshCw,
  Link as LinkIcon,
  X,
  User,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const STORAGE_KEY = 'achsah_profile_picture';

export const ProfilePhotoCard: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [urlError, setUrlError] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isLight } = useTheme();

  // Load saved photo from localStorage on initial render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProfileImage(saved);
      }
    } catch {
      // localStorage may be disabled or restricted
    }
  }, []);

  const saveImage = (dataUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch {
      // Ignore if quota exceeded
    }
    setProfileImage(dataUrl);
    window.dispatchEvent(new Event('achsah_profile_picture_updated'));
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const compressAndProcessFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      const img = new Image();
      img.onload = () => {
        const maxDim = 800;
        let width = img.width;
        let height = img.height;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.88);
          saveImage(compressed);
        } else {
          saveImage(reader.result as string);
        }
      };
      img.onerror = () => {
        saveImage(reader.result as string);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, JPEG, WebP).');
      return;
    }

    compressAndProcessFile(file);
    e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please drop an image file (PNG, JPG, JPEG, WebP).');
      return;
    }

    compressAndProcessFile(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim()) {
      setUrlError('Please enter a valid image URL');
      return;
    }

    // Basic URL validation
    try {
      new URL(imageUrlInput.trim());
    } catch {
      setUrlError('Please enter a valid web URL starting with https://');
      return;
    }

    setUrlError('');
    saveImage(imageUrlInput.trim());
    setImageUrlInput('');
    setShowUrlInput(false);
  };

  const handleRemovePhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setProfileImage(null);
    window.dispatchEvent(new Event('achsah_profile_picture_updated'));
  };

  return (
    <div
      id="profile-photo-container"
      className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 relative ${
        isLight
          ? 'bg-white/95 border-slate-200 shadow-slate-200/60'
          : 'bg-[#101524]/95 border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
        onChange={handleFileChange}
        className="hidden"
        id="profile-picture-upload-input"
      />

      {/* Top Header Bar */}
      <div
        className={`px-5 py-3.5 border-b flex items-center justify-between transition-colors ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E18] border-slate-800'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-purple-500/15 text-[#DDD6FE] border border-purple-400/30">
            <User className="w-4 h-4 text-[#A78BFA]" />
          </div>
          <div>
            <h3
              className={`text-xs font-['Outfit'] font-extrabold ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              Candidate Profile Picture
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              {profileImage ? 'Custom Photo Active' : 'Personalize Your Portfolio'}
            </span>
          </div>
        </div>

        {/* Quick Action Badges */}
        <div className="flex items-center gap-2">
          {profileImage && (
            <button
              type="button"
              onClick={handleRemovePhoto}
              title="Remove current picture"
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer flex items-center gap-1 ${
                isLight
                  ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                  : 'bg-rose-950/40 text-rose-300 border-rose-500/30 hover:bg-rose-900/50'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-2xs font-mono">Remove</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-['Outfit'] bg-gradient-to-r from-purple-400 via-rose-300 to-indigo-300 hover:opacity-95 text-[#0F172A] shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-purple-950" />
            <span>{profileImage ? 'Change Pic' : 'Upload Pic'}</span>
          </button>
        </div>
      </div>

      {/* Main Picture Stage / Drop Area */}
      <div className="p-6 sm:p-7 space-y-6">
        
        {/* Photo Canvas Frame */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => {
            fileInputRef.current?.click();
          }}
          className={`group relative rounded-2xl border-2 transition-all overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer min-h-[320px] sm:min-h-[360px] ${
            isDragging
              ? 'border-purple-400 bg-purple-500/10 scale-[1.01]'
              : profileImage
              ? isLight
                ? 'border-slate-200 bg-slate-100'
                : 'border-slate-700 bg-[#0B0F1A]'
              : isLight
              ? 'border-dashed border-purple-300 hover:border-purple-500 bg-purple-50/50 hover:bg-purple-50'
              : 'border-dashed border-purple-400/40 hover:border-purple-400 bg-[#120F24]/50 hover:bg-[#16122E]/80'
          }`}
        >
          {profileImage ? (
            // Uploaded Photo View
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <div className="relative rounded-2xl overflow-hidden max-h-[320px] w-full max-w-[280px] shadow-2xl border border-white/20">
                <img
                  src={profileImage}
                  alt="Achsah Florance - QA Analyst"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <Camera className="w-8 h-8 text-purple-300" />
                  <span className="text-xs font-['Outfit'] font-bold text-center">
                    Click to Change Picture
                  </span>
                  <span className="text-2xs font-mono text-slate-300">
                    or drag a new file here
                  </span>
                </div>
              </div>

              {/* Status Ribbon below photo */}
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-2xs font-mono text-emerald-400 font-semibold">
                  Photo Set &bull; Persisted Locally
                </span>
              </div>
            </div>
          ) : (
            // Empty / Placeholder State with Clear Upload Prompts
            <div className="p-6 sm:p-8 space-y-4 max-w-sm">
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-purple-500/25 via-rose-500/20 to-sky-500/25 border-2 border-purple-400/40 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#C4B5FD] text-[#0F172A] flex items-center justify-center shadow-lg font-['Outfit'] font-extrabold text-2xl sm:text-3xl tracking-wider">
                  AF
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-purple-600 text-white shadow-lg border border-white/20">
                  <Camera className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h4
                  className={`text-base sm:text-lg font-['Outfit'] font-extrabold ${
                    isLight ? 'text-slate-900' : 'text-slate-100'
                  }`}
                >
                  Add Your Profile Picture
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  Drag and drop your photo here, or click to browse from your device.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <span className="px-2.5 py-1 rounded-lg text-2xs font-mono font-medium border bg-purple-500/15 border-purple-400/30 text-[#DDD6FE]">
                  JPG, PNG, WebP
                </span>
                <span className="px-2.5 py-1 rounded-lg text-2xs font-mono font-medium border bg-emerald-500/15 border-emerald-400/30 text-emerald-400">
                  Instant Preview
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Alternative URL Input or Quick Trigger Buttons */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
                  : 'bg-[#0B0F1A] hover:bg-[#13192B] text-slate-200 border-slate-700'
              }`}
            >
              <Upload className="w-3.5 h-3.5 text-purple-400" />
              <span>Browse Image File</span>
            </button>

            <button
              type="button"
              onClick={() => setShowUrlInput(!showUrlInput)}
              className={`py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                showUrlInput
                  ? isLight
                    ? 'bg-purple-100 border-purple-300 text-purple-900'
                    : 'bg-purple-950/60 border-purple-500 text-purple-200'
                  : isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-300'
                  : 'bg-[#0B0F1A] hover:bg-[#13192B] text-slate-300 border-slate-700'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>Paste Image URL</span>
            </button>
          </div>

          {/* Expandable Image URL Form */}
          <AnimatePresence>
            {showUrlInput && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleUrlSubmit}
                className="overflow-hidden space-y-2 pt-1"
              >
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/my-photo.jpg"
                    value={imageUrlInput}
                    onChange={(e) => {
                      setImageUrlInput(e.target.value);
                      setUrlError('');
                    }}
                    className={`flex-1 px-3.5 py-2 rounded-xl border text-xs focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-purple-500'
                        : 'bg-[#0B0F1A] border-slate-700 text-slate-100 focus:border-purple-400'
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {urlError && (
                  <p className="text-2xs font-mono text-rose-400">{urlError}</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Candidate Verified Credentials Summary Strip */}
        <div
          className={`p-3.5 rounded-2xl border space-y-2.5 transition-colors ${
            isLight
              ? 'bg-slate-50/80 border-slate-200 text-slate-800'
              : 'bg-[#0B0F1A] border-slate-800 text-slate-200'
          }`}
        >
          <div className="flex items-center justify-between text-2xs font-mono text-slate-400">
            <span className="uppercase font-bold tracking-wider">Candidate Verification</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Resume Aligned</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className={`p-2 rounded-xl border flex items-center gap-2 ${
              isLight ? 'bg-white border-slate-200' : 'bg-[#101524] border-slate-800'
            }`}>
              <Building className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] text-slate-400">Experience</div>
                <div className="font-bold text-[11px] truncate">Cognizant Alum</div>
              </div>
            </div>

            <div className={`p-2 rounded-xl border flex items-center gap-2 ${
              isLight ? 'bg-white border-slate-200' : 'bg-[#101524] border-slate-800'
            }`}>
              <GraduationCap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] text-slate-400">Academics</div>
                <div className="font-bold text-[11px] truncate">MCA Student</div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast confirmation */}
        <AnimatePresence>
          {showSuccessToast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Profile picture updated and saved successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
