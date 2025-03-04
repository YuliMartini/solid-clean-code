(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruits: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruits);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = "red" | "yellow" | "purple";

  function getFruitsByColor(color: FruitColor): string[] {
    const coloredFruits = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uva"],
    };

    if (!Object.keys(coloredFruits).includes(color))
      throw Error("the color must be: red, yellow, purple");

    return coloredFruits[color];
  }

  // Simplificar esta función
  let isFirstStepWorking: boolean = true;
  let isSecondStepWorking: boolean = true;
  let isThirdStepWorking: boolean = true;
  let isFourthStepWorking: boolean = true;

  function workingSteps(): string {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    return !isFourthStepWorking ? "Fouth step broken." : "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
