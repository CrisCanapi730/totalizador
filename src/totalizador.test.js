import porcentaje from "./totalizador";
describe("Porcentaje", () => {
    it("deberia retornar tasa de UT", () => {
      expect(porcentaje("UT")).toEqual(6.65);
    });
    it("deberia retornar tasa de UT", () => {
        expect(porcentaje("NV")).toEqual(8);
      });
  });