/**
 * Concatente two strings
 * if both are not empty, or trim and return
 * first one or second one.
 *
 * @param string1
 * @param string2
 * @returns string
 */
export const concatenate = (string1: string, string2: string) => {
  const trimmeds1 = string1.trim();
  const trimmeds2 = string2.trim();
  if (trimmeds2 === "") {
    return trimmeds1;
  }
  if (trimmeds1 === "") {
    return trimmeds2;
  }
  return `${trimmeds1} ${trimmeds2}`;
};
