import porcentaje from "./totalizador";
describe("Porcentaje", () => {
    it("deberia retornar tasa de UT", () => {
      expect(porcentaje("UT")).toEqual(6.65);
    });
    it("deberia retornar tasa de NV", () => {
        expect(porcentaje("NV")).toEqual(8);
      });
    it("deberia retornar tasa de TX", () => {
        expect(porcentaje("TX")).toEqual(6.25);
     });
    it("deberia retornar tasa de LA", () => {
        expect(porcentaje("LA")).toEqual(4);
     });
    it("deberia retornar tasa de UT", () => {
        expect(porcentaje("CA")).toEqual(8.25);
     });
  });