export const interpretGenderRate = (genderRate: number): string[] => {
    if (genderRate === -1) {
      return ["Genderless"];
    }
    if (genderRate === 0) {
      return ["Male"];
    }
    if (genderRate === 8) {
      return ["Female"];
    }
    else {
      return ["Male", "Female"];
    }
  };

export function stringIdToNumber(string_id: string): number {
  return parseInt(string_id)
}
