// 样式合并工具
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// 1. 导出 App.tsx 寻找的随机函数
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// 2. 导出 App.tsx 寻找的颜色库
export const PASTEL_COLORS = [
  '#FFD8A8', '#D0EBFF', '#B2F2BB', '#FFDEEB', '#E5DBFF',
  '#FFF3BF', '#FABEBE', '#C3FAE8', '#FFE3E3', '#E9ECEF'
];

// 3. 导出 App.tsx 寻找的图标映射
export const ANIMAL_ICON_MAP = {
  Lion: '🦁', Tiger: '🐯', Bear: '🐻', Panda: '🐼', Koala: '🐨',
  Rabbit: '🐰', Fox: '🦊', Cat: '🐱', Dog: '🐶', Frog: '🐸'
};
