// import React from 'react';

const useValidate = () => {
  const normalizeText = (text: string) => {
    const chars = 'áéíóúüÁÉÍÓÚÜ';
    const mutateText = 'aeiouuAEIOUU';

    for (let i = 0; i < chars.length; i++) {
      const regex = new RegExp(chars[i], 'g');
      text = text.replace(regex, mutateText[i]);
    }

    return text;
  };

  const includesText = (text_1: string, text_2: string) => {
    const lower_case_text_1 = text_1.toLowerCase();
    const lower_case_text_2 = text_2.toLowerCase();

    const normalized_text_1 = normalizeText(lower_case_text_1);
    const normalized_text_2 = normalizeText(lower_case_text_2);

    if (normalized_text_1?.includes(normalized_text_2)) return true;
    else return false;
  };

  return { normalizeText, includesText };
};

export { useValidate };
