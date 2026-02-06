// 通用 UI 工具函数，修复部署报错
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// 简单的随机颜色生成，可用于头像或背景
export const getRandomColor = () => {
  const colors = ['#FFD8A8', '#D0EBFF', '#B2F2BB', '#FFDEEB', '#E5DBFF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 如果你的代码里有日期处理，这也能防报错
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('zh-CN').format(date);
};

// 处理卡片翻转的通用样式逻辑
export const getCardStyles = (isFlipped: boolean) => {
  return {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  };
};
