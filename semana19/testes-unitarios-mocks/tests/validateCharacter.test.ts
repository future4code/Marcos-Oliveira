import { validateCharacter } from "../src/validateCharacter";

describe ("Testing validate character", () => {
  
  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });
    
    expect(result).toBe(false);
  });

  test("Should return false for empty life", () => {
    const result = validateCharacter({
      name: "Anderson Silva",
      life: undefined,
      strength: 700,
      defense: 800,
    });
    
    expect(result).toBe(false);
  });

  test("Should return false for empty strength", () => {
    const result = validateCharacter({
      name: "Minotauro",
      life: 1600,
      strength: undefined,
      defense: 800,
    });
    
    expect(result).toBe(false);
  });

  test("Should return false for empty defense", () => {
    const result = validateCharacter({
      name: "José Aldo",
      life: 1400,
      strength: 6000,
      defense: undefined,
    });
    
    expect(result).toBe(false);
  });

  test("Should return false for negative value", () => {
    const result = validateCharacter({
      name: "José Aldo",
      life: 1400,
      strength: 6000,
      defense: -100,
    });
    
    expect(result).toBe(false);
  });

  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Jon Jones",
      life: 1400,
      strength: 6000,
      defense: 0,
    });
    
    expect(result).toBe(false);
  });

})