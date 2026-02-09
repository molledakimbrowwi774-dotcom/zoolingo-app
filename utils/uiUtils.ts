// 样式合并辅助函数
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// 1. 核心修复：导出 App.tsx 必须的随机选择函数
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// 2. 核心修复：导出 10 种马卡龙背景色
export const PASTEL_COLORS = [
  '#FFD8A8', '#D0EBFF', '#B2F2BB', '#FFDEEB', '#E5DBFF',
  '#FFF3BF', '#FABEBE', '#C3FAE8', '#FFE3E3', '#E9ECEF'
];

// 3. 核心修复：导出 10 种动物头像图标
export const ANIMAL_ICON_MAP = {
  Lion: '🦁',
  Tiger: '🐯',
  Bear: '🐻',
  Panda: '🐼',
  Koala: '🐨',
  Rabbit: '🐰',
  Fox: '🦊',
  Cat: '🐱',
  Dog: '🐶',
  Frog: '🐸'
};
