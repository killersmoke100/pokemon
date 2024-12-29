export function interpretGenderRate(genderRate: number): string[] {
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

export function capitaliseFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function convertDecimetersToMeters(num: number): number {
  return Math.round((num / 10) * 10) / 10;
}

export function convertDecigramsToKilograms(num: number): number {
  return num / 10;
}