import { performAttack2 } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe ("Testing perform attack", () => {
  
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    
    const attacker: Character = {
      name: "Georges St-Pierre",
      life: 2000,
      defense: 200,
      strength: 600,
    };
    
    const defender: Character = {
      name: "Randy Couture",
      life: 1800,
      defense: 400,
      strength: 800,
    };
    
    performAttack2(attacker, defender, validatorMock as any);
    
    expect(defender.life).toEqual(1600);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);

    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Matt Hughes",
      life: 1800,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Chuck Liddell",
      life: 1800,
      defense: 400,
      strength: 800,
    };

    try {

      performAttack2(attacker, defender, validatorMock as any);

    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

  test("Should second perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
    
    const attacker: Character = {
      name: "Tito Ortiz",
      life: 2000,
      defense: 200,
      strength: 600,
    };
    
    const defender: Character = {
      name: "Anderson Silva",
      life: 1800,
      defense: 200,
      strength: 800,
    };
    
    performAttack2(attacker, defender, validatorMock as any);
    
    expect(defender.life).toBeLessThan(1500);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveBeenCalledWith(defender);
  });

})