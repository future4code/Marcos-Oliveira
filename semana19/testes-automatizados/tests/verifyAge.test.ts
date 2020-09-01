import { User, NACIONALITY, Casino, LOCATION, verifyAge } from "../src/verifyAge";

describe ("Testing verify age", () => {

  test("Brazilian allowed", () => {
    const brazilian: User = {
      name: "Marcos",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    
    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };
    
    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Marcos"]);
  });

  test("American allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });


  test("No one allowed", () => {
    const firstBrazilian: User = {
      name: "Marcos",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Danilo",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const firstAmerican: User = {
      name: "Christian",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "Bela",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      firstBrazilian,
      secondBrazilian,
      firstAmerican,
      secondAmerican,
    ]);

    expect(result.brazilians.unallowed).toEqual(["Marcos", "Danilo"]);
    expect(result.americans.unallowed).toEqual(["Christian","Bela"]);
  });

  
  test("2 american allowed and 2 brazilians unallowed", () => {
    const firstBrazilian: User = {
      name: "Amanda",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Luana",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const firstAmerican: User = {
      name: "Jack",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "Rose",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Palms Casino Resort",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      firstBrazilian,
      secondBrazilian,
      firstAmerican,
      secondAmerican,
    ]);

    expect(result.brazilians.unallowed).toEqual(["Amanda", "Luana"]);
    expect(result.americans.allowed).toEqual(["Jack", "Rose"]);
  });


  test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Marcos",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });


  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Jack",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.unallowed.length).toBe(0);
  });


  test("No one allowed", () => {
    const firstBrazilian: User = {
      name: "Marcos",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Amanda",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const firstAmerican: User = {
      name: "Jim",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "Rachel",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      firstBrazilian,
      secondBrazilian,
      firstAmerican,
      secondAmerican,
    ]);

    expect(result.brazilians.unallowed).toContain("Marcos");
    expect(result.americans.unallowed).toContain("Rachel");
  });


  test("2 american allowed and 2 brazilians unallowed", () => {
    const firstBrazilian: User = {
      name: "Danilo",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Gabriela",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const firstAmerican: User = {
      name: "Ross",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "Monica",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      firstBrazilian,
      secondBrazilian,
      firstAmerican,
      secondAmerican,
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });

})