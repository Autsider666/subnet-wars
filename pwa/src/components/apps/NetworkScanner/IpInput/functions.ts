interface RangeObject {
  begin?: number;
  end?: number;
  result?: string;
}

export const getRange = (inputElement: HTMLInputElement): RangeObject => {
  const result: RangeObject = {};
  result.begin = inputElement.selectionStart || 0;
  result.end = inputElement.selectionEnd || 0;
  result.result = inputElement.value.substring(result.begin, result.end);
  inputElement.focus();
  return result;
};

export const isValidIPItemValue = (value: string | number | null): boolean => {
  const parsedValue = parseInt(value as string);
  return !Number.isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 255;
};
