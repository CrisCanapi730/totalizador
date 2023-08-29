import  {calcularImpuesto, totalConImpuesto } from "./impuesto";
describe("Impuesto", () => {
    it("deberia devolver el impuesto del total del estado CA", () => {
      expect(calcularImpuesto("CA",100)).toEqual(8.25);
    });
    it("deberia devolver el impuesto del total del estado TX", () => {
      expect(calcularImpuesto("TX",500)).toEqual(31.25);
    });

    it("deberia devolver el total con impuesto del estado TX", () => {
        expect(totalConImpuesto("TX",500)).toEqual(531.25);
      });
  });
  