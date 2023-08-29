import descuento from "./descuento";
describe("descuento", () => {
    it("calculo el descuento de 1000 o mas", () => {
      expect(descuento(1080)).toEqual(32.4);
    });
    it("calculo el descuento de 3000 o mas", () => {
        expect(descuento(3000)).toEqual(150);
    });
    it("calculo el descuento de 7000 o mas", () => {
        expect(descuento(7000)).toEqual(490);
    });
    it("calculo el descuento de 10000 o mas", () => {
        expect(descuento(10000)).toEqual(1000);
    });
  });
  