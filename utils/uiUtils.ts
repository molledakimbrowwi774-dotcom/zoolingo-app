// 基础样式合并工具
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// 随机函数
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// 封面颜色库
export const PASTEL_COLORS = [
  '#FFD8A8', '#D0EBFF', '#B2F2BB', '#FFDEEB', '#E5DBFF',
  '#FFF3BF', '#FABEBE', '#C3FAE8', '#FFE3E3', '#E9ECEF'
];

// 动物图标库
export const ANIMAL_ICON_MAP = {
  Lion: '🦁', Tiger: '🐯', Bear: '🐻', Panda: '🐼', Koala: '🐨',
  Rabbit: '🐰', Fox: '🦊', Cat: '🐱', Dog: '🐶', Frog: '🐸'
};
