import descuento from "./descuento";
describe("descuento", () => {
    it("calculo el descuento de 1000 o mas", () => {
      expect(descuento(1080)).toEqual(32.4);
    });
    it("calculo el descuento de 3000 o mas", () => {
        expect(descuento(3000)).toEqual(150);
    });
  });
  