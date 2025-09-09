'use client';

import { useEffect, useState } from 'react';

// 移动端检测 Hook
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent) || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
}

// 视口检测 Hook
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}

// 触摸优化组件
interface TouchOptimizedProps {
  children: React.ReactNode;
  className?: string;
  onTap?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
}

export function TouchOptimized({
  children,
  className = '',
  onTap,
  onLongPress,
  disabled = false
}: TouchOptimizedProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    if (disabled) return;
    
    setIsPressed(true);
    
    if (onLongPress) {
      const timer = setTimeout(() => {
        onLongPress();
        setIsPressed(false);
      }, 500); // 500ms 长按
      setLongPressTimer(timer);
    }
  };

  const handleTouchEnd = () => {
    if (disabled) return;
    
    setIsPressed(false);
    
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
      onTap?.();
    } else if (!onLongPress) {
      onTap?.();
    }
  };

  const handleTouchCancel = () => {
    setIsPressed(false);
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  return (
    <div
      className={`
        ${className}
        ${isPressed ? 'opacity-70 scale-95' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-150 ease-out
        touch-manipulation
        select-none
      `}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchCancel}
    >
      {children}
    </div>
  );
}

// 移动端导航组件
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MobileNav({ isOpen, onClose, children }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* 导航内容 */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* 关闭按钮 */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="关闭导航"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* 导航内容 */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

// 移动端优化的输入框
interface MobileInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export function MobileInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false
}: MobileInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={`
        ${className}
        w-full px-4 py-3 text-base
        border border-gray-300 rounded-lg
        focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:opacity-50 disabled:cursor-not-allowed
        touch-manipulation
        ${type === 'search' ? 'appearance-none' : ''}
      `}
      // 移动端优化属性
      autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'off'}
      autoCapitalize={type === 'email' ? 'none' : 'sentences'}
      autoCorrect={type === 'email' ? 'off' : 'on'}
      spellCheck={type === 'email' ? false : true}
    />
  );
}

// 移动端优化的按钮
interface MobileButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function MobileButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = ''
}: MobileButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 touch-manipulation select-none flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-4 py-3 text-base min-h-[44px]',
    lg: 'px-6 py-4 text-lg min-h-[52px]'
  };

  return (
    <TouchOptimized
      onTap={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </TouchOptimized>
  );
}

// 移动端优化的卡片组件
interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export function MobileCard({
  children,
  className = '',
  padding = 'md',
  shadow = true
}: MobileCardProps) {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  return (
    <div className={`
      bg-white rounded-lg border
      ${shadow ? 'shadow-sm' : ''}
      ${paddingClasses[padding]}
      ${className}
    `}>
      {children}
    </div>
  );
}

// 移动端安全区域组件
interface SafeAreaProps {
  children: React.ReactNode;
  className?: string;
}

export function SafeArea({ children, className = '' }: SafeAreaProps) {
  return (
    <div className={`
      ${className}
      pb-safe-area-inset-bottom
      pt-safe-area-inset-top
      pl-safe-area-inset-left
      pr-safe-area-inset-right
    `}>
      {children}
    </div>
  );
}