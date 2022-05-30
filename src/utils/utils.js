export const maxNestingLevelTree = 3;

export const TASK_NO_PARENT_ID = -1;
export const TASK_NO_PARENT_TEXT = 'Отсутствует';

// Заглушка на ID.
export const generateId = () => new Date().getTime().toString(16);

export const getDateLocaleString = timestamp => new Date(timestamp).toLocaleString('ca');