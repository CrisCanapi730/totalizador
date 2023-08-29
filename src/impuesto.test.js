import calcularImpuesto from "./impuesto";
describe("Impuesto", () => {
    it("deberia devolver el impuesto del total del estado CA", () => {
      expect(calcularImpuesto("CA",100)).toEqual(8.25);
    });
  });
  