// calendar -- 日期列表项类型
type dateListItem = {
  ifCurrentMonth: boolean,
  day: number,
  date: string,
  content?: string
}
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // 这里可以添加其他环境变量的类型定义
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

